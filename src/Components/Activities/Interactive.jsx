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
      p1: "Coding challenges",
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
    <div className="px-20 py-16 font-poppins">
      <div className="p-6 bg-rose-100 rounded-3xl flex items-center">
        <div className="w-1/2 h-[800px] rounded-md overflow-hidden">
          <img src={kid} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="pl-6 w-1/2">
          <h1 className="text-4xl">Interactive Activities</h1>
          <div className=" w-full flex flex-col gap-5 pt-3">
            {activities.map((item, index) => (
              <div className="bg-white py-4 px-3 rounded-lg shadow-lg flex gap-5 items-center">
                <div className="h-24 w-24 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt="kid"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">{item.heading}</h1>
                  <div className="flex text-[17px] gap-2">
                    <p className="py-0.5 px-10 rounded-full text-red-500 border-[1px] border-red-400">
                      {item.p1}
                    </p>
                    <p className="py-0.5 px-10 rounded-full text-red-500 border-[1px] border-red-400">
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
