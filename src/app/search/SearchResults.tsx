import parseText from "@/lib/utils/parseText";
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

  const handleClick = (result: string) => {
    if (inputType === "Food Item") {
      router.push(`/nutritionfacts/${result[0]}`);
    } else {
      router.push(`/nutrients/${parseText(result)}`);
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
                onClick={() => handleClick(result)}
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
