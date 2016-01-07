module.exports = {
  extends: 'airbnb/base',
  rules: {
      // Best Practices
      complexity: [2, 11],

      // Stylistic Issues
	  'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
	  indent: [2, 4, {'SwitchCase': 1, 'VariableDeclarator': 1}]
  }
};
