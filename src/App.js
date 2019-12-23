import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function App() {
  return (
    <Poster
      image={"https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"}
      title={"REACT"}
      text={"The best thing since jQuery, probably"}
    />
  );
}

function Poster({ image, title, text }) {
  console.log("image: ", image);
  console.log("image var: ", `${image}`);
  return (
    <div className={"poster"}>
      <div>
        <img
          src={image}
          alt={"react-img"}
          style={{ width: "200px", alignSelf: "center", paddingLeft: "249px" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontFamily: "serif",
          fontSize: "2.5em",
          color: "blue"
        }}
      >
        {title}
      </div>
      <div style={{ textAlign: "center", color: "#fff", fontSize: "1.5em" }}>
        {text}
      </div>
    </div>
  );
}

Poster.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default App;
