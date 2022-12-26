import React from "react";
import SignUp from "../components/signUp";
import Sudemo from "../components/sudemo";
import Preview from "../components/homepage_res_preview";

function demo() {
  return (
    <div>
      <Preview
        foodName="LPS Special"
        restaurantName="kefira Restaurant"
        foodImage="/image_for_homepage_res_preview.jpeg"
        ingridient="Lemon,pepper,salt"
        location="4 Kilo"
        rating="4.5"
      />
    </div>
  );
}

export default demo;
