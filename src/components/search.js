import React, { useState, useEffect } from "react";
import client from "./contentful";


const searchFilter = (term, setMovies) => {
  client
    .getEntries({
      content_type: "film",
      "fields.title[match]": term
    })
    .then(response => setMovies(response.items))
    .catch(console.error);
};

export default function Search() {
  const [inputValue, updateValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "film" })
      .then(response => setMovies(response.items))
      .catch(console.error);
  }, []);

  return (
    <div id="color" class="main">
      {" "}
      
      <input
        type="text"
        value={inputValue}
        onChange={e => updateValue(e.target.value)}
        placeholder="search term"
      />
      <button onClick={() => searchFilter(inputValue, setMovies)}>
        Filter
      </button>
      {movies.length
        ? movies.map((element, index) => <div>{element.fields.title}</div>)
        : null}
     
    </div>
  );
}
