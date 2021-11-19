module.exports = {
  root: true,
  env : {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  plugins: [
    'align-assignments',
    'import',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // vvv assignments (= / :) alignment vvv
    'align-assignments/align-assignments': [ 'error', { requiresOnly: false }],
    'no-multi-spaces'                    : [ 'off' ], // <<< needed for align-assignments
    'key-spacing'                        : [ 'error', {
      align: {
        beforeColon: false, afterColon: true, on: 'colon', mode: 'strict',
      },
    }],
    // ^^^ assignments (= / :) alignment ^^^

    'max-len'                      : [ 'error', { code: 160, comments: 100, tabWidth: 2 }], // default 100 is too short
    'array-bracket-spacing'        : [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'no-plusplus'                  : [ 'off' ],
    'no-console'                   : [ 'off' ],
    'no-use-before-define'         : [ 'off', { functions: false, classes: false }],
    'no-underscore-dangle'         : [ 'error', { allow: [ '_id' ] }], // <<< MongoDB Ids (_id) fix
    'import/no-named-as-default'   : 0,
    'no-nested-ternary'            : [ 'off' ],
    'vue/no-multiple-template-root': [ 'off' ],
    'vue/no-v-for-template-key'    :['off'],

    // vvv airbnb-base overrides fix vvv
    'import/extensions': [ 'error', 'ignorePackages', {
      js : 'never',
      vue: 'never',
    }],
  },
};
