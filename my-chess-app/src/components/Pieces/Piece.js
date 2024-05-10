const Piece = ({ row, column, piece }) => {
  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece},${column}, ${row}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };
  const onDragEnd = (e) => (e.target.style.display = "block");

  return (
    <div
      className={`piece ${piece} p-${column}${row}`}
      draggable={true}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    ></div>
  );
};
export default Piece;
