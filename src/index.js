const util = require('./util');

module.exports = (assert) => {
  assert.addExtension('is');
  assert.forExtension('is').addExtension('a');
  assert.forExtension('is').addExtension('an');

  assert.forExtension('is').forExtension('an').
    addMethod('array', (actual) => () => {
      if (!util.isArray(actual)) {
        assert.fail('Expected %s to be an array.', [actual]);
      }
    });

  assert.forExtension('is').forExtension('a').
    addMethod('number', (actual) => () => {
      if (!util.isNumber(actual)) {
        assert.fail('Expected %s to be a number.', [actual]);
      }
    }).
    addMethod('string', (actual) => () => {
      if (!util.isString(actual)) {
        assert.fail('Expected %s to be a string.', [actual]);
      }
    });
};
