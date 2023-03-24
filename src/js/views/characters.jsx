import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import "../../styles/characters.css";


const TodoList = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.swapi.tech/api/people');
      const data = await response.json();
      setPeople(data.results.slice(0, 10)); // 10 primeros personajes
    }
    fetchData();
  }, []);

  const handleClick = (index) => {
    navigate(`/detail/${index}`);
  };

  return (
    <div className="container">

      <h1>Characters</h1>
    <div className="alllist">
      <ul className="list">
        {people.map((person, index) => {
            return(
                <li key={index}>
                    <div className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="icons">
                          <div>
                        <Link to="/description/:id">
                        <button type="button" className="btn btn-outline-primary" onClick={() => handleClick(person)}>Learn more!</button>
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

export default TodoList;

