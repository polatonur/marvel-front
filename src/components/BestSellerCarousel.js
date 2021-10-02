/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ data }) => {
  return data.results.map((elem, index) => {
    return (
      elem.thumbnail.path !==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
        <div key={index} className="top-card card-comic">
          <div className="upper-card card-comic">
            <img
              src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              alt=""
            />{" "}
          </div>
          <div className="bottom-card">
            {" "}
            <h2 className="comic-card-title">{elem.title.split("#")[0]}</h2>
          </div>
        </div>
      )
    );
  });
};
