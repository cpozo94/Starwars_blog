import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../styles/characters.css";

const Planets = () => {
  const navigate = useNavigate();
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.swapi.tech/api/planets');
      const data = await response.json();
      setPlanets(data.results.slice(0, 10)); // get the first 10 people
    }
    fetchData();
  }, []);

  const handleClick = (person) => {
    navigate(`/detail/${planets.name}/${planets.url}`);
  };

  return (
    <div className="container">

      <h1>Planets</h1>
    <div className="alllist">
      <ul className="list">
        {planets.map((planets, index) => {
            return(
                <li key={index}>
                    <div className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${index+2}.jpg`} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{planets.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="icons">
                          <div>
                        <Link to="/">
                        <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        </div>
                        <div>
                        <button type="button" className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                        </div>
                    </div>
                    </div>
            
                </li>
            )
        })}
          
       
      </ul>
      </div>
    </div>
  );
  
};

export default Planets;

