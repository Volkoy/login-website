import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Hello, World! ✌</h1>
        <p>This is a website to test a login feature.</p>
        <p>
          Developed using:{" "}
          <FontAwesomeIcon icon="fa-brands fa-react" size="lg" />
          <span> React</span> and{" "}
          <FontAwesomeIcon icon="fa-brands fa-node-js" size="lg" />
          <span> Node</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
