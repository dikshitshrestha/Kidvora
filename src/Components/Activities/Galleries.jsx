import React from "react";
import kid1 from "../../assets/gallery1.jpg";
import kid2 from "../../assets/gallery2.jpg";
import kid3 from "../../assets/gallery3.jpg";
import kid4 from "../../assets/gallery4.jpg";
import kid5 from "../../assets/gallery5.jpg";

export default function Galleries() {
  return (
    <div className="bg-indigo-100 font-poppins p-20">
      <div className="text-center">
        <h1 className="font-semibold text-indigo-500 text-[18px]">
          PHOTO GALLERY
        </h1>
        <h1 className="text-4xl py-4">
          Highlights of past <br /> activities
        </h1>
        <p className="text-zinc-700">
          Explore some of the exciting and memorable acitivities we've conducted
          in past
        </p>
      </div>
      <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-5">
        <div className="row-span-2 overflow-hidden rounded-2xl">
          <img
            src={kid1}
            alt="kid1"
            className="h-full w-full hover:scale-125 duration-500 ease-in-out"
          />
        </div>
        {[kid2, kid3, kid4, kid5].map((item, index) => (
          <div className="rounded-2xl overflow-hidden" key={index}>
            <img
              src={item}
              alt="kid"
              className="h-full w-full object-cover hover:scale-125 duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
