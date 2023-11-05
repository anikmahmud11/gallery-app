import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../../components/Gallery/Gallery";
import "./Home.css";

const Home = () => {
  AOS.init();
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-green-300 via-red-200 to-purple-300 ">
        <div className="relative isolate px-6 pt-0 lg:px-8">
          <div className="mx-auto max-w-4xl py-10 sm:py-38 lg:py-24">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div
                data-aos="fade-up"
                className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Announcing our next round of funding.{" "}
                <Link href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1
                data-aos="fade-up"
                className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                Discover and Explore the World of Art: Welcome to Our Gallery
                App!
              </h1>

              <div className="gallery-container">
                <Gallery />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
