function firstNonConsecutive(arr) {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
    i++;
  }
  return null;
}
