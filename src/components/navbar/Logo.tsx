"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer select-none"
      height="400"
      width="150"
      src="/images/logo.png"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
