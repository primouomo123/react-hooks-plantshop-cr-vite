import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // string for search input

  const fetchPlants = () => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (r.ok) {
          setError(null);
          return r.json();
        } else {
          throw new Error("Fetch request failed");
        }
      })
      .then((data) => setPlants(data))
      .catch((err) => {
        setError("Failed to fetch data. Please try again or contact support");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleNewPlant = (newPlant) => {
    setPlants(prev => [...prev, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search onSearch={setSearch} fetchAgain={fetchPlants} />
      <PlantList plants={filteredPlants} loading={loading} error={error} />
    </main>
  );
}

export default PlantPage;
