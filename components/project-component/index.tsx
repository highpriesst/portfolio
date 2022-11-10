import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cards, { CardProps } from "../../types/componentType";
import { motion as m } from "framer-motion";

// { image, title, description }

const PComponent: React.FC<Cards> = ({
  id,
  image,
  title,
  description,
}: Cards) => {
  return (
    <m.div
      className="sm:relative flex h-auto flex-col justify-center items-center"
      id={id}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
      <div className="flex w-[400px] h-[300px] flex-col justify-center item-center cursor-pointer rounded-2xl border border-paleGray-100">
        <Image
          className="rounded-t-2xl object-cover object-center"
          src={image}
          alt="thumbnail"
          width={190}
          height={190}
        />
        <div className="p-4">
          <h1 className="text-2xl font-medium pb-2 text-shinyRed-500">
            {title}
          </h1>
          <p className="text-sm tracking-tight font-light text-paleGray-100 leading-6">
            {description}
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default PComponent;
