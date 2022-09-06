import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import hero from "../assets/forexhero.png";
import forex from "../assets/forex.png";
const Forex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner img={hero} text="Forex" />
      <section className="forex">
        <div className="forex__heading">
          <h2>What is Forex?</h2>
          <div className="line"></div>
        </div>
        <div className="forex__content">
          <div className="forex__content-text">
            <p>
              The definition of Forex is the trading of different currency
              pairs.
            </p>
            <p>
              The trading occurs between one currency against another. One
              currency is compared with the other. For example, the rate of the
              USDGBP currency pair is 0.66, then it means that 1 USA dollar
              costs 0.66 British Pounds. The goal of Forex is to see if the
              American dollar will enhance or not its price equated to the
              British Pound. If it does, then the trader should buy the USDGBP
              pair on this term.
            </p>
            <p>
              In the case when the price goes down, for instance from 0.66 to
              0.64, then the USA dollar has a descended position. If the price
              moves in the opposite way, for example from 0.66 to 0.69, then the
              USA dollar is increasing its price against the British Pound. You
              will meet often the terms “short” and “lot” where “long”, in that
              instance, correlate with the Dollar and “short” refers to the
              British Pound. Because the GBP stated its price in the USD. The
              other important expression that you must take into consideration
              is “the major”, which signify the ruling global currency pairs,
              such as the AUDUSD, the USDJPY, the EURUSD, the USDCAD, the USDCHF
              and the GBPUSD. And every one of them has the Dollar inside. We
              have the phrase “cross pairs” which refers to pairs that do not
              have the Dollar in them. Forex does not function as a real
              physical currency transaction. All transitions and swaps are going
              on the Internet, which means that this market works only as
              speculation with currencies. Approximate statistic says that more
              over 4 trillion dollars are being swapped every day all around the
              globe, but all the assets are engaged in many types – future,
              forward, currency exchange and so on.
            </p>
            <p>
              The Forex trading works without breaks, during the whole week and
              24 hours a day but it has holidays on weekends.
            </p>
            <p>
              Look for additional Forex information at the No name 1 learning
              section.
            </p>
          </div>
          <div className="forex__content-img">
            <img src={forex} alt="signal" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Forex;
