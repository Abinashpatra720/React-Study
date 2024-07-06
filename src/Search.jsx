import React, { useState } from "react";
const animals = ["birds", "cat", "dog", "rabbit"];
const breeds = ["kdnsjnsjd"];

const Search = () => {
  const [location, setLocation] = useState("Seattle,WA");
  const [animal, setAnimal] = useState("");
  const [breed, setbreed] = useState("");
  return (
    <div className="search-params">
      <form>
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
            {animals.map((animal) => (
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
    </div>
  );
};
export default Search;
