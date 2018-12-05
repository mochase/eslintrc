module.exports = {
    "root": true,
    "parserOptions": {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    "extends": "standard",
    "plugins": [
      "standard",
      "promise"
    ],
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jquery": true
    },
    "rules": {
      'camelcase': 0,
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow object-curly-spacing
      'object-curly-spacing': 0,
      // allow standard/no-callback-literal
      'standard/no-callback-literal': 0,
      'no-inner-declarations': 0
    },
    "globals": {
      "message": true,
      "loading": true,
      "Vue": true
    }
  }
  