import external from 'rollup-plugin-peer-deps-external'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

// @babel/core
// @babel/plugin-proposal-class-properties
// @babel/plugin-proposal-object-rest-spread
// @babel/preset-env
// @babel/preset-react
// @babel/preset-typescript
// babel-eslint
// babel-plugin-styled-components

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
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true,
		}),
		commonjs(),
	],
}
