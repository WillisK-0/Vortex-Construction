/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home3Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fn_cs_hero_header">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "800px",
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/933918789?autoplay=1&loop=1&autopause=0&muted=1&title=0&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 1000,
              height: "100%",
              padding: "15px",
            }}
          >
            <div className="title_holder">
              <div
                style={{
                  //   backgroundColor: "#090e2c",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <img
                  className="desktop_logo"
                  src="/img/word-logo.png"
                  alt="Industry HTML Template"
                  style={{ width: "750px" }}
                />

                {/* <h1>Vortex Construction</h1> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div
            className="o_img"
            style={{ background: `url(${headerBG})` }}
          ></div> */}
        {/* <img
            // className="desktop_logo"
            src="/img/video/landingVid.mp4"
            alt="Industry HTML Template"
          /> */}
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
