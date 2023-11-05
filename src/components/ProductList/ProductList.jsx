import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  selectUserProfiles,
} from "../../redux/store/userSlice";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const userProfiles = useSelector(selectUserProfiles);
  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [dispatch]);
  AOS.init();

  console.log(userProfiles);
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-br from-purple-300 via-red-100 to-green-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:max-w-none lg:py-10">
            <h2 className="text-2xl font-bold text-gray-900">Our products</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {userProfiles?.map((callout) => (
                <div
                  data-aos="fade-up"
                  key={callout?.id}
                  className="group relative "
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 cursor-pointer">
                    <img
                      src={callout?.image}
                      alt={callout?.imageAlt}
                      className="h-full w-full object-cover object-center transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-bold">
                        View details
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-semibold text-gray-900 flex items-center  mt-2">
                    <span className="pr-1">{callout?.name}</span>
                    <span className="  text-sm text-gray-500 ">
                      <Link to={`/product-detail/${callout?.id}`}>
                        <span className="absolute inset-0" />({" "}
                        {callout?.username})
                      </Link>
                    </span>
                  </p>
                  <h3 className=" text-sm text-gray-500">
                    <Link to={`/product-detail/${callout?.id}`}>
                      <span className="absolute inset-0" />
                      {callout?.email}
                    </Link>
                  </h3>
                  <h3 className="mb-4 text-sm text-gray-500">
                    <Link to={`/product-detail/${callout?.id}`}>
                      <span className="absolute inset-0" />
                      {callout?.phone}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
