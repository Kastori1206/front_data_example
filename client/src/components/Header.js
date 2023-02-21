const style = {
  heading: `text-3xl font-bold text-gray-800 p-2`,
};
function Header() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div className="mt-5">
      <div className={style.heading}>
        {dateString}

        <div className="text-2xl block text-gray-400 mb-4">{dayName}</div>
      </div>
    </div>
  );
}

export default Header;
