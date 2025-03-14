import React from "react";
import kid1 from "../../assets/blog1.jpg";
import kid2 from "../../assets/blog2.jpg";
import kid3 from "../../assets/blog3.jpg";

export default function HeroImage() {
  return (
    <div className="py-36 relative">
      <div className="h-[550px] border-[1px] border-indigo-500 w-96 rounded-full overflow-hidden">
        <img src={kid1} alt="kid" className="h-full w-full object-cover" />
      </div>
      <div className="h-[550px] border-[1px] border-indigo-500 w-72 rounded-full overflow-hidden absolute top-0 -right-[77%]">
        <img src={kid2} alt="kid" className="h-full w-full object-cover" />
      </div>
      <div className="h-[550px] border-[1px] border-indigo-500 w-96 rounded-full overflow-hidden absolute bottom-12 -right-96">
        <img src={kid3} alt="kid" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
