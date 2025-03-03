import React from "react";
import doctorImg from "../assets/Image/Doctor.png";

const Image = () => {
  return (
    <div className="hidden md:flex lg:flex w-1/2 h-full">
      <img
        src={doctorImg}
        alt="Doctor Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Image;
