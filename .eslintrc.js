module.exports = {
  "parser":"babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "linebreak-style": [0 ,"error", "windows"],
    indent:0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    
  },
};
