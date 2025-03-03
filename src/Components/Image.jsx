import React from "react";
import doctorImg from "../assets/Image/Doctor.png";

const Image = () => {
  return (
    <div className="hidden lg:flex w-1/2 h-full">
      {/* Image */}
      <img
        src={doctorImg}
        alt="Doctor Image"
        className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      />
    </div>
  );
};

export default Image;
