import React from "react";
import SignUp from "./Components/SignUp";
import Image from "./Components/Image";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section (Image) */}
      <Image />

      {/* Right Section (Form) */}
      <SignUp />
    </div>
  );
};

export default App;
