import React from "react";
import kid from "../../assets/activity.jpg";
import kid1 from "../../assets/interactive1.jpg";
import kid2 from "../../assets/interactive2.jpg";
import kid3 from "../../assets/interactive3.jpg";
import kid4 from "../../assets/interactive4.jpg";
import kid5 from "../../assets/interactive5.jpg";

export default function Interactive() {
  const activities = [
    {
      heading: "Virtual Science Experiments",
      p1: "Chemistry challenges",
      p2: "Building projects",
      image: kid1,
    },
    {
      heading: "Interactive Storytelling",
      p1: "Vocabulary games",
      p2: "Writing",
      image: kid2,
    },
    {
      heading: "Math Puzzles and Games",
      p1: "Calculations",
      p2: "Solving Problems",
      image: kid3,
    },
    {
      heading: "Art and Craft Challenges",
      p1: "Drawing",
      p2: "Building projects",
      image: kid4,
    },
    {
      heading: "Geography Adventure Games",
      p1: "Mapping challenges",
      p2: "Tracing Locations",
      image: kid5,
    },
  ];
  return (
    <div className="xl:px-20 lg:px-5 p-3 lg:py-16 font-poppins container mx-auto">
      <div className="lg:p-6 p-4 bg-rose-100 rounded-3xl flex lg:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:h-[800px] h-72 w-full rounded-md overflow-hidden">
          <img src={kid} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:pl-6 lg:w-1/2">
          <h1 className="md:text-4xl mt-2 lg:mt-0 md:text-center lg:text-start">
            Interactive Activities
          </h1>
          <div className="w-full flex flex-col gap-5 pt-3">
            {activities.map((item, index) => (
              <div
                className="bg-white py-4 px-3 rounded-lg shadow-lg flex md:flex-row flex-col gap-5 items-center"
                key={index}
              >
                <div className="h-24 w-24 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt="kid"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="xl:text-2xl text-xl">{item.heading}</h1>
                  <div className="flex md:justify-start justify-center text-[17px] md:gap-2 gap-0.5">
                    <p className="lg:py-0.5 md:px-10 xl:px-10 lg:px-3 px-1 py-1 rounded-full text-red-500 border-[1px] lg:text-sm xl:text-[17px] flex justify-center items-center text-center text-xs border-red-400">
                      {item.p1}
                    </p>
                    <p className="lg:py-0.5 md:px-10 xl:px-10 lg:px-3 px-1 py-1 lg:text-sm xl:text-[17px] flex justify-center items-center text-center text-xs rounded-full text-red-500 border-[1px] border-red-400">
                      {item.p2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
