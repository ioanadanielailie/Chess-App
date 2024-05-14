export const getCharacter = (columnNumber) =>
  String.fromCharCode(columnNumber + 96);
export const createPosition = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));
  for (let i = 0; i < 8; i++) {
    position[1][i] = "WhitePawn";
    position[6][i] = "BlackPawn";
  }

  position[7][0] = "BlackRook";
  position[7][1] = "BlackKnight";
  position[7][2] = "BlackBishop";
  position[7][3] = "BlackQueen";
  position[7][4] = "BlackKing";
  position[7][5] = "BlackBishop";
  position[7][6] = "BlackKnight";
  position[7][7] = "BlackRook";

  position[0][0] = "WhiteRook";
  position[0][1] = "WhiteKnight";
  position[0][2] = "WhiteBishop";
  position[0][3] = "WhiteQueen";
  position[0][4] = "WhiteKing";
  position[0][5] = "WhiteBishop";
  position[0][6] = "WhiteKnight";
  position[0][7] = "WhiteRook";

  return position;
};

export const copyPosition = (position) => {
  const newPosition = position.map((row) => [...row]);
  return newPosition;
};
