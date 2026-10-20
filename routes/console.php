<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

use App\Services\SubscriptionService;
use Illuminate\Support\Facades\Schedule;

// Tandai langganan yang lewat masa berlaku (butuh cron: * * * * * php artisan schedule:run)
Schedule::call(fn () => app(SubscriptionService::class)->expireOld())->hourly()->name('langganan:kedaluwarsa');
