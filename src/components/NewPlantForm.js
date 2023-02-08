import React from "react";

function NewPlantForm({newPlant}) {

  const handleSubmit = e => {
    e.preventDefault()
    let data = e.target
    newPlant({
      name: data.name.value,
      image: data.image.value,
      price: data.price.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;