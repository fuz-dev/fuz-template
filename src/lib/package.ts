// generated by src/lib/package.gen.ts

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_template',
	description:
		'a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro',
	version: '0.0.1',
	public: true,
	homepage: 'https://template.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_template',
	type: 'module',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	devDependencies: {
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.76.0',
		'@fuz.dev/fuz_contextmenu': '^0.5.0',
		'@fuz.dev/fuz_dialog': '^0.4.0',
		'@fuz.dev/fuz_library': '^0.16.1',
		'@grogarden/gro': '^0.98.0',
		'@grogarden/util': '^0.15.2',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.1',
		'@typescript-eslint/eslint-plugin': '^6.9.0',
		'@typescript-eslint/parser': '^6.9.0',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./example.js': {default: './dist/example.js', types: './dist/example.d.ts'},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
	},
	modules: {
		'./example.js': {
			path: 'example.ts',
			declarations: [{name: 'example_a', kind: 'VariableDeclaration'}],
		},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
	},
} satisfies PackageJson;

// generated by src/lib/package.gen.ts
