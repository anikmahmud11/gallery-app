import { Transition } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Transition show={true} timeout={500}>
        {(state) => (
          <div
            className={`h-screen flex flex-col justify-center items-center bg-gray-100 transition-opacity duration-500 opacity-${state}`}
          >
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4">Page not found</p>
            <Link to="/" className="mt-8 text-blue-500 hover:underline">
              Go back to home
            </Link>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default NotFound;
