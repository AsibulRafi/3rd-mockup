import React from "react";
import { BsArrowDown, BsCheck } from "react-icons/bs";
import tradeIcon1 from "../assets/tradeIcon1.png";
import tradeIcon2 from "../assets/tradeIcon2.png";
import tradeIcon3 from "../assets/tradeIcon3.png";
import tradeIcon4 from "../assets/tradeIcon4.png";
import tradeIcon5 from "../assets/tradeIcon5.png";
import tradeIcon6 from "../assets/tradeIcon6.png";

import getStarted from "../assets/getStarted.png";
import who from "../assets/who.png";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="hero__content-heading">
              Trade and invest in <br />
              top financial instruments
            </h2>
            <p>
              Trade Stocks, Indices, Forex,
              <br /> Commodities and Cryptocurrencies
            </p>
            <a href="/">
              <button className="hero__content-btn">Open Account</button>
            </a>
          </div>
        </div>
      </section>
      <section className="trade">
        <div className="trade__wrapper">
          <div className="trade__content">
            <div className="bg-heading">
              <h2>Trade with us</h2>
            </div>
            <div className="trade__content-items">
              <div className="trade__content-items__single">
                <img src={tradeIcon1} alt="tradeImg" />
                <p>
                  Means for investing in Forex, futures and indices on a wide
                  number of international marketplaces.
                </p>
              </div>
              <div className="trade__content-items__single">
                <img src={tradeIcon2} alt="tradeImg" />
                <p>
                  Top notch trading platforms, available on all relevant devices
                  – PC, Mac, Android and Apple phones.
                </p>
              </div>
              <div className="trade__content-items__single">
                <img src={tradeIcon3} alt="tradeImg" />
                <p>Superior request processing and spreads</p>
              </div>
              <div className="trade__content-items__single">
                <img src={tradeIcon4} alt="tradeImg" />
                <p>
                  Excellent client care and technical support, which lets you
                  focus on trading
                </p>
              </div>
              <div className="trade__content-items__single">
                <img src={tradeIcon5} alt="tradeImg" />
                <p>
                  Timely reports and indicators, which let you follow how your
                  trading develops with each signal, along with vital success
                  strategies
                </p>
              </div>
              <div className="trade__content-items__single">
                <img src={tradeIcon6} alt="tradeImg" />
                <p>
                  A personalized education system – massive amounts of trading
                  information at your disposal
                </p>
              </div>
            </div>
            <div className="trade__content-info">
              <a href="/" className="trade__content-info-btn">
                Open Account
              </a>
              <p>
                Trade Shares, Indices, Forex, Commodities and <br />
                Cryptocurrencies with CFDs
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="getStarted">
        <div className="getStarted__wrapper">
          <div className="getStarted__content">
            <div className="getStarted__content-info">
              <h2 className="getStarted__content-info-heading">
                Get Started
                <br /> With Us
              </h2>
              <div className="getStarted__content-info-single">
                <div className="getStarted__content-info-single__heading">
                  <h1>01</h1>
                  <h4>REGISTER</h4>
                </div>
                <hr />
                <p>
                  Open your Trading
                  <br /> Account
                </p>
              </div>
              <BsArrowDown className="arrowDown" />
              <div className="getStarted__content-info-single">
                <div className="getStarted__content-info-single__heading">
                  <h4>VERIFY</h4>
                  <h1>02</h1>
                </div>
                <hr />
                <p>
                  Verify your documents <br />
                  with our Compilance
                </p>
              </div>
              <BsArrowDown className="arrowDown" />
              <div className="getStarted__content-info-single">
                <div className="getStarted__content-info-single__heading">
                  <h1>03</h1>
                  <h4>FUND</h4>
                </div>
                <hr />
                <p>
                  Deposit funds into your
                  <br /> Trading Account
                </p>
              </div>
              <BsArrowDown className="arrowDown" />
              <div className="getStarted__content-info-single">
                <div className="getStarted__content-info-single__heading">
                  <h4>TRADE</h4>
                  <h1>04</h1>
                </div>
                <hr />
                <p>
                  Start trading Crypto, Forex,
                  <br /> Indices, Stocks and others
                </p>
              </div>
            </div>
            <div className="getStarted__content-img">
              <img src={getStarted} alt="getStartedImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="who">
        <div className="who__wrapper">
          <div className="who__heading">
            <h2>Who are We</h2>
            <div className="line"></div>
          </div>
          <div className="who__content">
            <div className="who__content-img">
              <img src={who} alt="whoImg" />
            </div>
            <div className="who__content-info">
              <div className="who__content-info-box">
                <div className="who__content-info-box-single">
                  <BsCheck />
                  <p>
                    CFDs including Spot Metals, <br />
                    Spot Oils, Indices and
                    <br /> Commodities
                  </p>
                </div>
                <div className="who__content-info-box-single">
                  <BsCheck />
                  <p>
                    Catering to both large and small
                    <br /> market participants across the
                    <br /> globe
                  </p>
                </div>
                <div className="who__content-info-box-single">
                  <BsCheck />
                  <p>
                    Over 60 tradeable foreign
                    <br /> exchange markets
                  </p>
                </div>
              </div>
              <div className="who__content-info-text">
                <p>
                  Digitexmarkets was established by industry experts with many
                  years of broad and hands-on experience in the financial
                  markets. Our mission is to provide the best services and
                  creative solutions to our clients and help them grow together
                  in this fast paced global financial market.
                </p>
                <p>
                  Digitexmarkets promises to provide an optimal trading
                  environment with a stable system for every trade and to
                  provide our clients with the best possible assistance.
                </p>
                <p>
                  We aim to achieve this by providing the highest standards of
                  customer service and ensuring that our clients are treated
                  fairly.
                </p>
                <p>
                  Our overall vision is to be the best global FX Company. We
                  want to be your trustworthy global partner in the forex
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
