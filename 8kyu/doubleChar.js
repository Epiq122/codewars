//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(s) {
  return s
    .split('')
    .map(function (x) {
      return x + x;
    })
    .join('');
}
