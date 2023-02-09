module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.{,ts,tsx}': () => 'npm run check-types',
  '*.{json,yaml,css}': ['prettier --write'],
};
