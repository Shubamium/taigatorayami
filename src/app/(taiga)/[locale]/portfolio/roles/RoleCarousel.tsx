"use client";

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Media } from "@/payload-types";

type Props = {
  roles: Array<{
    name: string;
    image: Media | string;
  }>;
};

export default function RoleCarousel({ roles }: Props) {
  const ITEMS_PER_PAGE = 5;
  const [offset, setOffset] = useState(0);

  const handlePrev = () => {
    setOffset((prev) => (prev - 1 + roles.length) % roles.length);
  };

  const handleNext = () => {
    setOffset((prev) => (prev + 1) % roles.length);
  };

  const shiftedRoles = Array.from({ length: ITEMS_PER_PAGE }).map(
    (_, i) => roles[(i + offset) % roles.length],
  );

  return (
    <>
      <button className="btn btn-arrow l" onClick={handlePrev}>
        <BiChevronRight />
      </button>
      <div className="roles">
        {shiftedRoles.map((role, index) => {
          const imageUrl =
            typeof role.image === "object"
              ? (role.image as Media).url
              : role.image;

          return (
            <div key={index} className="role">
              <img src={imageUrl ?? ""} alt={role.name} className="pfp" />
              <p>{role.name}</p>
            </div>
          );
        })}
      </div>
      <button className="btn btn-arrow r" onClick={handleNext}>
        <BiChevronLeft />
      </button>
    </>
  );
}
