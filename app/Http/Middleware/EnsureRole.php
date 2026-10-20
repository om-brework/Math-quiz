<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/** role:admin atau role:parent. Admin juga boleh membuka halaman orang tua. */
class EnsureRole
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        $user = $request->user();
        abort_unless($user && ($user->role === $role || $user->isAdmin()), 403);

        return $next($request);
    }
}
