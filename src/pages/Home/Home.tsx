import React, { FC, useState } from "react";
import "./Home.scss";
import Assets from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyUsTabs } from "../../utils/homeTabsContent";

function Home() {
  const [isActive, setIsActive] = useState(0);
  const [content, setContent] = useState(whyUsTabs[0]);
  const handleClick = (index: number, event: any) => {
    setIsActive(index);
    setContent(event);
  };
  return (
    <React.Fragment>
      <section className="home_section">
        <video
          src={Assets.homeVideo}
          className="bg_video"
          autoPlay
          muted
          loop
        />
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
      <section className="why_us">
        <div className="section_heading">
          <h5>Why us?</h5>
        </div>
        <div className="tabs_section">
          <div className="tabs">
            {whyUsTabs.map((item, index) => (
              <p
                className={`tab_name ${index === isActive ? "active" : ""}`}
                key={item.id}
                onClick={() => handleClick(index, item)}
              >
                {item.title}
              </p>
            ))}
          </div>
          <div className="tabs_content main_section">
            <div className="image_block">
              <img src={`${content.content.image}`} alt="" />
            </div>
            <div className="tabs_content-text">
              <h2>{content.title}</h2>
              <p>{content.content.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="countdown_section">
        <div className="main_section">
          <div className="counter_section">
            <h2>
              Take <span>any online course</span> and win $326 for your next
              class
            </h2>
            <div className="counter_block">
              <div className="counter">
                <div className="counter_value">153</div>
                <div className="counter_label">Days</div>
              </div>
              <div className="counter">
                <div className="counter_value">11</div>
                <div className="counter_label">Hours</div>
              </div>
              <div className="counter">
                <div className="counter_value">31</div>
                <div className="counter_label">Minutes</div>
              </div>
              <div className="counter">
                <div className="counter_value">18</div>
                <div className="counter_label">Seconds</div>
              </div>
            </div>
          </div>
          <div className="form_section">
            <div className="form_heading">
              <p>
                Register your free account and <strong>get immediate</strong>{" "}
                access to online courses
              </p>
            </div>
            <div className="form_fields"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
