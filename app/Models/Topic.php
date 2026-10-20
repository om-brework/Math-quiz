<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    public $incrementing = false;

    protected $keyType = 'string';

    protected $guarded = [];

    protected function casts(): array
    {
        return ['prerequisites' => 'array', 'has_practice' => 'boolean', 'is_free' => 'boolean'];
    }

    public const GRADES = [
        'sd1' => 'SD Kelas 1', 'sd2' => 'SD Kelas 2', 'sd3' => 'SD Kelas 3', 'sd4' => 'SD Kelas 4', 'sd5' => 'SD Kelas 5', 'sd6' => 'SD Kelas 6',
        'smp1' => 'SMP Kelas 7', 'smp2' => 'SMP Kelas 8', 'smp3' => 'SMP Kelas 9',
        'sma1' => 'SMA Kelas 10', 'sma2' => 'SMA Kelas 11', 'sma3' => 'SMA Kelas 12',
    ];
}
