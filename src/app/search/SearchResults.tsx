import { useRouter } from "next/navigation";

interface SearchResultsProps {
  results: string[];
  inputType: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  inputType,
}) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    if (inputType === "Food Item") {
      router.push(`/nutritionfacts/${id}`);
    } else {
      // TODO: ADD FUNCTIONALITY FOR NUTRIENT SEARCH
      router.push("/search")
    }
  };

  return (
    <>
      {results.length ? (
        <div className="bg-white border rounded-lg shadow-xl h-[300px] overflow-x-hidden overflow-y-scroll scrollbar-hide p-2">
          <ul>
            {results.map((result, idx) => (
              <li
                key={idx}
                className="p-2 rounded-md hover:bg-neutral-300 transition cursor-pointer"
                onClick={() => handleClick(result[0])}
              >
                {inputType === "Food Item" ? result[1] : result}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchResults;
