import QuoteCard from "./QuoteCard";
import FilterByLetter from "./FilterByLetter";
import FilterByLength from "./FilterByLength";
import { useState, useEffect } from "react";

export default function QuoteLayout({ data, filterButtons, unusedLetters }) {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [quotesToDisplay, setQuotesToDisplay] = useState(Object.values(data).flat());
  const [selectedLength, setSelectedLength] = useState("");

  useEffect(() => {
    if (selectedLetter && data[selectedLetter]) {
      setQuotesToDisplay(data[selectedLetter]);
    } else if (selectedLength) {
      const total = data.length;
      const firstThirdEnd = Math.floor(total / 3);
      const secondThirdEnd = Math.floor((2 * total) / 3);
      if (selectedLength === "Short") {
        setQuotesToDisplay(data.slice(0, firstThirdEnd));
      } else if (selectedLength === "Medium") {
        setQuotesToDisplay(data.slice(firstThirdEnd, secondThirdEnd));
      } else {
        setQuotesToDisplay(data.slice(secondThirdEnd));
      }
    } else {
      setQuotesToDisplay(Object.values(data).flat());
    }
  }, [selectedLetter, selectedLength, data]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedLetter]);

  return (
    <>
      <div>
        {filterButtons && (
          <FilterByLetter
            selectedLetter={selectedLetter}
            setSelectedLetter={setSelectedLetter}
            unusedLetters={unusedLetters}
          />
        )}
        {!filterButtons && (
          <FilterByLength selectedLength={selectedLength} setSelectedLength={setSelectedLength} />
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {quotesToDisplay.map((item, index) => (
          <QuoteCard
            key={index} // okay for static data; for dynamic data use a unique ID
            quote={item.quote}
            author={item.author}
          />
        ))}
      </div>
    </>
  );
}
