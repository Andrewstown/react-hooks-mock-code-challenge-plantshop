import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, newPlant, search, remove}) {
  return (
    <main>
      <NewPlantForm newPlant={newPlant}/>
      <Search search={search}/>
      <PlantList plants={plants} remove={remove}/>
    </main>
  );
}

export default PlantPage;