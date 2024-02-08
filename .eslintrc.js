module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'prettier',//这一行
        'plugin:prettier/recommended',//这一行
        'plugin:@/typescript-eslint/recommended',//这一行
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
}
