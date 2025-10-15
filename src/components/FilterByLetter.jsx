export default function FilterByLetter({ selectedLetter, setSelectedLetter, unusedLetters }) {
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  return (
    <>
      <div className="flex flex-row gap-2 p-4 pt-0">
        {alphabet.map((letter) => (
          <AlphabetButton
            key={letter}
            letter={letter}
            selectedLetter={selectedLetter}
            setSelectedLetter={setSelectedLetter}
            unusedAlphabet={unusedLetters}
          />
        ))}
      </div>
    </>
  );
}

function AlphabetButton({ letter, selectedLetter, setSelectedLetter, unusedAlphabet }) {
  const isUnused = unusedAlphabet.includes(letter);
  const isSelected = selectedLetter === letter;

  const baseClasses = "p-3 rounded-md font-bold transition-all duration-150 w-10 text-center";

  const activeClass = isSelected
    ? "bg-gray-500 text-white"
    : "bg-gray-400 text-white hover:bg-gray-500 hover:shadow-md";

  const inactiveClass = "bg-gray-600 text-gray-400 cursor-not-allowed opacity-60";
  return (
    <div>
      <button
        disabled={isUnused}
        onClick={() => !isUnused && setSelectedLetter(letter)}
        className={`${baseClasses} ${isUnused ? inactiveClass : activeClass}`}>
        {letter}
      </button>
    </div>
  );
}
