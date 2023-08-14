const sum = (values) => {
  const valuesToSum = Object.values(values[0]).map(item => parseInt(item));
  return valuesToSum[0] + valuesToSum[1];
}

module.exports = { sum };