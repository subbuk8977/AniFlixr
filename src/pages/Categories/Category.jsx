import React from "react";

import "./Category.scss";
import CategorySlider from "../../components/categories-slider/CategorySlider";

const Category = () => {
  return (
    <div className="Category">
      <CategorySlider className="categorySlider"></CategorySlider>
    </div>
  );
};

export default Category;
