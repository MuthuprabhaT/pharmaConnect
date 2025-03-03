import React from "react";
import yahoo from "../assets/Image/yahoo.svg";
import gmail from "../assets/Image/gmail.svg";

const SignUp = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col bg-gray-100 relative">
      {/* Main Content (Scrollable) */}
      <div className="flex-grow flex flex-col justify-center items-center px-10 overflow-auto">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-b from-teal-800 via-teal-600 to-sky-400 text-transparent  bg-clip-text">
            PharmaConnect
          </h1>
          <h1 className="font-bold text-2xl text-center mb-2">
            Let's Get Started
          </h1>
          <p className="text-center text-black mb-6">
            Sign-up to create your account
          </p>

          {/* Input Field */}
          <label className="block mb-2 text-gray-700 font-semibold">
            Enter Email/Phone Number
          </label>
          <input
            type="text"
            placeholder="abc@gmail.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Checkbox */}
          <div className="flex items-center mt-3">
            <input type="checkbox" className="mr-2 accent-teal-600" checked />
            <p className="text-sm text-black">
              By continuing, you agree to the{" "}
              <a href="#" className="text-teal-600 font-semibold">
                Terms of Service{" "}
              </a>
              &{" "}
              <a href="#" className="text-teal-600 font-semibold">
                Privacy Policy.
              </a>
            </p>
          </div>

          {/* Sign-Up Button */}
          <button className="w-full bg-teal-700 text-white py-2 rounded mt-4 hover:bg-teal-800 transition">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <p className="mx-2 text-gray-500">or Sign Up with</p>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Sign-Up Options */}
          <div className="flex justify-center space-x-4">
            <button>
              <img src={yahoo} alt="Yahoo" className="h-6 w-6" />
            </button>
            <button>
              <img src={gmail} alt="Gmail" className="h-6 w-6" />
            </button>
          </div>

          {/* Log-in Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-teal-600 font-semibold">
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Footer at the Bottom, Same as Image */}
      <footer className="absolute bottom-0 w-full bg-white py-3 text-center text-gray-600 text-sm">
        Powered by Hutech Solutions
      </footer>
    </div>
  );
};

export default SignUp;
