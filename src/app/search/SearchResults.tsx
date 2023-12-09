"use client";

import { useState, useEffect } from "react";
import parseText from "@/lib/utils/parseText";
import { useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import Loader from "@/components/Loader";

interface SearchResultsProps {
  input: string;
  inputType: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ input, inputType }) => {
  const router = useRouter();
  const debounced = useDebounce(input, 500);
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const formData = new FormData();
    formData.append("input", input);
    formData.append("inputType", inputType);

    const response = await fetch("/api/search", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (!data.length && inputType === "Food Item") {
      data.push(["_", "No results found."]);
    }

    if (!data.length && inputType === "Nutrient") {
      data.push("No results found.");
    }

    setResults(data);
  };

  const handleClick = (result: string) => {
    if (inputType === "Food Item") {
      if (result[1] !== "No results found.") {
        router.push(`/nutritionfacts/${result[0]}`);
      }
    } else {
      if (result !== "No results found.") {
        router.push(`/nutrients/${parseText(result)}`);
      }
    }
  };

  useEffect(() => {
    if (debounced !== "") {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [debounced]);

  if (!input.length) return <></>;

  return (
    <>
      <div
        className={`bg-white border rounded-lg shadow-xl h-[300px] overflow-x-hidden overflow-y-scroll scrollbar-hide p-2`}
      >
        {results.length ? (
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
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default SearchResults;
