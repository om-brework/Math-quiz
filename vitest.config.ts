import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
    resolve: { alias: { '@': resolve(__dirname, 'resources/js') } },
    test: { include: ['resources/js/**/*.test.ts'] },
});
