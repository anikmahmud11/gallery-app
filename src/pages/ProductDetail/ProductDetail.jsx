import React from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";

const ProductDetail = () => {
  const { id } = useParams();
  const userId = parseInt(id);

  return (
    <div>
      <Navbar />
      <ProductDetailsCard userId={userId} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
