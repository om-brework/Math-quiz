<?php

namespace App\Http\Controllers\Ortu;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Topic;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StudentController extends Controller
{
    private const AVATARS = ['bintang', 'roket', 'kucing', 'paus', 'pelangi', 'bola', 'robot', 'bunga'];

    private function rules(?Student $student = null): array
    {
        return [
            'name' => ['required', 'string', 'max:60'],
            'grade' => ['required', Rule::in(array_keys(Topic::GRADES))],
            'username' => ['required', 'string', 'min:3', 'max:40', 'regex:/^[a-z0-9._]+$/', Rule::unique('students', 'username')->ignore($student)],
            'pin' => [$student ? 'nullable' : 'required', 'digits_between:4,6'],
            'avatar' => ['nullable', Rule::in(self::AVATARS)],
        ];
    }

    public function store(Request $request): RedirectResponse
    {
        $user = $request->user();
        if ($user->students()->count() >= $user->maxStudents()) {
            return back()->with('error', "Paket Anda dibatasi {$user->maxStudents()} anak. Pilih paket yang lebih besar untuk menambah anak.");
        }
        $request->merge(['username' => strtolower((string) $request->input('username'))]);
        $data = $request->validate($this->rules(), ['username.regex' => 'Username hanya huruf kecil, angka, titik, atau garis bawah.']);
        $user->students()->create($data + ['avatar' => $data['avatar'] ?? 'bintang']);

        return back()->with('success', "Akun {$data['name']} sudah dibuat. Anak bisa masuk dengan username dan PIN.");
    }

    public function update(Request $request, Student $student): RedirectResponse
    {
        $this->authorizeStudent($request, $student);
        $request->merge(['username' => strtolower((string) $request->input('username'))]);
        $data = $request->validate($this->rules($student));
        if (empty($data['pin'])) {
            unset($data['pin']);
        }
        $student->update($data);

        return back()->with('success', 'Data anak diperbarui.');
    }

    public function destroy(Request $request, Student $student): RedirectResponse
    {
        $this->authorizeStudent($request, $student);
        $student->delete();

        return back()->with('success', 'Akun anak dihapus beserta riwayatnya.');
    }

    /** Buka mode siswa di perangkat orang tua, tanpa PIN. */
    public function switchTo(Request $request, Student $student): RedirectResponse
    {
        $this->authorizeStudent($request, $student);
        Auth::guard('student')->login($student);

        return redirect()->route('siswa.home');
    }

    private function authorizeStudent(Request $request, Student $student): void
    {
        abort_unless($student->parent_id === $request->user()->id || $request->user()->isAdmin(), 403);
    }
}
