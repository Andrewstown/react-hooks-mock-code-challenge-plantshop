import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, remove}) {
  return (
    <ul className="cards">{plants.map(plant => {
      return <PlantCard plant={plant} remove={remove}/>
    })}</ul>
  );
}

export default PlantList;