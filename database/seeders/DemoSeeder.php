<?php

namespace Database\Seeders;

use App\Models\User;
use App\Services\SubscriptionService;
use Illuminate\Database\Seeder;

/** Akun contoh untuk pengembangan lokal. */
class DemoSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(['email' => 'admin@langkah.test'], ['name' => 'Admin Langkah', 'role' => 'admin', 'password' => 'password', 'email_verified_at' => now()]);
        $parent = User::updateOrCreate(['email' => 'ortu@langkah.test'], ['name' => 'Nyoman', 'role' => 'parent', 'password' => 'password', 'email_verified_at' => now()]);
        app(SubscriptionService::class)->startTrial($parent);
        $parent->students()->updateOrCreate(['username' => 'putu'], ['name' => 'Putu', 'grade' => 'sd3', 'pin' => '1234', 'avatar' => 'roket']);
    }
}
