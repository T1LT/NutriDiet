"use client";

import { useRouter } from "next/navigation";

interface ResponsiveButtonProps {
  label: string;
}

const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({ label }) => {
  const router = useRouter();
  return (
    <button
      className="md:w-[175px] sm:w-[150px] w-[125px] font-semibold hover:opacity-80 transition bg-green-500 border-green-500 text-white py-3 md:text-lg sm:text-base text-xs border-2 rounded-full"
      onClick={() => router.push("/search")}
    >
      {label}
    </button>
  );
};

export default ResponsiveButton;
