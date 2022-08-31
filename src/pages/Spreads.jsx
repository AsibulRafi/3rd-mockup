import React from "react";
import Banner from "../Components/Banner";
import hero from "../assets/spredshero.png";
import hand from "../assets/spreds.png";
const Spreads = () => {
  return (
    <>
      <Banner
        img={hero}
        text="Spreads and 
Trading hours "
      />
      <section className="spreads">
        <div className="spreads__content">
          <div className="spreads__content-text">
            <p>
              Dealing with MultiplyMarket, you’ll obtain a fixed range of
              spreads for a wide specter of currency pairs, available 24/7.
              Free of strict margin boundaries, it empowers you to trade
              using more profitable conditions.
            </p>
            <h2>MARGIN  REQUIREMENTS</h2>
            <ul>
              <li>
                You have the ability to select leverages from 1:1 up to 1:400
              </li>
              <li>Minimum Trade Size </li>
              <li>
                The minimum trade size  for all assets is 0.01 for a standard
                lot.
              </li>
            </ul>
          </div>
          <div className="spreads__content-img">
            <img src={hand} alt="spreds" />
          </div>
        </div>
      </section>
      <div className="spreads-table">
        <div className="spreads-table-content">
          <table>
            <thead className="spreads-table-content-heading">
              <tr>
                <th>Symbol</th>
                <th>Mini Account Spread</th>
                <th>Classic Account Spread</th>
                <th>Premium Account Spread</th>
                <th>Leverage</th>
                <th>Trading hours</th>
              </tr>
            </thead>
            <tbody className="spreads-table-content-body">
              <tr>
                <td>EURUSD</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPUSD</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDJPY</td>
                <td>3</td>
                <td>2</td>
                <td>2</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDILS</td>
                <td>50</td>
                <td>40</td>
                <td>30</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURCHF</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURJPY</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>AUDUSD</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURGBP</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>NZDUSD</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDCAD</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDCAD</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDCHE</td>
                <td>4</td>
                <td>3</td>
                <td>3</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPCHF</td>
                <td>5</td>
                <td>4</td>
                <td>4</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>CADJPY</td>
                <td>6</td>
                <td>5</td>
                <td>4</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>CHFJPY</td>
                <td>6</td>
                <td>5</td>
                <td>4</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPJPY</td>
                <td>6</td>
                <td>5</td>
                <td>4</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>NZDJPY</td>
                <td>5</td>
                <td>4</td>
                <td>4</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDHKD </td>
                <td>5</td>
                <td>4</td>
                <td>4</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>AUDJPY</td>
                <td>7</td>
                <td>6</td>
                <td>5</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>CADCHF</td>
                <td>8</td>
                <td>7</td>
                <td>6</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURAUD</td>
                <td>8</td>
                <td>7</td>
                <td>6</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>NZDCAD</td>
                <td>8</td>
                <td>7</td>
                <td>6</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDSGD</td>
                <td>8</td>
                <td>7</td>
                <td>6</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURCAD</td>
                <td>12</td>
                <td>11</td>
                <td>10</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>NZDCHF</td>
                <td>13</td>
                <td>12</td>
                <td>11</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>AUDCAD</td>
                <td>13</td>
                <td>12</td>
                <td>11</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>AUDCHF</td>
                <td>15</td>
                <td>14</td>
                <td>13</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>AUDNZD</td>
                <td>20</td>
                <td>15</td>
                <td>15</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPAUD</td>
                <td>20</td>
                <td>15</td>
                <td>15</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPCAD</td>
                <td>20</td>
                <td>15</td>
                <td>15</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURDKK</td>
                <td>20</td>
                <td>15</td>
                <td>15</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURNZD</td>
                <td>40</td>
                <td>30</td>
                <td>30</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDDKK</td>
                <td>40</td>
                <td>30</td>
                <td>30</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDTRY</td>
                <td>40</td>
                <td>30</td>
                <td>30</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURTRY</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPNZD</td>
                <td>45</td>
                <td>35</td>
                <td>35</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURNOK</td>
                <td>45</td>
                <td>35</td>
                <td>35</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDPLN</td>
                <td>45</td>
                <td>35</td>
                <td>35</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURPLN</td>
                <td>50</td>
                <td>40</td>
                <td>40</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURSEK</td>
                <td>50</td>
                <td>40</td>
                <td>40</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDNOK</td>
                <td>50</td>
                <td>40</td>
                <td>40</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDSEK</td>
                <td>50</td>
                <td>40</td>
                <td>40</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURILS</td>
                <td>70</td>
                <td>60</td>
                <td>60</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>GBPILS</td>
                <td>70</td>
                <td>60</td>
                <td>60</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>EURHUF</td>
                <td>75</td>
                <td>65</td>
                <td>65</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDHUF</td>
                <td>75</td>
                <td>65</td>
                <td>65</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDMXN</td>
                <td>100</td>
                <td>90</td>
                <td>90</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
              <tr>
                <td>USDZAR</td>
                <td>100</td>
                <td>90</td>
                <td>90</td>
                <td>200</td>
                <td>24 Hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="sperds__heading">
          Indices Spreads &<br /> Conditions – chart
        </h2>
        <div className="spreads-table-content">
          <table>
            <thead className="spreads-table-content-heading">
              <tr>
                <th>Symbol</th>
                <th>Mini Account Spread</th>
                <th>Classic Account Spread</th>
                <th>Leverage</th>
                <th>Trading hours</th>
              </tr>
            </thead>
            <tbody className="spreads-table-content-body">
              <tr>
                <td>SP</td>
                <td>100</td>
                <td>50</td>
                <td>500</td>
                <td>23:00-21:15</td>
              </tr>
              <tr>
                <td>NSDQ</td>
                <td>150</td>
                <td>100</td>
                <td>500</td>
                <td>23:00-21:15</td>
              </tr>
              <tr>
                <td>FTSE</td>
                <td>500</td>
                <td>300</td>
                <td>500</td>
                <td>23:00-21:15</td>
              </tr>
              <tr>
                <td>DAX</td>
                <td>500</td>
                <td>300</td>
                <td>500</td>
                <td>23:00-21:15</td>
              </tr>
              <tr>
                <td>DOW</td>
                <td>500</td>
                <td>300</td>
                <td>500</td>
                <td>23:00-21:15</td>
              </tr>
              <tr>
                <td>NK</td>
                <td>500</td>
                <td>300</td>
                <td>500</td>
                <td>23:00-21:15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="sperds__heading">
          Commodities Spreads &<br /> Conditions – chart
        </h2>
        <div className="spreads-table-content">
          <table>
            <thead className="spreads-table-content-heading">
              <tr>
                <th>Symbol</th>
                <th>Mini Account Spread</th>
                <th>Classic Account Spread</th>
                <th>Premium Account Spread</th>
                <th>Leverage</th>
                <th>Trading hours</th>
              </tr>
            </thead>
            <tbody className="spreads-table-content-body">
              <tr>
                <td>GOLD</td>
                <td>50</td>
                <td>45</td>
                <td>40</td>
                <td>200</td>
                <td>23:00-22:15</td>
              </tr>
              <tr>
                <td>SILVER</td>
                <td>50</td>
                <td>45</td>
                <td>40</td>
                <td>200</td>
                <td>23:00-22:15</td>
              </tr>
              <tr>
                <td>NGAS</td>
                <td>50</td>
                <td>45</td>
                <td>40</td>
                <td>200</td>
                <td>23:00-22:15</td>
              </tr>
              <tr>
                <td>CL</td>
                <td>50</td>
                <td>45</td>
                <td>40</td>
                <td>200</td>
                <td>23:00-22:15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Spreads;
