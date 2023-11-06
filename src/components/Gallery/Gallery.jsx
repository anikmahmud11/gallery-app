import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  selectUserProfiles,
  toggleImageSelection,
  deleteSelectedImages,
  toggleDeleteMode,
  updateImageOrder,
} from "../../redux/store/userSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";
import { toast } from "react-toastify";

const Gallery = React.memo(() => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const dispatch = useDispatch();
  const userProfiles = useSelector(selectUserProfiles);
  const { imageOrder, selectedImages, deleteMode } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchProductDetails());
    Aos.init();
  }, [dispatch]);

  const handleDragStart = useCallback((index, e) => {
    e.dataTransfer.setData("text/plain", index.toString());
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDragEnter = useCallback((index) => {
    setHoveredImageIndex(index);
  }, []);

  const handleDragLeave = useCallback(() => {
    setHoveredImageIndex(null);
  }, []);

  const handleDrop = useCallback(
    (e, index) => {
      e.preventDefault();
      const draggedIndex = +e.dataTransfer.getData("text/plain");
      if (draggedIndex !== index) {
        const newImageOrder = [...imageOrder];
        newImageOrder.splice(
          index,
          0,
          newImageOrder.splice(draggedIndex, 1)[0]
        );
        dispatch(updateImageOrder(newImageOrder));
      }
      setHoveredImageIndex(null);
    },
    [imageOrder, dispatch]
  );

  const handleImageClick = useCallback(
    (index) => {
      if (deleteMode) {
        dispatch(toggleImageSelection(index));
      }
    },
    [deleteMode, dispatch]
  );

  const handleDeleteSelectedImages = useCallback(() => {
    alert("Are you sure you want to delete selected images");
    dispatch(deleteSelectedImages());
    toast.success("Images deleted successfully");
  }, [dispatch]);

  const handleCancelSelection = useCallback(() => {
    dispatch(toggleDeleteMode());
  }, [dispatch]);

  const handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      setSelectedFile(URL.createObjectURL(file));
    },
    [setSelectedFile]
  );
  console.log(selectedFile);
  return (
    <>
      <div data-aos="fade-up">
        {!deleteMode ? (
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none"
            onClick={() => dispatch(toggleDeleteMode())}
          >
            {deleteMode ? "Cancel" : "Delete Image"}
          </button>
        ) : (
          <>
            {selectedImages?.length > 0 && deleteMode && (
              <div
                className="flex flex-col md:flex-row justify-between items-center"
                data-aos="fade-up"
              >
                <p>Selected Images: {selectedImages?.length}</p>
                <div data-aos="fade-up" className="mt-2 md:mt-0">
                  <button
                    className="w-full md:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2"
                    onClick={handleDeleteSelectedImages}
                  >
                    Delete Selected Images
                  </button>
                  <button
                    className="w-full md:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none"
                    onClick={handleCancelSelection}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="gallery" data-aos="fade-up">
        {imageOrder.map((num, index) => (
          <div
            key={index}
            className={`image ${index === 0 ? "feature" : ""} ${
              selectedImages.includes(index) ? "selected" : ""
            } ${hoveredImageIndex === index ? "hover" : ""}`}
            draggable
            onDragStart={(e) => handleDragStart(index, e)}
            onDragOver={handleDragOver}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onClick={() => handleImageClick(index)}
          >
            {deleteMode && (
              <input
                type="checkbox"
                checked={selectedImages.includes(index)}
                onChange={() => dispatch(toggleImageSelection(index))}
                className="image-checkbox"
              />
            )}
            <img src={userProfiles[num].image} alt={""} />
            <div className="caption">
              {!deleteMode ? "Drag the image" : "Select"}
            </div>
          </div>
        ))}
        {selectedFile && (
          <div className="mt-4">
            <img
              src={selectedFile}
              alt="Uploaded Image"
              className="max-w-full h-auto"
            />
          </div>
        )}
        <div class="flex justify-center items-center h-64">
          <label class="cursor-pointer">
            <span class="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-8 h-8 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span class="block">Upload a file</span>
            </span>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    </>
  );
});

export default Gallery;
