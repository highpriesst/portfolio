import Image from "next/image";
import React from "react";
import Cards, { CardProps } from "../../types/componentType";

// { image, title, description }

const PComponent: React.FC<CardProps> = ({ cards }: CardProps) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
        <Image
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="thumbnail"
        />

        <div className="p-4">
          <h1 className="text-2xl font-medium text-slate-600 pb-2">
            {cards.title}
          </h1>
          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {cards.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PComponent;
