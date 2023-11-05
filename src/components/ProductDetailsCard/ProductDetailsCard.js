import React, { useEffect, useState } from "react";

import {
  BriefcaseIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ProductDetailsCard = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ProductDetail, setProductDetails] = useState([]);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  AOS.init();

  useEffect(() => {
    axios.get("/fakeData.json").then((response) => {
      console.log(response.data);
      setProductDetails(response.data);
    });
  }, []);

  const user = ProductDetail.find((profile) => profile.id === userId);
  // console.log(userProfiles, user);

  return (
    <div className="bg-slate-50 h-[900px] sm:h-[500px] md:h-[500px] xl:h-[500px] ">
      <h2
        data-aos="fade-top"
        className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center mt-10 mb-5"
      >
        {user?.name && `Details of ${user?.name}`}
      </h2>
      <div className="flex p-5 flex-col md:flex-row lg:flex-row xl:flex-row justify-evenly ">
        <div
          data-aos="fade-right"
          className="relative sm:w-auto md:w-2/6 lg:w-2/6 xl:w-2/6"
        >
          <div
            data-aos="fade-right"
            className="h-2/5  bg-gray-800 rounded-t-2xl"
          ></div>
          <div
            data-aos="fade-right"
            className="flex items-center border-l-0 md:border-r lg:border-r xl:border-r  border-gray-200 h-2/6"
          >
            {user?.image ? (
              <img
                className="w-48 h-48 md:w-48 lg:w-48 xl:w-48 md:h-48 lg:h-48 xl:h-48 rounded-[700px] mx-auto relative bottom-4 md:bottom-16 lg:bottom-16  xl:bottom-16  z-10"
                src={user?.image}
                alt=""
                onClick={openModal}
              />
            ) : (
              "Not available"
            )}
            <Dialog
              open={isModalOpen}
              onClose={closeModal}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
              <div className="modal-container ">
                <Dialog.Title className="text-xl text-gray-900">
                  User Image
                </Dialog.Title>
                <div className="">
                  <img src={user?.image} alt="" className="w-1/4 mx-auto" />
                </div>
                <div className="mt-2 text-center">
                  <button
                    onClick={closeModal}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Dialog>
          </div>
          <div className="h-10 bg-gray-200 border-r-4 border-gray-900  text-center pt-2">
            Account Settings
          </div>
          <h2 className="text-2xl font-semibold leading-7 text-gray-500 sm:truncate sm:text-2xl sm:tracking-tight ml-1 mx-auto my-auto">
            <button className="bg-gray-900 w-full mt-2 text-base text-white h-11 flex justify-center items-center">
              <EnvelopeIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Edit Profile
            </button>
          </h2>
        </div>

        {user ? (
          <div
            data-aos="fade-left"
            className="sm:w-auto  md:w-1/2 lg:w-2/5  xl:w-2/5 bg-slate-200 rounded-xl h-auto p-5"
          >
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-col sm:flex-wrap sm:space-x-6">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {user?.name}
              </h2>
              <div className="mt-2 flex items-center text-sm text-gray-500 underline">
                <EnvelopeIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {user?.email}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <PhoneIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {user?.phone}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPinIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {user?.address?.city},{user?.address?.suite},
                {user?.address?.street},{user?.address?.zipcode}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 underline">
                <LinkIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {user?.website}
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <BriefcaseIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {user?.company.name},{user?.company.catchPhrase},
                {user?.company.bs},
              </div>
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-medium leading-7 text-gray-900 sm:truncate sm:text-sm sm:tracking-tight mt-4">
                  About {user?.name} :
                </h2>
              </div>
              <div className="mt-1 flex items-start text-sm text-gray-500 max-h-28 overflow-y-auto">
                <p>{user?.description}</p>
              </div>
            </div>
          </div>
        ) : (
          "No content"
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCard;
