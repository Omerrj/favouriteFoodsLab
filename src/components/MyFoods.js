import React from "react";
const MyFoods = ({ foods }) => (
  <div>
    <h1>My favourite Foods</h1>
    <ul>
      {foods.map((food) => (
        <li key={food}>{food}</li>
      ))}
    </ul>
  </div>
);
export default MyFoods;
