const Piece = ({ row, column, piece }) => {
  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece},${row}, ${column}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };
  const onDragEnd = (e) => (e.target.style.display = "block");

  return (
    <div
      className={`piece ${piece} p-${column}${row}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    ></div>
  );
};
export default Piece;
