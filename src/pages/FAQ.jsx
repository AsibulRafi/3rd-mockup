import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import hero from "../assets/faqhero.png";
import { FiPlus, FiMinus } from "react-icons/fi";
const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  const render = (item) => {
    return (
      <div className="accordion__dropDown">
        <p>{item?.answer}</p>
      </div>
    );
  };
  const Data = [
    {
      id: 1,
      question: "What is the minimum amount required to open an account?",
      answer:
        "There is no minimum to open a new account; however, a $2,000 deposit is required to be considered for margin and options privileges, regardless of any promotional offer.",
    },
    {
      id: 2,
      question: "What is the fastest way to open a new account?",
      answer:
        "Opening an account online is the fastest way to open and fund an account. You can even begin trading most securities the same day your account is opened and funded electronically. We work 24 hours a day, 7 days a week.",
    },
    {
      id: 3,
      question: "Are there restrictions on funds deposited into my account?",
      answer:
        "Funds typically post to your account 1-2 days after we receive your check or electronic deposit. Once the fund`s post, you can trade most securities. Electronic deposits can take another 3-4 business days to clear; checks can take 5-6 business days. Until your deposit clears, we restrict withdrawals and trading off some securities based on market risk. This includes—but isn’t limited to—options and most stocks priced under $5 per share.All electronic deposits are subject to review and may be restricted for 60 days. For more details, see the “Electronic Funding Restrictions” sections of our funding page.",
    },
    {
      id: 4,
      question: "What types of investments can I make with a No Name1 account?",
      answer:
        "No Name 1 offers a comprehensive and diverse selection of investment products. You can trade stocks, options, mutual funds, ETFs, futures, forex, and bonds and CDs in a standard account. Please note that investment choices may vary in less common account types such as Trust accounts, 529 education accounts, and pension plans. Each plan will specify what types of investments are allowed. See Account Types and Investment Products for more information. Yes. As you're completing the Account Application, simply complete the margin and/or options section. We'll review the information, and if appropriate, extend margin and/or options privileges to your account.Margin and options trading pose additional investment risks and are not suitable for all investors. In addition, certain account types may not be eligible for margin, options, or advanced options trading privileges. Please read Characteristics and Risks of Standardized Options, Margin Disclosure Document, Margin Account Handbook, and Day Trading Margin Requirements.",
    },
    {
      id: 5,
      question: "Can I write checks from my account?",
      answer:
        "The stop-loss order and the limit order are the most common risk management tools in Forex trading. A limit order sets a restriction on the minimum price to be received or the maximum price to be paid.An automatic liquidation at a predetermined price for a particular position is called a stop loss. This is used to limit potential losses if the market moves against an investor’s position.",
    },
    {
      id: 6,
      question: "Do I earn interest in my account?",
      answer:
        "Yes. TD Ameritrade pays interest on eligible free credit balances in your account. Simple interest is calculated on the entire daily balance and is credited to your account monthly. This service is subject to the current TD Ameritrade rates and policies, which may change without notice.      ",
    },
    {
      id: 7,
      question: "Is my account protected?",
      answer:
        "If you lose cash or securities from your account due to unauthorized activity, we’ll reimburse you for the cash or shares of securities you lost. We offer you this protection, which adds to the provisions that already govern your account, in case unauthorized activity ever occurs and it was through no fault of your own.",
    },
    {
      id: 8,
      question: "Are there any fees?",
      answer:
        "We believe in fair, straightforward pricing and for you, that means flat-rate $6.95 commissions on every Internet equity trade, regardless of account balance or how many shares you buy; however, you won’t be charged any platform, inactivity, or market data fees. Please review our Commission and Fees for complete details.",
    },
  ];
  return (
    <>
      <Banner img={hero} text="FAQ" />
      <div className="accordion__section">
        <div className="accordion__container">
          {Data.map((item) => {
            return (
              <div key={item.id}>
                <div className="wrap" onClick={() => toggle(item?.id)}>
                  <h1>{item?.question}</h1>
                  <span>{clicked === item?.id ? <FiMinus /> : <FiPlus />}</span>
                </div>
                <hr />
                {clicked === item?.id ? render(item) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
