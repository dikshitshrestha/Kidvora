import React from "react";
import teacher from "../../assets/teacher.jpg";
import { IoMdArrowForward } from "react-icons/io";

export default function Founder() {
  return (
    <div className="font-poppins p-20">
      <div className="text-center flex flex-col gap-5">
        <h1 className="font-semibold text-indigo-500">MEET OUR FOUNDERS</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">
            Visionaries Behind the <br /> Future of Children's Learning
          </h1>
          <p className="text-zinc-600">
            Discover the passionate minds driving Kidsover mission to empower
            young learners.
          </p>
        </div>
      </div>
      <div className="pt-16 flex gap-10">
        <div className="w-1/2 h-[600px] overflow-hidden rounded-3xl">
          <img
            src={teacher}
            alt="teacher"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="w-1/2 bg-indigo-100 px-6 flex items-center
        "
        >
          <div>
            <h1 className="text-2xl">
              Dikshit Shrestha <br /> Founder & CEO
            </h1>
            <p className="text-[17px] mt-5">
              As the Founder and CEO of Kidvora, Dikshit Shrestha is dedicated
              to shaping the future of children's education. With over 5 years
              of experience in the field of education and technology, Dikshit's
              vision for Kidvora is to create a platform that makes learning
              engaging, accessible, and inspiring for children across the globe.
            </p>
            <button className="flex items-center gap-1 py-3 px-5 bg-red-300 underline rounded-full mt-12 hover:bg-indigo-400 hover:text-white duration-300 ease-in-out">
              Read More <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
