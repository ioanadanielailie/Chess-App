const Piece = ({ row, column, piece }) => {
  return <div className={`piece ${piece} p-${row}${column}`}></div>;
};
export default Piece;
