import React from "react";
import Banner from "../Components/Banner";
import hero from "../assets/aboutHero.png";
import contact from "../assets/contact.png";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
const About = () => {
  return (
    <>
      <Banner img={hero} text="About Us" />
      <section className="about">
        <div className="about__wrapper">
          <div className="about__info">
            <div className="about__info-1">
              <p>
                No Name 1 was launched a few years back with a unique vision to
                provide unparalleled advanced trading conditions, advanced
                education, and state-of-the-art trading tools in the Trading
                industry. Due to the continuous focus on localizing our products
                and services to suit each market, together with our successful
                collaboration with talented and experienced teams from all over
                the world. No Name 1 was quickly established as the global
                trademark it is today.
              </p>
              <p>
                Our number one mission is centered on time. By valuing time and
                understanding the importance of efficiency in the fluctuating,
                lightning-fast world of financial markets, every decision we
                make is designed to ensure that our clients and business
                partners, as well as our team of professionals, invest their
                time wisely.{" "}
              </p>
            </div>
            <div className="about__info-2">
              <p>
                This road is paved by an ironclad focus on educating our
                customers. Knowledge is power, and empowering traders to get the
                best value for their investments is our passion.
              </p>
              <p>
                At No Name 1 we are committed to making sure all our clients and
                investors stay connected to the various opportunities that arise
                in the market on a daily basis and ease in connecting with one
                another. With No Name 1 has your financial stockbroker you are
                sure to get all the professional backing and support you require
                to soar in Crypto trading.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact__content">
          <div className="contact__content-info">
            <div className="contact__content-info__heading">
              <h2>Contact Us:</h2>
              <hr />
            </div>
            <div className="contact__content-info-single">
              <AiOutlineMail />
              <h4>Email: support@noname1.com</h4>
            </div>
            <div className="contact__content-info-single">
              <AiOutlineClockCircle />
              <h4>Working hours: Monday to Friday: 9:30-21:00 GMT</h4>
            </div>
            <div className="contact__content-info-single">
              <BiPhoneCall />
              <h4>Telephone number: +44123456789</h4>
            </div>
            <div className="contact__content-info-single">
              <IoLocationSharp />
              <h4>Location: 78 Guild Rd, London SE7 8HW </h4>
            </div>
          </div>
          <div className="contact__content-img">
            <img src={contact} alt="contactImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;