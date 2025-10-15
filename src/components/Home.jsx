import QuoteLayout from "./QuoteLayout";
import FilterButtons from "./FilterButtons";
import quotesByAuthor from "../data/quotes_by_author_sorted.json";
import quotesByFirstLetter from "../data/quotes_by_first_letter_sorted.json";
import quotesByLength from "../data/quotes_by_length.json";
import { useState } from "react";

export default function Home() {
  const [currFilter, setCurrFilter] = useState("author");

  const unusedAuthorLetters = [..."IQX"]
  const unusedLettersAlphabet = [..."JKMQUVXZ"];

  return (
    <>
    <div className="p-8 pt-16 flex flex-col items-center justify-start min-h-screen">
      <FilterButtons filter={currFilter} setFilter={setCurrFilter} />
      {currFilter === "author" && <QuoteLayout data={quotesByAuthor} filterButtons={true} unusedLetters={unusedAuthorLetters} />}
      {currFilter === "first letter" && <QuoteLayout data={quotesByFirstLetter} filterButtons={true} unusedLetters={unusedLettersAlphabet} />}
      {currFilter === "length" && <QuoteLayout data={quotesByLength} filterButtons={false}/>}
      </div>
    </>
  );
}
