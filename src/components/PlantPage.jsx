import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlants = () => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:6001/plants")
      .then((r) => {
        if (r.ok) {
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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} loading={loading} error={error} />
    </main>
  );
}

export default PlantPage;
