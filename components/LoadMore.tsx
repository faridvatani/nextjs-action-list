"use client";

import React, { useEffect, useState, useCallback } from "react";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import { fetchAnime } from "@/app/action";
import Image from "next/image";

let page = 2;

export type AnimeCard = React.JSX.Element;

function LoadMore() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadMoreData = useCallback(() => {
    setIsLoading(true);
    const delay = 700;

    const timeoutId = setTimeout(() => {
      fetchAnime(page).then((res) => {
        setData((prevData) => [...prevData, ...res]);
        page++;
        setIsLoading(false);
      });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (inView) {
      const cleanup = loadMoreData();
      return cleanup;
    }
  }, [inView, loadMoreData]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
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
