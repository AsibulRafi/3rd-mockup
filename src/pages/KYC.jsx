import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import hero from "../assets/kychero.png";
const KYC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner img={hero} text="KYC Policy" />
      <section className="kyc">
        <p>
          Know your customer policies have become increasingly important
          worldwide lately, especially among banks and other financial
          institutions, in order to prevent identity theft, money laundering,
          financial fraud and terrorist activity.
        </p>
        <p>
          Digitexmarkets holds a zero tolerance fraud policy and is taking all
          measures possible to prevent it. Any fraudulent activity will be
          documented and all related accounts to it will be immediately closed.
          All funds in these accounts will be forfeited.
        </p>
        <p>
          Prevention: Digitexmarkets aims to ensure the integrity of any
          sensitive data it obtains, such as your account information and the
          transactions you make, using a variety of security measures and fraud
          controls. Securing your electronic transactions requires us to be
          provided with certain data from you, including your preferred deposit
          method.
        </p>
        <div className="kyc__flex">
          <div className="kyc__flex-content">
            <h2>
              When you deposit funds we will require the following documents:
            </h2>
            <ul>
              <li>Excluding of redundant bureaucracy and paperwork</li>
              <li>Wide selection of available trading assets</li>
              <li>Trade execution just in one click</li>
              <li>Easy adjusting and settings to set up user’s preferences</li>
              <li>Powerful forecast following the value changes</li>
              <li>
                Notifications, that can be sent just on your mobile, alert you
                to trade
              </li>
              <li>Fees-free</li>
              <li>24/7 clients support</li>
            </ul>
          </div>
          <div className="kyc__flex-content">
            <p>
              When do I need to provide these documents? We highly appreciate
              you taking the time to provide us with all the necessary documents
              as soon as you can, in order to avoid any delays in processing
              your transactions. We require the receipt of all the necessary
              documents prior to making any cash transactions to your benefit.
            </p>
            <p>
              Some circumstances may require us to request these documents
              before allowing any other activities in your account, such as
              deposits or trades.
            </p>
            <p>
              Please note that if we will not receive the required documents on
              file, your pending withdrawals will be canceled and credited back
              to your trading account. We will notify you in such event via our
              system.
            </p>
          </div>
        </div>
        <hr />
        <h2>How do I know my documents are safe with you?</h2>
        <p>
          Digitexmarkets holds the security of documentation with the highest
          priority and treats all documents it receives with utmost respect and
          confidentiality. All files we obtain are fully protected using the
          highest level possible of encryption at every step of the review
          process. We thank you for your cooperation in helping us make No Name
          1 a safer place to trade.
        </p>
        <h2>How can I send you these documents?</h2>
        <p>
          Please scan your documents, or take a high-quality digital camera
          picture, save the images as jpegs, then send it to us via mail to
          support@digitexmarkets.com
        </p>
      </section>
    </>
  );
};

export default KYC;
