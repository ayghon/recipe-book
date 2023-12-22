module.exports = {
  extends: ['universe/native', 'universe/web', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['sort-keys'],
  root: true,
  rules: {
    'sort-keys': 0, // disable default eslint sort-keys
    'sort-keys/sort-keys-fix': 1,
  },
};
