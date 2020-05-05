import React from "react";


export default function (fetchedData) {
    const {imgSrc, title, releaseDate, director, cast, synopsis,} = fetchedData;
  return (
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src={imgSrc} alt="film image"/>
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
