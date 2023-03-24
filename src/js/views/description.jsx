import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  const { id } = useParams(); // extract the URL parameter

  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      const data = await response.json();
      setPerson(data.result.properties);
    }
    fetchData();
  }, [id]);

  return (
    <div className="container">
      <div className="image">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${index}.jpg`} alt={character.name} />
      </div>
      <div className="text p-4">
        <h2 className="text-center">{character.name}</h2>
      
      </div>
      <footer className="footer mt-3">Your footer text here</footer>
    </div>
  );
};

export default Description;