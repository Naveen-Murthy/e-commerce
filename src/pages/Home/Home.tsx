import React, { FC } from "react";
import "./Home.scss";
import Assets from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <React.Fragment>
    <section className="home_section">
      <video src={Assets.homeVideo} className="bg_video" autoPlay muted loop />
      <div className="headings">
        <h6>Description</h6>
        <h1>
          <span>Welcomes</span> You
        </h1>
        <button className="button_styles">Descover More</button>
      </div>
    </section>
    <section className="features">
      <div className="feature">
        <div className="feature_heading">
          <FontAwesomeIcon icon="book" />
          <h4>All Cources</h4>
        </div>
      </div>
      <div className="feature">
        <div className="feature_heading">
          <FontAwesomeIcon icon="landmark" />
          <h4>Virtual Class</h4>
        </div>
      </div>
      <div className="feature">
        <div className="feature_heading">
          <FontAwesomeIcon icon={["far", "handshake"]} />
          <h4>Real Meeting</h4>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Home;
