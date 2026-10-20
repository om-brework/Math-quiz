<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    protected $fillable = ['name', 'email', 'password', 'role', 'phone'];

    protected $hidden = ['password', 'remember_token'];

    protected function casts(): array
    {
        return ['email_verified_at' => 'datetime', 'password' => 'hashed'];
    }

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function students(): HasMany
    {
        return $this->hasMany(Student::class, 'parent_id');
    }

    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }

    /** Langganan yang sedang berlaku (trial atau aktif), yang berakhir paling lambat */
    public function currentSubscription(): ?Subscription
    {
        return $this->subscriptions()
            ->whereIn('status', ['trial', 'active'])
            ->where('ends_at', '>', now())
            ->with('plan')
            ->orderByDesc('ends_at')
            ->first();
    }

    public function hasAccess(): bool
    {
        return $this->isAdmin() || $this->currentSubscription() !== null;
    }

    /** Batas jumlah anak: dari paket aktif, atau 1 selama trial / tanpa langganan */
    public function maxStudents(): int
    {
        return $this->currentSubscription()?->plan?->max_students ?? (int) config('langkah.trial_max_students', 1);
    }
}
