"use client";

import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("Food Item");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("input", input);
    formData.append("inputType", inputType);

    const response = await fetch("/api/search", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    // TODO: PARSE THE DATA TO DISPLAY TABLES
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="md:text-5xl sm:text-4xl text-3xl font-serif px-5 text-center">
        Search our Nutrition Database 🔍
      </h1>

      <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
        <div className="flex sm:flex-row flex-col gap-5">
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="outline-none p-2 border-2 border-neutral-200 rounded-md focus:border-neutral-600 transition md:text-lg"
          >
            <option value="Food Item">Food Item 🥦</option>
            <option value="Nutrient">Nutrient 🔬</option>
          </select>

          {/* TODO: DEBOUNCE INPUT */}
          <input
            type="text"
            placeholder={`Search for a ${inputType}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="py-2 outline-none border-b-2 border-neutral-200 focus:border-neutral-600 transition md:text-lg"
            required
          />
        </div>

        <div className="mt-8 flex justify-center">
          <button className="md:w-[150px] sm:w-[125px] w-[100px] font-semibold hover:opacity-80 transition bg-green-500 border-green-500 text-white py-3 md:text-base text-sm border-2 rounded-full">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
