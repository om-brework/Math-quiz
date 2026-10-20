import type { TopicDef } from '../../types';
import { topic as t01 } from './sd1-01-bilangan-sampai-100';
import { topic as t02 } from './sd1-02-bilangan-urutan';
import { topic as t03 } from './sd1-03-konsep-tambah-kurang';
import { topic as t04 } from './sd1-04-tambah-kurang-bersusun-100';
import { topic as t05 } from './sd1-05-hitung-cepat';
import { topic as t06 } from './sd1-06-konsep-kali-bagi';
import { topic as t07 } from './sd1-07-uang';
import { topic as t08 } from './sd1-08-panjang-cm';
import { topic as t09 } from './sd1-09-waktu';
import { topic as t10 } from './sd1-10-bangun-datar';
import { topic as t11 } from './sd1-11-diagram-gambar';

/** Generator soal SD1. Satu file per topik, didaftarkan di sini sesuai urutan kurikulum. */
export const topics: TopicDef[] = [t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11];
