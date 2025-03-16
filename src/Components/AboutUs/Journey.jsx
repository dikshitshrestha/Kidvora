import React from "react";
import journey1 from "../../assets/journey1.jpg";
import journey2 from "../../assets/journey2.jpg";
import journey3 from "../../assets/journey3.jpg";

export default function Journey() {
  const courses = [
    {
      image: journey1,
      heading: "2022: The Vision Took Shape",
      paragraph:
        "A passionate team of educators and technologists came together with a dream to make learning fun, interactive, and accessible for every child.",
    },
    {
      image: journey2,
      heading: "2023: Launch of Kidvora Platform",
      paragraph:
        "With a library of over 100 engaging activities, we officially launched Kidvora, creating a safe and inspiring space for kids in whole country.",
    },
    {
      image: journey3,
      heading: "2024: Expanding Countryside Impact",
      paragraph:
        "Today, Kidvora reaches children in 30+ cities, offering multilingual content and personalized learning paths to empower diverse young learners",
    },
  ];
  return (
    <div className="font-poppins xl:p-20 lg:py-16 lg:px-6 py-8 px-2 bg-red-100 container mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-semibold text-indigo-500">OUR JOURNEY</h1>
        <h1 className="lg:text-4xl text-2xl">
          From Dreams to Impact, Shaping <br /> Tomorrow's Bright Minds
        </h1>
        <p className="text-zinc-700 text-sm lg:text-[17px]">
          Our journey is built on passion, innovation, and a commitment to
          making education fun.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col pt-10 gap-8 ">
        {courses.map((item, index) => (
          <div className="w-full bg-white rounded-2xl p-4" key={index}>
            <div className="h-56 relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt="courses"
                className="h-full w-full object-cover hover:scale-110 duration-700"
              />
            </div>
            <div className="pt-6 flex flex-col gap-3">
              <h1 className="text-2xl hover:text-indigo-500 duration-300 ease-in-out">
                {item.heading}
              </h1>
              <h1>{item.paragraph}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
