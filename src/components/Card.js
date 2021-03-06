import React from "react";

//Create a default function (without a name) to export as a component
export default function (fetchedData) {
    //Destructuring the variable "fetchData", which represents to be the data object fetched from Contentful API
    const {imgSrc, title, releaseDate, director, cast, synopsis,} = fetchedData;
  return (
    //Card structure is displayed from here
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src={imgSrc} alt="filmPoster"/>
        </div>
        <div id="color" class="back">
          <p>
            <u>Title:</u> {title}
          </p>
          <p>
            <u>Release Date:</u> {releaseDate}
          </p>
          <p>
            <u>Director:</u> {director}
          </p>
          <p>
            <u>Cast:</u> {cast}
          </p>
          <p>{synopsis}</p>
        </div>
      </div>
    </div>
  );
}
