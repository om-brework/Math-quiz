<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role', 16)->default('parent')->after('email')->index(); // admin | parent
            $table->string('phone', 32)->nullable()->after('role');
        });

        // Anak (akun siswa). Login dengan username + PIN, atau dibuka orang tua dari perangkatnya.
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parent_id')->constrained('users')->cascadeOnDelete();
            $table->string('name', 60);
            $table->string('grade', 8); // sd1 … sma3
            $table->string('username', 40)->unique();
            $table->string('pin');
            $table->string('avatar', 24)->default('bintang');
            $table->rememberToken();
            $table->timestamp('last_active_at')->nullable();
            $table->timestamps();
        });

        // Kurikulum dan materi, diimpor dari content/ (php artisan konten:impor)
        Schema::create('topics', function (Blueprint $table) {
            $table->string('id', 80)->primary();
            $table->string('grade', 8)->index();
            $table->unsignedSmallInteger('number');
            $table->string('title');
            $table->text('scope');
            $table->string('moe')->nullable();
            $table->json('prerequisites')->nullable();
            $table->unsignedSmallInteger('minutes')->default(30);
            $table->boolean('has_practice')->default(false);
            $table->boolean('is_free')->default(false);
            $table->longText('body');
            $table->timestamps();
        });

        Schema::create('error_codes', function (Blueprint $table) {
            $table->string('code', 60)->primary();
            $table->string('name');
            $table->string('category', 60);
            $table->text('explanation');
            $table->text('advice');
        });

        // Paket langganan dan pembayaran (Midtrans)
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 40)->unique();
            $table->string('name', 80);
            $table->string('description')->nullable();
            $table->unsignedInteger('price'); // Rupiah
            $table->unsignedSmallInteger('period_months');
            $table->unsignedSmallInteger('max_students')->default(1);
            $table->json('features')->nullable();
            $table->boolean('is_active')->default(true);
            $table->unsignedSmallInteger('sort')->default(0);
            $table->timestamps();
        });

        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('plan_id')->nullable()->constrained()->nullOnDelete();
            $table->string('status', 16)->index(); // trial | active | expired | cancelled
            $table->timestamp('starts_at');
            $table->timestamp('ends_at')->index();
            $table->string('note')->nullable();
            $table->timestamps();
        });

        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('plan_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('subscription_id')->nullable()->constrained()->nullOnDelete();
            $table->string('order_id', 64)->unique();
            $table->unsignedInteger('amount');
            $table->string('status', 16)->default('pending')->index(); // pending | paid | failed | expired | refunded
            $table->string('method', 40)->nullable();
            $table->string('snap_token')->nullable();
            $table->string('redirect_url')->nullable();
            $table->string('gateway_transaction_id')->nullable();
            $table->timestamp('paid_at')->nullable()->index();
            $table->json('payload')->nullable();
            $table->timestamps();
        });

        // Latihan
        Schema::create('practice_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->string('topic_id', 80);
            $table->unsignedSmallInteger('total')->default(0);
            $table->unsignedSmallInteger('correct')->default(0);
            $table->unsignedInteger('duration_ms')->default(0);
            $table->timestamp('finished_at')->nullable();
            $table->timestamps();
            $table->index(['student_id', 'created_at']);
        });

        Schema::create('attempts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->foreignId('practice_session_id')->nullable()->constrained()->nullOnDelete();
            $table->string('topic_id', 80);
            $table->string('skill', 60);
            $table->unsignedTinyInteger('level');
            $table->unsignedBigInteger('seed');
            $table->text('question_text');
            $table->boolean('correct');
            $table->unsignedTinyInteger('hints_used')->default(0);
            $table->unsignedInteger('duration_ms')->default(0);
            $table->json('steps');
            $table->timestamp('created_at')->useCurrent();
            $table->index(['student_id', 'topic_id']);
            $table->index(['student_id', 'created_at']);
        });

        Schema::create('attempt_errors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('attempt_id')->constrained()->cascadeOnDelete();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->string('topic_id', 80);
            $table->string('skill', 60);
            $table->string('step_id', 60);
            $table->string('code', 60);
            $table->string('given')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->index(['student_id', 'code']);
            $table->index(['student_id', 'created_at']);
        });

        // Penguasaan per keterampilan, dipakai untuk tingkat soal adaptif dan laporan
        Schema::create('skill_masteries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->string('topic_id', 80);
            $table->string('skill', 60);
            $table->unsignedTinyInteger('level')->default(1);
            $table->unsignedSmallInteger('streak')->default(0);
            $table->unsignedInteger('attempts')->default(0);
            $table->unsignedInteger('correct')->default(0);
            $table->string('recent', 20)->default(''); // 10 hasil terakhir, mis. "1101110111"
            $table->unsignedTinyInteger('mastery')->default(0); // 0–100
            $table->timestamps();
            $table->unique(['student_id', 'topic_id', 'skill']);
        });
    }

    public function down(): void
    {
        foreach (['skill_masteries', 'attempt_errors', 'attempts', 'practice_sessions', 'payments', 'subscriptions', 'plans', 'error_codes', 'topics', 'students'] as $t) {
            Schema::dropIfExists($t);
        }
        Schema::table('users', fn (Blueprint $table) => $table->dropColumn(['role', 'phone']));
    }
};
