<?php

return [
    // Masa coba gratis untuk orang tua baru
    'trial_days' => (int) env('LANGKAH_TRIAL_DAYS', 7),
    // Jumlah anak yang boleh dibuat selama trial / tanpa paket
    'trial_max_students' => (int) env('LANGKAH_TRIAL_MAX_STUDENTS', 2),
    // Topik pertama di tiap kelas yang selalu gratis (materi + latihan)
    'free_topics_per_grade' => (int) env('LANGKAH_FREE_TOPICS', 2),
    // Banyak soal dalam satu sesi latihan
    'session_size' => 10,
];
