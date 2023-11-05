import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-800 text-white py-4 flex justify-between items-center  ">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your App Name. All rights reserved.</p>
        <p>123 Main Street, City, Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className=" container mx-auto text-center">
        <Link href="#" className="text-white hover:text-gray-400 mx-2">
          Privacy Policy
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 mx-2">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
