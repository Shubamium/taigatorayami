"use client";

import useInfiniteScroll from "@/function/useInfiniteScroll";
import { motion } from "motion/react";
import { Media } from "@/payload-types";

type Props = {
  achievements: Array<Media | string>;
};

export default function AchievementsCarousel({ achievements }: Props) {
  const { animateScope, pageRef, x } = useInfiniteScroll(
    achievements?.length ?? 0,
    4,
    false,
  );

  // Double the achievements for seamless looping
  const doubledAchievements = [
    ...(achievements || []),
    ...(achievements || []),
  ];

  return (
    <div style={{ overflow: "hidden" }} ref={animateScope}>
      <motion.div style={{ x: x }} ref={pageRef} className="achievementslide">
        {doubledAchievements.map((achievement, index) => {
          const imageUrl =
            typeof achievement === "object"
              ? (achievement as Media).url
              : achievement;

          return (
            <img
              key={index}
              src={imageUrl ?? undefined}
              alt=""
              className="achievement-img"
            />
          );
        })}
      </motion.div>
    </div>
  );
}
