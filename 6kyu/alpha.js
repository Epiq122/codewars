function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(function(char) {
    return char.charCodeAt(0) - 96;
  }).join(' ');
}
