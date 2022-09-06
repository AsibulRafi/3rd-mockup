import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import hero from "../assets/signals.png";
import hand from "../assets/signalsHand.png";
const Signals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner img={hero} text="Forex Signals" />
      <section className="signals">
        <div className="signals__content">
          <div className="signals__content-text">
            <p>
              At No Name 1 we provide the best Forex signals by working closely
              with technology providers who are at the forefront of the
              industry.
            </p>
            <button>Hot Signal</button>
          </div>
          <div className="signals__content-img">
            <img src={hand} alt="signal" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signals;
