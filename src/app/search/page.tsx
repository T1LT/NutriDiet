"use client";

import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const Search = () => {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("Food Item");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const fetchResults = async () => {
    const formData = new FormData();
    formData.append("input", input);
    formData.append("inputType", inputType);

    const response = await fetch("/api/search", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setResults(data);
  };

  const debounced = useDebounce(input, 500);

  useEffect(() => {
    if (debounced !== "") {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [debounced]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="md:text-5xl sm:text-4xl text-3xl font-serif px-5 text-center">
        Search our Nutrition Database 🔍
      </h1>

      <form className="flex flex-col mt-10 relative" onSubmit={handleSubmit}>
        <div className="flex sm:flex-row flex-col gap-5">
          <select
            value={inputType}
            onChange={(e) => {
              setInputType(e.target.value);
              setResults([]);
            }}
            className="outline-none p-2 border-2 border-neutral-200 rounded-md focus:border-neutral-600 transition md:text-lg"
          >
            <option value="Food Item">Food Item 🌮</option>
            <option value="Nutrient">Nutrient 🔬</option>
          </select>

          <input
            type="text"
            placeholder={`Search for a ${inputType}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setFocused(true)}
            autoComplete="off"
            className=" py-2 outline-none border-b-2 border-neutral-200 focus:border-neutral-600 transition md:text-lg"
            autoFocus
            required
          />
        </div>

        <div className="absolute z-10 sm:top-[3.5rem] top-[7.25rem] w-full">
          {input !== "" && focused && (
            <SearchResults results={results} inputType={inputType} />
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
