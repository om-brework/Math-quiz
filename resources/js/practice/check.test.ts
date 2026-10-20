import { describe, expect, it } from 'vitest';
import { checkColumn, checkFraction, columnPlan, divisionPlan, normalizeNumber } from './check';

describe('normalizeNumber', () => {
    it('membaca format Indonesia', () => {
        expect(normalizeNumber('1.250')).toBe('1250');
        expect(normalizeNumber('2,5')).toBe('2.5');
        expect(normalizeNumber('Rp15.000')).toBe('15000');
        expect(normalizeNumber(' 007 ')).toBe('7');
        expect(normalizeNumber('15:30')).toBe(normalizeNumber('15.30'));
    });
});

describe('hitung susun', () => {
    it('tambah dengan simpanan', () => {
        const p = columnPlan('+', 47, 38);
        expect(p.result).toEqual(['5', '8', '']);
        expect(p.aux).toEqual([0, 1, 0]);
        expect(checkColumn(p, { result: ['5', '8', ''], aux: ['', '1', ''] }).ok).toBe(true);
        expect(checkColumn(p, { result: ['5', '7', ''], aux: ['', '', ''] }).errors).toContain('lupa-simpan');
    });
    it('kurang meminjam melewati nol', () => {
        const p = columnPlan('-', 403, 158);
        expect(p.answer).toBe(245);
        expect(p.aux).toEqual([13, 9, 3]);
        expect(checkColumn(p, { result: ['5', '4', '2'], aux: ['13', '9', '3'] }).ok).toBe(true);
        expect(checkColumn(p, { result: ['5', '5', '3'], aux: ['', '', ''] }).errors).toEqual(expect.arrayContaining(['kurang-terbalik', 'lupa-pinjam']));
    });
    it('kali satu angka', () => {
        const p = columnPlan('×', 236, 4);
        expect(p.answer).toBe(944);
        expect(p.aux).toEqual([0, 2, 1, 0]);
        expect(checkColumn(p, { result: ['4', '2', '8'], aux: ['', '', ''] }).errors).toContain('lupa-simpan-kali');
    });
});

describe('porogapit', () => {
    it('menulis 0 di tengah hasil bagi', () => {
        const p = divisionPlan(412, 4);
        expect(p.quotientDigits).toEqual(['1', '0', '3']);
        expect(p.cycles.map((c) => c.part)).toEqual([4, 1, 12]);
    });
    it('angka pertama lebih kecil dari pembagi', () => {
        const p = divisionPlan(252, 7);
        expect(p.quotientDigits).toEqual(['', '3', '6']);
        expect(p.remainder).toBe(0);
    });
    it('sisa', () => {
        expect(divisionPlan(75, 6)).toMatchObject({ quotient: 12, remainder: 3 });
    });
});

describe('pecahan', () => {
    it('senilai dan paling sederhana', () => {
        expect(checkFraction({ num: 2, den: 4 }, { num: 1, den: 2 }).ok).toBe(true);
        expect(checkFraction({ num: 2, den: 4 }, { num: 1, den: 2 }, true).reason).toBe('belum-sederhana');
    });
});

import { fmt, terbilang } from './format';
describe('format', () => {
    it('angka dan kata', () => {
        expect(fmt(12500)).toBe('12.500');
        expect(terbilang(345)).toBe('tiga ratus empat puluh lima');
        expect(terbilang(1115)).toBe('seribu seratus lima belas');
        expect(terbilang(70011)).toBe('tujuh puluh ribu sebelas');
    });
});
