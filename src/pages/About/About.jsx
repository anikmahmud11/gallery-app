import React from "react";
import { PropagateLoader } from "react-spinners";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8 flex flex-col-reverse lg:flex-row">
          {/* Left Section - Content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis justo eget urna pulvinar dignissim sit amet nec arcu. Morbi
              efficitur, purus a pharetra dapibus, elit quam gravida erat, vel
              feugiat dui ligula id dui.
            </p>
            <p className="text-gray-700 leading-6 mt-4">
              Suspendisse potenti. Nullam ut ligula sit amet turpis hendrerit
              iaculis. Aenean consectetur urna id libero ultrices, at aliquam
              tortor feugiat.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Company Image"
              className="rounded-lg shadow-lg mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
