import React from "react";

const Banner = ({ img, text }) => {
  return (
    <section className="banner">
      <div className="banner__bg" style={{ backgroundImage: `url(${img})` }}>
        <div className="banner__content">
          <h2>{text}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
