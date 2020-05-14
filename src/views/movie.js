import React, { useEffect, useState } from "react";
//import Client from "../configuration/contentful";
import Card from "../components/Card";

//Create default function Movie to export as a component
export default function Movie() {
  //Define state variable to use it for data fetching
  const [data, setData] = useState("");

  const fetchData = function () {
    fetch("http://localhost:8080/movie")
      .then((result) => result.json())
      .then((finalResult) => setData(finalResult.rows[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  //useEffect hook ensures the data to be fetched once the page is loaded
  /*useEffect(() => {
    //The actual code through which the data is fetched from Contentful API
    Client.getEntries({
      content_type: "film",
    })
      .then((response) => setData(response.items))
      .catch((err) => console.log(err));
  }, []);*/

  return (
    //
    <div id="color" class="main">
      {" "}
      <p>Hello this is movie search path</p>
      <Card
        imgSrc={data.urlimage}
        title={data.title}
        releaseDate={data.releasedate}
        synopsis={data.synopsis}
      />
    </div>
  );
}
