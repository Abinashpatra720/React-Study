import React, { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const Search = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setbreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            id="location"
            value={location}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setbreed("");
            }}
          >
            <option />
            {Animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => setbreed(e.target.value)}
          >
            <option />
            {breeds.map((animalbreed) => (
              <option key={animalbreed} value={animalbreed}>
                {animalbreed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets = {pets}></Results>
    </div>
  );
};
export default Search;
