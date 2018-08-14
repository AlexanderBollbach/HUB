import React from "react";
import Styles from "./Project.css";

const Project = ({ name, description, imageURL, styleName, url }) => {
  return (
    <div
      onClick={() => {
        window.location.replace(url);
      }}
      className={Styles[styleName]}
    >
      <div className={Styles.centered}>{name}</div>
      <div className={Styles.centered}>{description}</div>
      <div className={Styles.centered}>
        <img src={imageURL} />
      </div>
    </div>
  );
};

export default Project;
