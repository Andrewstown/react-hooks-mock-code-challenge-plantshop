import React, {useState, useEffect, useTransition} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {
      setPlants(data)
    })
  }, [])

  const handleSubmit = plant => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(plant)
    })
    .then(setPlants([...plants, plant]))
  }

  const handleSearch = search => {
    setSearch(search)
  }
  
  const handleDelete = plant => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {method: 'DELETE'})
    .then(setPlants(plants.filter(plunt => {
      return plunt.id !== plant.id
    })))
  }

  return (
    <div className="app">
      <Header/>
      {plants ? <PlantPage plants={plants.filter(plant => {
        return (plant.name.toLowerCase()).search(search.toLowerCase()) !== -1
      })} newPlant={handleSubmit} search={handleSearch} remove={handleDelete}/> : null}
    </div>
  );
}

export default App;