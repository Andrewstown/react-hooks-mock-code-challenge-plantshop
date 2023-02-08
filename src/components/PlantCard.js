import React, {useState} from "react";

function PlantCard({plant, remove}) {

  const [stock, setStock] = useState(true)

  const switchStock = () => {
    setStock(!stock)
  }

  const handleDelete = () => {
    remove(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="remove" onClick={handleDelete}>Remove</button>
      {stock ? (
        <button className="primary" onClick={switchStock}>In Stock</button>
      ) : (
        <button onClick={switchStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
