module.exports = {
	env: {
		es6: true,
		node: true,
		browser: true,
		commonjs: true,
		'jest/globals': true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 9,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},

	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'airbnb-base',
	],
	plugins: [
		'jsx-a11y',
		'import',
		'react',
		'jest',
	],

	rules: {
		// React
		'react/boolean-prop-naming': ['error', {
			rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
		}],
		'react/no-access-state-in-setstate': 'error',
		'react/no-array-index-key': 'error',
		'react/no-did-mount-set-state': 'error',
		'react/no-did-update-set-state': 'error',
		'react/no-multi-comp': ['error', {
			ignoreStateless: true,
		}],
		'react/no-redundant-should-component-update': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': ['error', 'always'],
		'react/self-closing-comp': 'error',
		'react/sort-comp': ['error', {
			order: [
				'static-methods',
				'lifecycle',
				'everything-else',
				'render',
			],
			groups: {
				lifecycle: [
					'statics',
					'state',
					'constructor',
					'componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount',
				],
			},
		}],
		'react/void-dom-elements-no-children': 'error',
		'react/jsx-boolean-value': ['error', 'never'],
		'react/jsx-closing-bracket-location': ['error', {
			nonEmpty: 'tag-aligned',
			selfClosing: 'tag-aligned',
		}],
		'react/jsx-closing-tag-location': ['error', 'tag-aligned'],
		'react/jsx-curly-spacing': ['error', {
			when: 'always',
			spacing: {
				objectLiterals: 'never',
			},
		}],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-filename-extension': 'error',
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-max-props-per-line': ['error', {
			maximum: 4,
		}],
		'react/jsx-no-bind': 'error',
		'react/jsx-space-before-closing': 'off',
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],
		'react/jsx-wrap-multilines': ['error', {
			declaration: 'parens',
		}],
		'react/display-name': 'off',

		'jsx-a11y/click-events-have-key-events': 'off',

		// imports
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/first': 'off',
		'import/named': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-absolute-path': 'off',
		'import/no-dynamic-require': 'off',
		'import/no-webpack-loader-syntax': 'error',
		'import/prefer-default-export': 'off',
		'import/order': 'off',

		// overwriting airbnb-base-bestPractices
		curly: ['error', 'all'],
		eqeqeq: ['error', 'always'],
		'guard-for-in': 'off',
		'no-alert': 'error',
		'no-eq-null': 'error',
		'no-implicit-coercion': ['off', {
			boolean: true,
			number: true,
			string: true,
			allow: [],
		}],
		'no-implicit-globals': 'error',
		'no-invalid-this': 'off',
		'no-multi-spaces': ['error', {
			ignoreEOLComments: true,
		}],
		'no-param-reassign': 'off',
		'no-return-assign': ['error', 'except-parens'],
		'no-unused-expressions': 'off',
		'global-require': 'off',

		// overwriting airbnd-base-es6
		'arrow-body-style': 'off',
		'arrow-parens': ['error', 'always'],

		// overwriting airbnd-base-style
		'array-bracket-newline': ['error', {
			multiline: true,
			minItems: 5,
		}],
		'array-element-newline': ['error', {
			multiline: true,
			minItems: 5,
		}],
		'array-bracket-spacing': ['error', 'never'],
		'func-names': ['error', 'as-needed'],
		'func-style': ['error', 'expression'],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			FunctionExpression: {
				parameters: 1,
				body: 1
			},
			CallExpression: {
				arguments: 1
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
			ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
			ignoreComments: false
		}],
		'max-len': ['error', {
			code: 120,
			ignoreUrls: true,
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				switch: { after: false },
				throw: { after: false },
				case: { after: false },
			},
		}],
		'multiline-comment-style': ['error', 'separate-lines'],
		'newline-before-return': 'error',
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

		// general
		'no-tabs': 'off',
		'no-empty': ['error', {
			allowEmptyCatch: true,
		}],
		'no-console': 'off',
		semi: ['error', 'always'],
		'consistent-return': 'off',
		'class-methods-use-this': 'off',
		'object-curly-newline': 'off',
		'object-property-newline': ['error', {
			allowAllPropertiesOnSameLine: true,
		}],
		'lines-between-class-members': 'off',
	},
};

