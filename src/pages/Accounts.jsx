import React from "react";
import { BsCheck } from "react-icons/bs";
import Banner from "../Components/Banner";
import hero from "../assets/accountsHero.png";
const Accounts = () => {
  return (
    <>
      <Banner img={hero} text="Accounts" />
      <section className="accounts" id="types">
        <div className="accounts__heading">
          <h2>Trade With Us</h2>
          <div className="line"></div>
          <p>
            Our accounts provide benefits of Forex market to private and
            corporate clients, using <br />
            one of the most advanced trading platforms available..
          </p>
        </div>

        <div className="accounts__types">
          <table className="accounts__types-table">
            <thead>
              <tr>
                <th></th>
                <th scope="col">CLASSIC</th>
                <th scope="col">GOLD</th>
                <th scope="col">PRIME</th>
                <th scope="col">ECN GOLD</th>
                <th scope="col">ECN VIP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minimum Account size</td>
                <th>€ 500</th>
                <th>€ 5000</th>
                <th>€ 50,000</th>
                <th>€ 250,000</th>
                <th>CALL US</th>
              </tr>
              <tr>
                <td>Spreads from</td>
                <td>3.3 pips</td>
                <td>2.2 pips</td>
                <td>1.8 pips</td>
                <td>1.0 pips</td>
                <td>0.0 pips</td>
              </tr>
              <tr>
                <td>Leverage</td>
                <td>up to 1:30</td>
                <td>up to 1:100</td>
                <td>up to 1:200</td>
                <td>up to 1:350</td>
                <td>up to 1:500</td>
              </tr>
              <tr>
                <td>Stop out level</td>
                <td>up to 75%</td>
                <td>up to 60%*</td>
                <td>up to 45%*</td>
                <td>up to 30%*</td>
                <td>up to 15%*</td>
              </tr>
              <tr>
                <td>Minimum Deal size</td>
                <td>0.01 lot</td>
                <td>0.05 lot</td>
                <td>0.025 lot</td>
                <td>0.50 lot</td>
                <td>2.00 lot</td>
              </tr>
              <tr>
                <td>Financial Instruments</td>
                <td>
                  Forex, Commodities,
                  <br />
                  Indices,
                  <br />
                  Cryptocurrencies
                </td>
                <td>
                  Forex, Commodities,
                  <br />
                  Indices,
                  <br />
                  Cryptocurrencies
                </td>
                <td>
                  Forex, Commodities,
                  <br />
                  Indices,
                  <br />
                  Cryptocurrencies
                </td>
                <td>
                  Forex, Commodities,
                  <br />
                  Indices, Cryptocurrencies
                  <br />
                  Bond's, stocks
                </td>
                <td>
                  Forex, Commodities, Indices,
                  <br />
                  Cryptocurrencies, Bond's,
                  <br />
                  Europe&amp;Us stocks, Cannabis <br />
                  stocks
                </td>
              </tr>
              <tr>
                <td>1 on 1 Support (per month)</td>
                <td>up to 1</td>
                <td>up to 2</td>
                <td>up to 4</td>
                <td>up to 6</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Technical Analysis</td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Trading Signals</td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Daily Market Review</td>
                <td></td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Margin call - Email</td>
                <td></td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Margin call - SMS**</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Daily Live Review</td>
                <td></td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Meeting Session</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>Senior Account Executives Direct Line</td>
                <td></td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
                <td>
                  <BsCheck />
                </td>
              </tr>
              <tr>
                <td>
                  * For Professional Clients Only **
                  <br />
                  As this service depends on third party <br />
                  providers, the availability of this service
                  <br />
                  is not guaranteed.
                </td>
                <td>
                  <a
                    href="https://client.digitexmarkets.com/register"
                    className="accounts-types-btn"
                  >
                    OPEN ACCOUNT
                  </a>
                </td>
                <td>
                  <a
                    href="https://client.digitexmarkets.com/register"
                    className="accounts-types-btn"
                  >
                    OPEN ACCOUNT
                  </a>
                </td>
                <td>
                  <a
                    href="https://client.digitexmarkets.com/register"
                    className="accounts-types-btn"
                  >
                    OPEN ACCOUNT
                  </a>
                </td>
                <td>
                  <a
                    href="https://client.digitexmarkets.com/register"
                    className="accounts-types-btn"
                  >
                    OPEN ACCOUNT
                  </a>
                </td>
                <td>
                  <a
                    href="https://client.digitexmarkets.com/register"
                    className="accounts-types-btn"
                  >
                    OPEN ACCOUNT
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="steps">
        <div className="steps__heading">
          <h2>
            Steps for opening a Trading Profile
            <br /> Opening a trading account at
            <br /> Digitexmarkets
          </h2>
        </div>
        <div className="steps__content">
          <div className="steps__content-single">
            <h1>01</h1>
            <h4>
              Pick the account types depending
              <br /> on your objectives and needs
            </h4>
            <hr />
            <p>
              Three available account types are supplemented with lots of
              additional features that bring some extra pluses to the investor.
              You can easily sign up for any of them. And keep the notice that
              you can change the account type after putting money on your acc.
            </p>
          </div>
          <div className="steps__content-single">
            <h1>02</h1>
            <h4>
              Fill out the demanded information
              <br /> and confirm your identity
            </h4>
            <hr />
            <p>
              You just need to complete information profile with your personal
              data and to provide some identity papers.
            </p>
          </div>
          <div className="steps__content-single">
            <h1>03</h1>
            <h4>
              Depositing money into your <br />
              account
            </h4>
            <hr />
            <p>
              Once we approve and authorize your application, you will be able
              to make your payments and withdrawals swiftly.
            </p>
          </div>
        </div>
      </section>
      <section className="funding" id="funding">
        <div className="funding__wrapper">
          <div className="funding__heading">
            <h2>Account Funding</h2>
            <div className="line"></div>
            <p>
              There are 3 different ways to fund your Digitexmarkets account:
            </p>
          </div>
          <div className="funding__content">
            <div className="funding__content-single">
              <div className="funding__content-single-heading">
                <h1>03</h1>
                <h4>Wire Transfer</h4>
              </div>
              <hr />
              <p>
                No name account allows for deposits to be made via wire
                transfer. If you decide to choose this deposit means, you will
                have to input your banking details.
              </p>
              <p>
                This action will take you to your bank page and you will be
                given further directives on how to fund your account using wire
                transfer.
              </p>
              <p>
                Depending on your financial institution, your funds might take
                between 2 and 5 days to clear. As soon as the funds are in your
                trading account you will receive an email notification.
              </p>
            </div>
            <div className="funding__content-single">
              <div className="funding__content-single-heading">
                <h1>02</h1>
                <h4>Bank Draft</h4>
              </div>
              <hr />
              <p>
                You can deposit to your account using the bank draft option,
                however, using this option can mean having your funds clear in a
                maximum of five days.
              </p>
              <p>
                Do write or visit your bank and be sure you can use this method
                to deposit to your No name account.
              </p>
            </div>
            <div className="funding__content-single">
              <div className="funding__content-single-heading">
                <h1>01</h1>
                <h4>Credit Card /Debit Card</h4>
              </div>
              <hr />
              <p>
                The best way to fund your account is with a credit or debit
                card. The transfer is immediate and secure.
              </p>
              <p>
                Minimum transaction amount $250 with a maximum amount $500.
                Please not your card should be enabled for international
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="withdraw">
        <div className="withdraw__content-1">
          <div className="withdraw__content-1-box">
            <h2 className="withdraw__content-heading">
              Withdrawing
              <br /> Funds
            </h2>
            <p>
              The process of requesting a withdrawal on No name account is
              simple, fluid and straightforward:
            </p>
            <p>
              Log into your account and click on withdrawal funds Submit a
              withdrawal request We will take it from there
            </p>
            <p>
              Note: Processing funds takes about two working days, depending on
              the financial institution of your choosing, your funds might take
              even longer to reflect in your bank.
            </p>
          </div>
        </div>
        <div className="withdraw__content-2">
          <div className="withdraw__content-2__wrapper">
            <div className="withdraw__content-2-box">
              <h2
                className="withdraw__content-heading"
                style={{ color: "#fff" }}
              >
                Things you should
                <br /> take into account:
              </h2>
              <p style={{ color: "#fff" }}>
                If you deposited any amount using a particular method of
                deposit, it must be stated that the method of deposit is the
                same method that must be used in withdrawal.
              </p>
              <p style={{ color: "#fff" }}>
                Only when the amount requested for withdrawal exceeds the
                deposited amount you are asked to provide an alternative account
                detail into which the extra funds are paid into.
              </p>
              <p style={{ color: "#fff" }}>
                For further inquiries regarding funding please contact us at
                support@digitexmarkets.com or through our live chat. In case you
                would like to ask anything related to putting money on the Live
                Account, feel free to get in touch with the team using the live
                chat or email feature.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="segregated">
        <div className="segregated__wrapper">
          <div className="segregated__heading">
            <h2>Segregated Account</h2>
            <div className="line"></div>
            <p>
              The unique Digitexmarkets Account allows our clients to conduct
              trades perfectly protects them
              <br /> out of slow transaction times or information and payments
              errors.
            </p>
          </div>
          <div className="segregated__content">
            <div className="segregated__content-1">
              <h3>Advantages</h3>
              <p>
                There are few more additional benefits that are shaped exactly
                to satisfy our client’s needs. You can be sure in:
              </p>
              <ul>
                <li>100% client orientated experience</li>
                <li>
                  24/5 client support and help in dealing with the most common
                  issues
                </li>
                <li>Effective use of your capital</li>
                <li>128 bit SSL Security Protocols</li>
                <li>Convenient and client-friendly management of your funds</li>
              </ul>
            </div>
            <div className="segregated__content-2">
              <h3>When will a Senior Broker be assigned to me?</h3>
              <p>
                Your Personal Senior Broker will be assigned to you upon
                activating and funding your account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accounts;
