module.exports = {
    extends: ['@commitlint/config-angular'],
    'rules': {
        'header-max-length': [0],
        'body-max-length': [0],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'chore', 'build'] ]
    }
};
