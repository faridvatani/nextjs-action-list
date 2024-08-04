import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="absolute inset-0 bg-gradient-overlay z-0"></div>
      <div className="flex-1 flex flex-col gap-10 z-10">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-6xl font-bold leading-[120%]">
          Dive into the{" "}
          <span className="text-rose-500">Captivating Universe</span> of Anime
          Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center z-10">
        <Image
          src="/assets/anime.webp"
          alt="anime"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}
