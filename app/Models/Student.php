<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

/** Akun anak. Login lewat guard "student" (username + PIN). */
class Student extends Authenticatable
{
    protected $fillable = ['parent_id', 'name', 'grade', 'username', 'pin', 'avatar', 'last_active_at'];

    protected $hidden = ['pin', 'remember_token'];

    protected function casts(): array
    {
        return ['pin' => 'hashed', 'last_active_at' => 'datetime'];
    }

    public function getAuthPassword(): string
    {
        return $this->pin;
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(User::class, 'parent_id');
    }

    public function attempts(): HasMany
    {
        return $this->hasMany(Attempt::class);
    }

    public function masteries(): HasMany
    {
        return $this->hasMany(SkillMastery::class);
    }

    public function sessions(): HasMany
    {
        return $this->hasMany(PracticeSession::class);
    }

    /** Boleh membuka topik ini? Topik gratis selalu boleh; lainnya butuh langganan aktif orang tua. */
    public function canOpen(Topic $topic): bool
    {
        return $topic->is_free || $this->parent->hasAccess();
    }
}
