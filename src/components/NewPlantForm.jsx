import React, { useState } from "react";

function NewPlantForm({ onNewPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  const fetchNewItem = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then(r => {
      if (r.ok) {
        setError(null);
        return r.json();
      }
      else throw new Error("item failed to create");
    })
    .then(newItem => {
      onNewPlant(newItem);
      setName("");
      setImage("");
      setPrice("");
    })
    .catch(err => {
      setError("item failed to create");
      console.log(error);
      console.error(err);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: name.trim(),
      image: image.trim(),
      price
    }
    fetchNewItem(newItem);
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name}
        onChange={e => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image}
        onChange={e => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price}
        onChange={e => setPrice(e.target.value === "" ? "" : e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
