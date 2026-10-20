<?php

namespace Database\Seeders;

use App\Models\Plan;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Artisan::call('konten:impor');

        // Harga awal, bisa diubah dari halaman Admin → Paket
        $plans = [
            ['slug' => 'bulanan', 'name' => 'Bulanan', 'price' => 79000, 'period_months' => 1, 'max_students' => 3, 'sort' => 1,
                'description' => 'Fleksibel, bayar per bulan', 'features' => ['Semua materi SD–SMA', 'Latihan bertahap tanpa batas', 'Laporan untuk orang tua', 'Sampai 3 anak']],
            ['slug' => 'semester', 'name' => '6 Bulan', 'price' => 399000, 'period_months' => 6, 'max_students' => 3, 'sort' => 2,
                'description' => 'Hemat 16% untuk satu semester', 'features' => ['Semua fitur Bulanan', 'Hemat Rp75.000']],
            ['slug' => 'tahunan', 'name' => 'Tahunan', 'price' => 699000, 'period_months' => 12, 'max_students' => 5, 'sort' => 3,
                'description' => 'Paling hemat, untuk satu tahun ajaran', 'features' => ['Semua fitur Bulanan', 'Sampai 5 anak', 'Hemat Rp249.000']],
        ];
        foreach ($plans as $p) {
            Plan::updateOrCreate(['slug' => $p['slug']], $p);
        }

        // Admin pertama dari .env (ADMIN_EMAIL, ADMIN_PASSWORD)
        if ($email = env('ADMIN_EMAIL')) {
            User::updateOrCreate(['email' => $email], [
                'name' => 'Admin', 'role' => 'admin', 'password' => env('ADMIN_PASSWORD', 'ganti-password-ini'), 'email_verified_at' => now(),
            ]);
        }

        if (app()->environment('local')) {
            $this->call(DemoSeeder::class);
        }
    }
}
