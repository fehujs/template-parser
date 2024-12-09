const esbuild = require("esbuild")
const { rmSync } = require("node:fs")

rmSync('build', { recursive: true })

esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outfile: './build/index.js',
    platform: 'node',
    target: 'esnext',
    format: 'esm',
    sourcemap: true,
    tsconfig: './tsconfig.json',
    external: [ './node_modules/*' ],
}).catch(() => process.exit(1))