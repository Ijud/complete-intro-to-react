import React from "react";
import { render } from "react-dom";

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>
        {props.title}
      </h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="GoT" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="DarkBlue" />
      <MyTitle title="Rick and Morty" color="Peru" />
      <MyTitle title="The OA" color="Violet" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById("app"));
