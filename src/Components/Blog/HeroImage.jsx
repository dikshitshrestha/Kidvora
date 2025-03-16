import React from "react";
import kid1 from "../../assets/blog1.jpg";
import kid2 from "../../assets/blog2.jpg";
import kid3 from "../../assets/blog3.jpg";

export default function HeroImage() {
  return (
    <div className="lg:py-36 py-5 lg:relative">
      <div className="lg:h-[550px] h-40 w-40 border-[1px] border-indigo-500 lg:w-96 rounded-full overflow-hidden">
        <img src={kid1} alt="kid" className="h-full w-full object-cover" />
      </div>
      <div className="lg:h-[550px] my-3 lg:my-0 h-40 w-40 border-[1px] border-indigo-500 lg:w-72 rounded-full overflow-hidden lg:absolute lg:top-0 lg:-right-[77%]">
        <img src={kid2} alt="kid" className="h-full w-full object-cover" />
      </div>
      <div className="lg:h-[550px] h-40 w-40 border-[1px] border-indigo-500 lg:w-96 rounded-full overflow-hidden lg:absolute lg:bottom-12 lg:-right-[80%] xl:-right-[110%]">
        <img src={kid3} alt="kid" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
