import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cards, { CardProps } from "../../types/componentType";

// { image, title, description }

const PComponent: React.FC<Cards> = ({
  id,
  image,
  title,
  description,
}: Cards) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center" id={id}>
      <div className=" flex w-auto flex-col justify-center item-center cursor-pointer rounded-2xl border border-paleGray-100">
        <Image
          className="rounded-t-2xl object-cover object-center"
          src={image}
          alt="thumbnail"
          width={100}
          height={120}
        />
        <div className="p-4">
          <h1 className="text-2xl font-medium pb-2 text-shinyRed-500">
            {title}
          </h1>
          <p className="text-sm tracking-tight font-light text-paleGray-100 leading-6">
            {description}
          </p>
        </div>
        <Link className=" text-paleGray-800" href="/about">
          Go to projects {"=>"}
        </Link>
      </div>
    </div>
  );
};

export default PComponent;
