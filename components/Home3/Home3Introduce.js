"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home3Introduce() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="fn_cs_introduce_wrap fn_cs_lightgallery"
        data-url-show="yes"
        data-wing-switch="enable"
      >
        <div className="container">
          <div className="fn_cs_introduce">
            <span className="wing11"></span>
            <span className="wing12"></span>
            <span className="wing21"></span>
            <span className="wing22"></span>
            {/* <span
              className="video lightbox"
              onClick={() => setIsOpen(true)}
            ></span> */}
            <div className="o_color"></div>

            <div className="content_holder">
              <div className="title_holder">
                <h5>Let Me Introduce</h5>
                <h3>Our Company</h3>
                <p>
                  Welcome to Vortex Construction - Your Premier Choice for
                  Turnkey Concrete Solutions in the Greater Houston Area! For
                  over 9 years, Vortex Construction has set the standard as a
                  leading provider of turnkey concrete services in Houston. With
                  a wealth of experience totaling over 100 years in the Houston
                  construction industry, we are dedicated to delivering
                  exceptional customer service, rapid project turnaround times,
                  and clear communication to guarantee your satisfaction.
                </p>
              </div>
              <div className="badge_holder">
                <div className="title">
                  <h3 style={{ margin: "0px" }}>
                    Texas&apos;s Leading Concrete company
                  </h3>
                </div>
                <div className="content">
                  <span className="year" style={{ fontSize: "50px" }}>
                    100+
                  </span>
                  <span>years of combined experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="3j3SQEUfREs"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      /> */}
    </>
  );
}
