"use client";

import ResponsiveButton from "@/components/ResponsiveButton";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

export default function Home() {
  const stringSplitter = (text: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="md:text-6xl sm:text-5xl text-3xl font-serif">
        Welcome to NutriDiet 🌿
      </h1>
      <h2 className="mt-4 md:text-xl sm:text-lg text-sm">
        For all your{" "}
        <span className="inline-block font-semibold text-green-500">
          <Typewriter
            options={{
              strings: [
                "calorie 🍽️",
                "carbohydrate 🥔",
                "protein 🍖",
                "fat 🍕",
                "vitamin 💊",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              stringSplitter: stringSplitter,
            }}
          />
        </span>{" "}
        tracking needs.
      </h2>
      <div className="flex mt-8 sm:gap-10 gap-5">
        <ResponsiveButton label="Get Started" />
      </div>
    </div>
  );
}
