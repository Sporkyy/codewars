module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
  },
};
