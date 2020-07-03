module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "plugins": ["jest"],
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:jest/style"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
