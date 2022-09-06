import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import hero from "../assets/tradingHero.png";
import webTrader from "../assets/webTrader.png";
import webTraderPlatform from "../assets/webTraderPlatform.png";

const Platform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner img={hero} text="Trading Platforms" />

      <section className="webTrader">
        <div className="webTrader__heading">
          <h2>Web Trader</h2>
          <div className="line"></div>
        </div>
        <div className="webTrader__content">
          <div className="webTrader__content-img">
            <img src={webTrader} alt="webTrader" />
          </div>
          <div className="webTrader__content-info">
            <p>
              Digitexmarkets`s highest purpose is to turn its clients into
              successful traders and increase their success rates as much as
              possible. For that purpose we give you the Digitexmarkets Online
              trader, which enables you to be 100% involved in the trading
              process and adjust according to the market conditions, all the
              while letting you plan your trading activities to your preference.
            </p>
            <p>
              Utilize the full scope of the latest technological developments in
              the field by trading from any internet connectible device.
              Investing in Forex, Commodities and CFD has never been easier
              thanks to the Digitexmarkets Online Trader.{" "}
            </p>
            <p>
              Digitexmarkets grants you a gateway to all your trading needs with
              the online and mobile trading applications. They are extremely
              intuitive and functional, enabling you to start a trade whenever
              you want, from anywhere in the world. In case you already have a
              trading account you can start a trade immediately.
            </p>
            <p>
              The Digitexmarkets Online Trader present clients with the option
              to choose from a number of languages, it features the latest
              charts, fast operation of the trades, and best of all, it makes
              everything easy. You have the ability to access to trader from a
              number of different devices such as Apple or Android phone, tablet
              or PC. The platform is easy to use on every device and you can
              handle your investments with just a few clicks.
            </p>
          </div>
        </div>
        <div className="webTrader__platform">
          <div className="webTrader__platform-info">
            <h2 className="webTrader__platform-info-heading">
              Some of the other pros of the platform are:
            </h2>
            <div className="webTrader__platform-info-content">
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Instant Execution.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Automated Trading.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Secure Application.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Advanced charts availability.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Slippage protection.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>3rd party bridging.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>
                  Availability of four pending orders
                  <br /> Buy Limit, Buy Stop, Sell Limit, Sell Stop.
                </h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>0.01 lot sizes.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Partial closing and many others.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Have full control over your profile.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Perform in-depth market analysis.</h4>
              </div>
              <div className="webTrader__platform-info-single">
                <i className="fa-solid fa-check"></i>
                <h4>Invest in a wide selection of assets.</h4>
              </div>
            </div>
          </div>
          <div className="webTrader__platform-img">
            <img src={webTraderPlatform} alt="webTraderPlatform" />
          </div>
        </div>
        <div className="webTrader__text">
          <p>
            Due to the intuitiveness and easiness of use, the Digitexmarkets
            Online trader will make sure that you are fully informed about all
            trades that interest
            <br /> you. Stay knowledgeable on the latest market news and trends,
            without having to leave your couch.
          </p>
          <p>
            The financial market can be very volatile and the conditions can
            change in a matter of minutes. Therefore, you need to be able to
            react quickly in <br />
            such cases. With the Digitexmarkets Online Trader, you act
            accordingly and access your trades at any moment. The advantage is
            in your hands.
          </p>
          <p>
            With the hastened pace of modern life, you need to be constantly on
            the go, but the platform lets you combine that with your trading
            needs,
            <br /> without having to compromise. It`s accessible from any
            browser, there is no need for you to be stuck to any specific place.
            Be it in your office, or
            <br /> from a friend`s PC, logging into your account and trading or
            just checking something is quick and simple.
          </p>
          <p>Using Digitexmarkets to trade is like a walk in the park.</p>
        </div>
        <a href="https://client.digitexmarkets.com/">
          <button className="webTrader__btn">GO TO WEBTRADER</button>
        </a>
      </section>
    </>
  );
};

export default Platform;
