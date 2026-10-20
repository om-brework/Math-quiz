<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\MidtransWebhookController;
use App\Http\Controllers\Ortu;
use App\Http\Controllers\Student;
use App\Models\Plan;
use App\Models\Topic;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('welcome', [
    'plans' => Plan::where('is_active', true)->orderBy('sort')->get(['id', 'name', 'description', 'price', 'period_months', 'max_students', 'features']),
    'topicCount' => Topic::count(),
]))->name('home');

// Setelah login: arahkan sesuai peran
Route::get('dashboard', fn () => redirect()->route(auth()->user()->isAdmin() ? 'admin.dashboard' : 'parent.dashboard'))
    ->middleware('auth')->name('dashboard');

// Notifikasi pembayaran dari Midtrans (tanpa login, diverifikasi dengan signature)
Route::post('midtrans/notifikasi', MidtransWebhookController::class)->name('midtrans.notify');

/* ---------- Orang tua ---------- */
Route::middleware(['auth', 'role:parent'])->prefix('orang-tua')->group(function () {
    Route::get('/', [Ortu\DashboardController::class, 'index'])->name('parent.dashboard');
    Route::post('anak', [Ortu\StudentController::class, 'store'])->name('students.store');
    Route::put('anak/{student}', [Ortu\StudentController::class, 'update'])->name('students.update');
    Route::delete('anak/{student}', [Ortu\StudentController::class, 'destroy'])->name('students.destroy');
    Route::post('anak/{student}/buka', [Ortu\StudentController::class, 'switchTo'])->name('students.switch');
    Route::get('anak/{student}/laporan', [Ortu\ReportController::class, 'show'])->name('students.report');

    Route::get('langganan', [Ortu\BillingController::class, 'index'])->name('billing.index');
    Route::post('langganan/bayar', [Ortu\BillingController::class, 'checkout'])->name('billing.checkout');
    Route::get('langganan/selesai', [Ortu\BillingController::class, 'finish'])->name('billing.finish');
    Route::post('langganan/{payment}/simulasi', [Ortu\BillingController::class, 'simulate'])->name('billing.simulate');
});

/* ---------- Siswa ---------- */
Route::get('masuk-siswa', [Student\AuthController::class, 'create'])->name('siswa.login');
Route::post('masuk-siswa', [Student\AuthController::class, 'store'])->middleware('throttle:20,1')->name('siswa.login.store');
Route::post('keluar-siswa', [Student\AuthController::class, 'destroy'])->name('siswa.logout');

Route::middleware('auth:student')->prefix('belajar')->group(function () {
    Route::get('/', [Student\LearnController::class, 'home'])->name('siswa.home');
    Route::get('materi/{topic}', [Student\LearnController::class, 'topic'])->name('siswa.topic');
    Route::get('latihan/{topic}', [Student\PracticeController::class, 'start'])->name('siswa.practice');
    Route::post('latihan/sesi/{session}/jawaban', [Student\PracticeController::class, 'answer'])->middleware('throttle:120,1')->name('siswa.answer');
    Route::post('latihan/sesi/{session}/selesai', [Student\PracticeController::class, 'finish'])->name('siswa.finish');
    Route::get('latihan/sesi/{session}/hasil', [Student\PracticeController::class, 'result'])->name('siswa.result');
});

/* ---------- Admin ---------- */
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', Admin\DashboardController::class)->name('dashboard');
    Route::get('paket', [Admin\PlanController::class, 'index'])->name('plans');
    Route::post('paket', [Admin\PlanController::class, 'store'])->name('plans.store');
    Route::put('paket/{plan}', [Admin\PlanController::class, 'update'])->name('plans.update');
    Route::get('pembayaran', [Admin\BillingController::class, 'payments'])->name('payments');
    Route::get('pelanggan', [Admin\BillingController::class, 'subscribers'])->name('subscribers');
    Route::post('pelanggan/{user}/tambah-masa', [Admin\BillingController::class, 'grant'])->name('subscribers.grant');
    Route::post('langganan/{subscription}/batal', [Admin\BillingController::class, 'cancel'])->name('subscriptions.cancel');
});

if (app()->environment('local')) {
    Route::get('coba-soal', fn () => Inertia::render('dev/coba-soal'))->name('dev.soal');
    Route::get('coba-visual', fn () => Inertia::render('dev/coba-visual'))->name('dev.visual');
}

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
