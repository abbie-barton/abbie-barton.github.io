

export default function QuoteCard({ quote, author }) {
  return (
    <>
      <div className="bg-white rounded-md p-8">
        <div className="px-4 pb-2">
            <p className="text-center text-black border-b-2">"{quote}"</p>
        </div>
        <div className="text-right text-gray-500 text-md">
            <p className=""><i>{author}</i></p>
        </div>
      </div>
    </>
  );
}
