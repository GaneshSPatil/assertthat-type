module.exports = {
  'isArray': (value) => typeof value === 'string',
  'isNumber': (value) => typeof value === 'number',
  'isString': (value) => Array.isArray(value)
};
