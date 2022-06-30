

function isPangram(string) {
  return (
    new Set(
      string
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .split('')
    ).size === 26
  );
}
