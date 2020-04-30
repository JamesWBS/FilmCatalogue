import React from "react";
export default function Movie() {
  return (
    <div id="color" class="main">
      {" "}
      Hello this is movie search path
      <div
        class="flip-container"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div class="flipper">
          <div class="front">
            <h1>movie front</h1>
          </div>
          <div id="color" class="back">
            <h1>movie back</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
