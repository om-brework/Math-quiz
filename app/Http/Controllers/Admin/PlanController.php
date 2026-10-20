<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class PlanController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/paket', [
            'plans' => Plan::orderBy('sort')->withCount(['subscriptionsActive as active'])->get(),
        ]);
    }

    private function validated(Request $request, ?Plan $plan = null): array
    {
        $data = $request->validate([
            'slug' => ['required', 'alpha_dash', 'max:40', Rule::unique('plans', 'slug')->ignore($plan)],
            'name' => 'required|string|max:80',
            'description' => 'nullable|string|max:255',
            'price' => 'required|integer|min:1000',
            'period_months' => 'required|integer|between:1,36',
            'max_students' => 'required|integer|between:1,20',
            'features' => 'nullable|string|max:2000',
            'is_active' => 'boolean',
            'sort' => 'integer|min:0',
        ]);
        $data['features'] = array_values(array_filter(array_map('trim', preg_split('/\R/', (string) ($data['features'] ?? '')))));

        return $data;
    }

    public function store(Request $request): RedirectResponse
    {
        Plan::create($this->validated($request));

        return back()->with('success', 'Paket ditambahkan.');
    }

    public function update(Request $request, Plan $plan): RedirectResponse
    {
        $plan->update($this->validated($request, $plan));

        return back()->with('success', 'Paket diperbarui. Langganan yang sudah dibayar tidak berubah.');
    }
}
