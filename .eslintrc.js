module.exports = {
   "extends": "airbnb-base",
   "env": {
    "mocha": true
  },
    rules: {
    "arrow-body-style": 0,
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ],
  },
};