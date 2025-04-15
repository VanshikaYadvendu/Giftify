import React, { use, useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you.</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if(category==='All' ||category===item.category){
            return (
              <FoodItem
                key={item._id} // ✅ use unique key
                _id={item._id} // ✅ make sure this is defined
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
         
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
