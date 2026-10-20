import type { TopicDef } from '../../types';
import { topic as t01 } from './sd3-01-bilangan-sampai-10000';
import { topic as t02 } from './sd3-02-tambah-kurang-bersusun-4-angka';
import { topic as t03 } from './sd3-03-perkalian-6-7-8-9';
import { topic as t04 } from './sd3-04-perkalian-bersusun';
import { topic as t05 } from './sd3-05-pembagian-bersusun';
import { topic as t06 } from './sd3-06-pecahan-senilai';
import { topic as t07 } from './sd3-07-tambah-kurang-pecahan-berkaitan';
import { topic as t08 } from './sd3-08-uang';
import { topic as t09 } from './sd3-09-satuan-ukur';
import { topic as t10 } from './sd3-10-waktu';
import { topic as t11 } from './sd3-11-luas-keliling';
import { topic as t12 } from './sd3-12-sudut';
import { topic as t13 } from './sd3-13-garis-sejajar-tegak-lurus';
import { topic as t14 } from './sd3-14-diagram-batang';

/** Generator soal SD3. Satu file per topik, didaftarkan di sini (urut nomor topik). */
export const topics: TopicDef[] = [t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14];
