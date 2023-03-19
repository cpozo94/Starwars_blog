import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/todolist.css";

const TodoList = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.swapi.tech/api/people');
      const data = await response.json();
      setPeople(data.results.slice(0, 10)); // get the first 10 people
    }
    fetchData();
  }, []);

  const handleClick = (person) => {
    navigate(`/detail/${person.name}/${person.url}`);
  };

  return (
    <div className="container">

      <h1>Characters</h1>

      <ul className="list">
        {people.map((person, index) => {
            return(
                <li key={index}>
                    <div className="card">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`} class="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            
                </li>
            )
        })}
          
       
      </ul>
    </div>
  );
  
};

export default TodoList;


<div className="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>