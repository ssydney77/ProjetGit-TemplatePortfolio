module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      "sourceType": "module"
    },
    "rules": {
      "indent": [
        "error",
        2
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "semi": [
        "error",
        "always"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "no-console": "error",
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  };