"use client";

import useInfiniteScroll from "@/function/useInfiniteScroll";
import { Media } from "@/payload-types";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";

type Props = {
  illustrations: Array<{
    illustration: Media | string;
    author: string;
    authorLink: string;
  }>;
};

export default function IllustrationsCarousel({ illustrations }: Props) {
  const { animateScope, pageRef, x } = useInfiniteScroll(
    illustrations?.length ?? 0,
    4,
    false,
  );

  // Double the illustrations for seamless looping
  const doubledIllustrations = [
    ...(illustrations || []),
    ...(illustrations || []),
  ];

  return (
    <div className="artcarousel confine" ref={animateScope}>
      <motion.div style={{ x: x }} className="artcarouselslide" ref={pageRef}>
        {doubledIllustrations.map((illustration, index) => {
          const illustrationUrl =
            typeof illustration.illustration === "object"
              ? (illustration.illustration as Media)?.url
              : illustration.illustration;

          return (
            <div key={index} className="artc">
              <Link
                href={illustration.authorLink || "#"}
                className="title"
                target="_blank"
              >
                <p>
                  Author: <span>{illustration.author}</span>
                </p>
              </Link>
              <img
                src={illustrationUrl ?? undefined}
                alt={illustration.author ?? ""}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
