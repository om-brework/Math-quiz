<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $guarded = [];

    protected function casts(): array
    {
        return ['features' => 'array', 'is_active' => 'boolean', 'price' => 'integer'];
    }

    public function subscriptionsActive(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Subscription::class)->where('status', 'active')->where('ends_at', '>', now());
    }

    /** Harga per bulan, untuk ditampilkan di halaman paket */
    public function monthlyPrice(): int
    {
        return (int) round($this->price / max(1, $this->period_months));
    }
}
