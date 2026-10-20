/* Tulis content/latihan.json: daftar topik yang punya generator soal beserta keterampilannya.
   Dipakai backend (konten:impor) untuk menandai topik yang bisa dilatih dan menamai keterampilan di laporan.
   Jalankan: npm run manifest */
import { writeFileSync } from 'node:fs';
import { TOPICS } from '../resources/js/practice/generators';

const out = Object.fromEntries(TOPICS.map((t) => [t.topic, t.skills.map((s) => ({ code: s.code, name: s.name }))]));
writeFileSync(new URL('../content/latihan.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(`content/latihan.json: ${TOPICS.length} topik, ${TOPICS.reduce((n, t) => n + t.skills.length, 0)} keterampilan`);
