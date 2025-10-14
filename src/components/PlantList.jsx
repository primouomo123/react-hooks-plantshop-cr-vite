import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!plants.length) return <p>No plants available.</p>;

  return (
    <ul className="cards">
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard name={plant.name} image={plant.image} price={plant.price} />
        </li>
      ))}
    </ul>
  );
}

export default PlantList;
