// Rock Paper Scrissors
//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if (p1 === 'rock') {
    if (p2 === 'scissors') return 'Player 1 won!';
    else return 'Player 2 won!';
  }
  if (p1 === 'paper') {
    if (p2 === 'rock') return 'Player 1 won!';
    else return 'Player 2 won!';
  }
  if (p1 === 'scissors') {
    if (p2 === 'paper') return 'Player 1 won!';
    else return 'Player 2 won!';
  }
};
