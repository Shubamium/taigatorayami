"use client";

import useInfiniteScroll from "@/function/useInfiniteScroll";
import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";
type Props = {
  data: any[];
};

export default function VidCarousel({ data }: Props) {
  const [vidList, titleList] = data;

  // const measure = useEffect(() => {}, []);
  const { animateScope, pageRef, x } = useInfiniteScroll(
    vidList?.length ?? 0,
    4,
    false,
  );
  return (
    <div className="vids" ref={animateScope}>
      <div className="video-carousel" ref={pageRef}>
        <motion.div style={{ x: x }} className="slide">
          {vidList?.map((vid: string, i: number) => {
            return (
              <a
                href={`https://youtube.com/watch?v=${vid}`}
                className="vid-containe"
                key={vid + "videocon"}
              >
                <img
                  src={`https://img.youtube.com/vi/${vid}/sddefault.jpg`}
                  alt=""
                  className="thumbnail"
                />
                <div className="overlay">
                  <p>{titleList && titleList[i]}</p>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
      <div className="action">
        <button className="btn ctrlbtn btn-l">
          <FaChevronLeft className="icon" />
        </button>

        <button className="btn ctrlbtn btn-r">
          <FaChevronRight className="icon" />
        </button>
      </div>
    </div>
  );
}
