import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Wheel } from "react-custom-roulette";
import { menu_list, food_list } from "../../assets/assets";
import "./SpinWheel.css";
import { StoreContext } from "../../Context/StoreContext";

const SpinWheel = () => {
  const [category, setCategory] = useState(null);
  const [food, setFood] = useState(null);
  const [isCategorySpinning, setIsCategorySpinning] = useState(false);
  const [isFoodSpinning, setIsFoodSpinning] = useState(false);

  const { addToCart } = useContext(StoreContext); // Context for cart operations
  const navigate = useNavigate(); // Assuming you're using React Router for navigation

  const categoryData = menu_list.map((item, index) => ({
    id: index,
    option: item.menu_name,
  }));

  const handleCategorySpin = () => {
    setIsCategorySpinning(true);
    setTimeout(() => {
      const selectedCategory =
        categoryData[Math.floor(Math.random() * categoryData.length)];
      setCategory(selectedCategory.option);
      setIsCategorySpinning(false);
    }, 6000); // Spin duration
  };

  const handleFoodSpin = () => {
    if (!category) return;

    const foodItems = food_list.filter(
      (food) => food.food_category === category
    );
    const foodData = foodItems.map((item, index) => ({
      id: index,
      option: item.food_name,
    }));

    setIsFoodSpinning(true);
    setTimeout(() => {
      const selectedFood =
        foodItems[Math.floor(Math.random() * foodData.length)];
      setFood(selectedFood);
      setIsFoodSpinning(false);
    }, 6000); // Spin duration
  };

  const handleReset = () => {
    setCategory(null);
    setFood(null);
  };

  const handleAddToCart = () => {
    if (food) {
      addToCart(food.food_id); // Assuming addToCart function takes food_id as argument
      setFood(null); // Reset selected food after adding to cart
    }
  };

  return (
    <>
      <h1>Choose for me ?</h1>
      <div className="spin-wheel-container">
        <h1>Random Food Selector</h1>
        <div className="wheel-container">
          {!category && (
            <>
              <Wheel
                mustStartSpinning={isCategorySpinning}
                prizeNumber={Math.floor(Math.random() * categoryData.length)}
                data={categoryData}
                onStopSpinning={() => setIsCategorySpinning(false)}
                backgroundColors={["#00B53E", "#FF6929", "#FFDD00", "#FF2525"]}
                textColors={[
                  "#333333", // Dark text for bright colors
                  "#FFFFFF", // White text for tomato
                  "#333333", // Dark text for lime green
                  "#FFFFFF", // White text for slate blue
                ]}
              />

              <div className="button-group">
                <button onClick={handleCategorySpin}>Spin for Category</button>
                <button onClick={handleReset}>Reset</button>
              </div>
            </>
          )}
          {category && !food && (
            <>
              <h2>Selected Category: {category}</h2>
              <Wheel
                mustStartSpinning={isFoodSpinning}
                prizeNumber={Math.floor(
                  Math.random() *
                    food_list.filter((food) => food.food_category === category)
                      .length
                )}
                data={food_list
                  .filter((food) => food.food_category === category)
                  .map((item, index) => ({
                    id: index,
                    option: item.food_name,
                  }))}
                onStopSpinning={() => setIsFoodSpinning(false)}
                backgroundColors={["#00B53E", "#FF6929", "#FFDD00", "#FF2525"]}
                textColors={["#FFFFFF"]}
              />
              <div className="button-group">
                <button onClick={handleFoodSpin}>Spin for Food</button>
                <button onClick={handleReset}>Reset</button>
              </div>
            </>
          )}
          {food && (
            <>
              <h2>Selected Food: {food.food_name}</h2>
              <div className="food-details">
                <img
                  src={food.food_image}
                  alt={food.food_name}
                  className="food-image"
                />
                <p>
                  <strong>Price:</strong> ${food.food_price}
                </p>
                <p>
                  <strong>Description:</strong> {food.food_desc}
                </p>
              </div>
              <div className="button-group">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleReset}>Reset</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SpinWheel;
