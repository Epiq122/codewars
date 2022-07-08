
function duplicateCount(text) {
  let count = 0;
  let arr = text.toLowerCase().split('');
  let obj = {};
  arr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });
  for (let key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }
  return count;
}
