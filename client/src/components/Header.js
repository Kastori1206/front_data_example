function Header() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div>
      <div className="container mx-auto max-w-xl">
        <div className="text-4xl block text-gray-700 font-bold mb-2">
          {/* TODO LIST */}
          {dateString}
        </div>
        <div className="text-2xl block text-gray-400 mb-4">{dayName}</div>
      </div>
    </div>
  );
}

export default Header;
