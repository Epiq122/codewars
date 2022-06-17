function doubleChar(s) {
  return s
    .split('')
    .map(function (x) {
      return x + x;
    })
    .join('');
}
