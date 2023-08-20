const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  export function calcWinner(moves) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return { winner: moves[a], line: lines[i] };
      }
    }
    return null;
  }
  
  export default function calcBestMove(moves, player) {
    const getArrDuplicatedCount = (arr) => {
      let count = 0;
      arr.forEach((i) => {
        if (moves[i] === player) {
          count += 1;
        }
      });
      return count;
    };
  
    const sortedLines = lines.sort((a, b) => {
      let acount = getArrDuplicatedCount(a);
      let bcount = getArrDuplicatedCount(b);
      return bcount - acount;
    });
  
    for (let i = 0; i < sortedLines.length; i++) {
      let val = sortedLines[i].find((el) => {
        if (moves[el] === "") {
          return el + "";
        }
        return null;
      });
  
      if (!val) {
        continue;
      }
      return +val;
    }
    return null;
  }