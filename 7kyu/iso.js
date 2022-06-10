function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .filter((v, i, a) => a.indexOf(v) === i).length === str.length
  );
}
