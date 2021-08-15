module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      { allowArrowFunction: true },
    ],
  },
}
