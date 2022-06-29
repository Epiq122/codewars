// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

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
