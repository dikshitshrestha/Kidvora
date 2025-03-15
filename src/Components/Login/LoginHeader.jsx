import React from "react";

export default function LoginHeader() {
  return (
    <div className="bg-indigo-100 font-poppins">
      <div className="text-[17px] flex justify-center w-full">
        <h1 className="border-purple-400 border-[1px] py-1 px-4 rounded-full text-purple-800">
          #1 Kids Learning platform
        </h1>
      </div>
      <div className="pt-8">
        <h1 className="text-center text-6xl font-semibold flex flex-col gap-2">
          <p>
            Join <span className="text-purple-500">Kidvora </span>
          </p>
          <p>And Make Studies Fun</p>
        </h1>
      </div>
    </div>
  );
}
