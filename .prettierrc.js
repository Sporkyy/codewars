/* https://michelelarson.com/prettier-config/ */

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  insertPragma: false,
  jsxBracketSameLine: true,
  printWidth: 80,
  proseWrap: 'always',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 9999,
      },
    },
  ],
};
