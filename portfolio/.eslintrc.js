module.exports = {
  "root": true,
  "env": {
    "node": true,
    "es6": true

  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  }
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
