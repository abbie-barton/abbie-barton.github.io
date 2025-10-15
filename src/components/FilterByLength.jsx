export default function FilterByLength({ selectedLength, setSelectedLength }) {
  return (
    <div className="flex flex-row gap-2 p-4 pt-0">
      <LengthButton
        length={"Short"}
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
      />
      <LengthButton
        length={"Medium"}
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
      />
      <LengthButton
        length={"Long"}
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
      />
    </div>
  );
}

function LengthButton({ length, selectedLength, setSelectedLength }) {
  const baseClasses =
    "p-3 px-24 flex rounded-md font-bold transition-all duration-150 text-center text-white";
  const selectedClass =
    length === selectedLength
      ? "bg-gray-500"
      : "bg-gray-400 text-white hover:bg-gray-500 hover:shadow-md";

  return (
    <div>
      <button
        className={`${baseClasses} ${selectedClass}`}
        onClick={() => setSelectedLength(length)}>
        {length}
      </button>
    </div>
  );
}
