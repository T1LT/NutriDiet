import HomepageButton from "@/components/HomepageButton";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="md:text-6xl sm:text-5xl text-3xl font-serif">
        Welcome to NutriDiet 🌿
      </h1>
      <h2 className="mt-4 md:text-xl sm:text-lg text-sm font-serif">
        For all your nutrition needs.
      </h2>
      <div className="flex mt-8 sm:gap-10 gap-5">
        <HomepageButton label="Get Started" />
      </div>
    </div>
  );
}
