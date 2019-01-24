import external from 'rollup-plugin-peer-deps-external'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: false,
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'named',
			sourcemap: false,
		}
	],
	external: ['react', 'react-dom' ],
	plugins: [
		external(),
		url(),
		svgr(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		typescript({
			tsconfig: './tsconfig.json',
			clean: true,
			module: 'ES2015',
		}),
		commonjs(),
	],
}
