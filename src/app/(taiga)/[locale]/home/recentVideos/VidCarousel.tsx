"use client";

import useInfiniteScroll from "@/function/useInfiniteScroll";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";
type Props = {
  data: any[];
};

export default function VidCarousel({ data }: Props) {
  const [vidList, titleList] = data;
  const [offset, setOffset] = useState(0);

  const handlePrev = () => {
    setOffset((prev) => (prev - 1 + vidList.length) % vidList.length);
  };

  const handleNext = () => {
    setOffset((prev) => (prev + 1) % vidList.length);
  };

  // const measure = useEffect(() => {}, []);
  const { animateScope, pageRef, x } = useInfiniteScroll(
    vidList?.length ?? 0,
    4,
    false,
  );

  const shiftedVidList =
    vidList?.map(
      (_: string, i: number) => vidList[(i + offset) % vidList.length],
    ) ?? [];
  const shiftedTitleList =
    titleList?.map(
      (_: string, i: number) => titleList[(i + offset) % titleList.length],
    ) ?? [];
  return (
    <div className="vids" ref={animateScope}>
      <div className="video-carousel" ref={pageRef}>
        <motion.div style={{ x: x }} className="slide">
          {shiftedVidList?.map((vid: string, i: number) => {
            return (
              <a
                href={`https://youtube.com/watch?v=${vid}`}
                className="vid-containe"
                key={vid + "videocon" + i}
              >
                <img
                  src={`https://img.youtube.com/vi/${vid}/sddefault.jpg`}
                  alt=""
                  className="thumbnail"
                />
                <div className="overlay">
                  <p>{shiftedTitleList && shiftedTitleList[i]}</p>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
      <div className="action">
        <button className="btn ctrlbtn btn-l" onClick={handlePrev}>
          <FaChevronLeft className="icon" />
        </button>

        <button className="btn ctrlbtn btn-r" onClick={handleNext}>
          <FaChevronRight className="icon" />
        </button>
      </div>
    </div>
  );
}
