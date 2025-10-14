import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [inStock, SetInStock] = useState(true);
  const handleInStock = () => {
    SetInStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
