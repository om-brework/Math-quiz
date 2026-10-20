<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('siswa/masuk');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate(['username' => 'required|string', 'pin' => 'required|string']);
        $key = 'siswa:'.strtolower($data['username']).'|'.$request->ip();
        if (RateLimiter::tooManyAttempts($key, 5)) {
            throw ValidationException::withMessages(['pin' => 'Terlalu banyak percobaan. Tunggu '.RateLimiter::availableIn($key).' detik.']);
        }
        if (! Auth::guard('student')->attempt(['username' => strtolower($data['username']), 'password' => $data['pin']], true)) {
            RateLimiter::hit($key, 60);
            throw ValidationException::withMessages(['pin' => 'Username atau PIN salah.']);
        }
        RateLimiter::clear($key);
        $request->session()->regenerate();

        return redirect()->intended(route('siswa.home'));
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('student')->logout();
        // orang tua yang membuka mode siswa tetap login di akunnya sendiri
        if ($request->user()) {
            return redirect()->route('parent.dashboard');
        }
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('siswa.login');
    }
}
