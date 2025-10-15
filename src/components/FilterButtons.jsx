export default function FilterButtons({ filter, setFilter }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 justify-between p-8">
        <FilterButton filter={filter} setFilter={setFilter} text={"Author"} />
        <FilterButton filter={filter} setFilter={setFilter} text={"First Letter"} />
        <FilterButton filter={filter} setFilter={setFilter} text={"Length"} />
      </div>
    </>
  );
}

function FilterButton({ filter, setFilter, text }) {
  const hoverClass =
    filter === text.toLowerCase() ? "bg-blue-400 " : "bg-blue-300 hover:shadow-md hover:bg-blue-400";
  return (
    <>
      <div className={`p-4 rounded-md ${hoverClass}`}>
        <button onClick={() => setFilter(text.toLowerCase())}>Sort by {text}</button>
      </div>
    </>
  );
}
