const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
const finalPosition = function (moves) {
  const originalPosition = [0, 0];
  for (let i = 0; i < moves.length; i++)
    if (moves[i] === "north") {
      originalPosition[1] = originalPosition[1] + 1;
  
    } else if (moves[i] === "south") {
      originalPosition[1] = originalPosition[1] - 1;
  
    } else if (moves[i] === "east") {
      originalPosition[0] = originalPosition[0] + 1;
  
    } else if (moves[i] === "west") {
      originalPosition[0] = originalPosition[0] - 1;
    }
  return originalPosition;
};

console.log(finalPosition(moves));
