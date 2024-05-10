export const getCharacter = (columnNumber) =>
  String.fromCharCode(columnNumber + 96);
export const createPosition = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));
  for (let i = 0; i < 8; i++) {
    position[i][1] = "WhitePawn";
    position[i][6] = "BlackPawn";
  }
  position[0][7] = "BlackRook";
  position[1][7] = "BlackKnight";
  position[2][7] = "BlackBishop";
  position[3][7] = "BlackQueen";
  position[4][7] = "BlackKing";
  position[5][7] = "BlackBishop";
  position[6][7] = "BlackKnight";
  position[7][7] = "BlackRook";

  position[0][0] = "WhiteRook";
  position[1][0] = "WhiteKnight";
  position[2][0] = "WhiteBishop";
  position[3][0] = "WhiteQueen";
  position[4][0] = "WhiteKing";
  position[5][0] = "WhiteBishop";
  position[6][0] = "WhiteKnight";
  position[7][0] = "WhiteRook";

  return position;
};

export const copyPosition = (position) => {
  // const newPosition = new Array(8).fill("").map((x) => new Array(8).fill(""));
  // for (let column = 0; column < 8; column++) {
  //   for (let row = 0; row < 8; row++) {
  //     newPosition[column][row] = position[column][row];
  //   }
  // }
  const newPosition = position.map((row) => [...row]);
  return newPosition;
};
