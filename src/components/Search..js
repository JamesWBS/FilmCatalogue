import React, { useState, useEffect } from "react";
import client from "../configuration/contentful"; // to access the data or spaces in contentful
import Card from "../components/Card"; // to display the search result in a card

//search filter to filter the movies using the 'term' as requested film
const searchFilter = (term, setMovies) => {
  client
    .getEntries({
      content_type: "film", //selecting contentful space id for the movie
      "fields.title[match]": term, //get entries from contenful space who match the requested movie or 'term'
    })
    .then((response) => setMovies(response.items))
    .catch(console.error);
};

export default function Search() {
  const [inputValue, updateValue] = useState(""); //state variables for the requested movie in an input search bar
  const [movies, setMovies] = useState([]); // state variables to loop the fetched movie data from contentful

  useEffect(() => { }, []);

  return (
    <div id="color" class="main">
      {" "}
      {/*input search field for the movies*/}
      <input
        type="text"
        value={inputValue}
        onChange={e => updateValue(e.target.value)}
        placeholder="search term"
      />
      <button onClick={() => searchFilter(inputValue, setMovies)}>
        Filter
      </button>
      {/*map function will return the movie or movies whose whole or partial text matched with the user input. 
      If the search bar is empty and user clicks filter it displays all the movies*/}
      {movies.length
        ? movies.map((element, index) => {
          return (
            /*show the movie or movies in a card or cards by using card component*/
            <Card
              key={index}
              imgSrc={element.fields.poster.fields.file.url}
              title={element.fields.title}
              releaseDate={element.fields.releaseDate}
              director={element.fields.director}
              cast={element.fields.cast}
              synopsis={element.fields.synopsis}
            />
          );
        })
        : null}
    </div>
  );
}
