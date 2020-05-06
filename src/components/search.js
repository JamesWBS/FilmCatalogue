import React, { useState, useEffect } from "react";
import client from "../configuration/contentful";
import Card from "../components/Card";

const searchFilter = (term, setMovies) => {
  client
    .getEntries({
      content_type: "film",
      "fields.title[match]": term,
    })
    .then((response) => setMovies(response.items))
    .catch(console.error);
};

export default function Search() {
  const [inputValue, updateValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

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
        ? movies.map((element, index) => {
            return (
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
