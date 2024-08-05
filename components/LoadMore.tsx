"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useIntersectionObserver from "@/hook/useIntersectionObserver";

import { fetchAnime } from "../app/action";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let page = 2;

function LoadMore() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  const [data, setData] = useState<AnimeProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      // Add a delay of 700 milliseconds
      const delay = 700;

      const timeoutId = setTimeout(() => {
        fetchAnime(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref as React.RefObject<HTMLDivElement>}>
          {inView && isLoading && (
            <Image
              src="/assets/spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
