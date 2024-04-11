"use client";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";
import { Location } from "@/public/svg/icon";
import Link from "next/link";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { Facebook, Instagram } from "../../public/svg/social/IconSocial";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " " + value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      emailjs
        .send(
          "service_dtrz0lj",
          "template_ticaovg",
          formData,
          "iISJAM_KqqLYymFAE"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setFormData({ name: "", email: "", message: "" });
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
            }, 3000);
          },
          (error) => {
            console.log("FAILED...", error);
            setErrors(true);
          }
        );
    } else {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="industify_fn_contact">
        <div className="container">
          <div className="contact_in">
            <div className="map_holder">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=4018%skinner%20lane,%20Richmond,%20Texas+(Vortex%20Construction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>

            <div className="contact_holder">
              <div className="contact_left">
                <h3>Get in touch with us</h3>
                <form className="contact_form" autoComplete="off">
                  {/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

                  <div
                    className="success"
                    data-success="Your message has been received, we will contact you soon."
                  ></div>
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  {/*  */}
                  <div className="items">
                    <div className="item">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="item">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="item">
                      <textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleChange(e)}
                      ></textarea>
                    </div>
                    <div className="item">
                      <button
                        href="#"
                        type="submit"
                        onClick={(e) => sendEmail(e)}
                        style={{
                          display: "inlineBlock",
                          height: "44px",
                          lineHeight: "44px",
                          padding: "0 20px",
                          backgroundColor: "#d24e1a",
                          color: "#fff",
                          border: "none",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "#72290c";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "#d24e1a";
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {showSuccess ? (
                <div
                  style={{
                    position: "fixed", // Makes the toast float over content
                    bottom: "20px", // 20px from the bottom
                    left: "20px", // 20px from the right
                    backgroundColor: "#4CAF50", // Green background
                    color: "white", // Text color
                    padding: "10px", // Padding inside the toast
                    borderRadius: "5px", // Rounded corners
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)", // A subtle shadow
                    zIndex: 1000, // Ensure it's on top of other elements
                    transition: "opacity 0.5s", // Fade effect for the toast
                    opacity: showSuccess ? 1 : 0, // Handle the visibility
                  }}
                >
                  Success! We will reach out to you shortly!
                </div>
              ) : null}
              {errors ? (
                <div
                  style={{
                    position: "fixed",
                    bottom: "230px",
                    left: "100px",
                    backgroundColor: "#f44336",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    zIndex: 1000,
                    transition: "opacity 0.5s",
                  }}
                >
                  Please fill out all required fields
                </div>
              ) : null}

              {/* <div className="contact_left">
                <h3>Get in touch with us</h3>
                <form
                  className="contact_form"
                  // action={(e) => sendEmail(e)}
                  onSubmit={sendEmail}
                  method="post"
                  autoComplete="off"
                  data-email="williskeith04@gmail.com"
                >
                  {/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

              {/* <div
                    className="success"
                    data-success="Your message has been received, we will contact you soon."
                  ></div>
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  
                  <div className="items">
                    <div className="item">
                      <input id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="item">
                      <input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="item">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="item">
                      <button
                        type="submit"
                        // onClick={(e) => sendEmail(e)}
                        id="send_message"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                </div> */}
              <div className="contact_right">
                <div className="fn_cs_location_list">
                  <ul className="list">
                    <li className="location_item">
                      <div className="item">
                        <div className="title_holder">
                          <span className="icon_wrapper">
                            <span className="icon">
                              <Location className="fn__svg" />
                            </span>
                            <span className="shape"></span>
                          </span>
                          <h3>Richmond Office</h3>
                        </div>
                        <div className="content_holder">
                          <ul>
                            <li>4018 Skinner Lane Richmond Texas 77406</li>
                            <li>Phone: +1 32-899-5970 </li>
                            <li>
                              Email:{" "}
                              <Link href="mailto:w.industify@gmail.com">
                                Stone@vortexconstructiontx.com
                              </Link>
                            </li>
                            <div className="industify_fn_social_list">
                              <ul>
                                <li>
                                  <Link
                                    href="https://www.facebook.com/vortexconstruction/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <Facebook className="fn__svg" />
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="https://www.instagram.com/vortex.construction/"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <Instagram className="fn__svg" />
                                  </Link>
                                </li>

                                {/* <li>
                  <Link href="#" target="_blank" rel="noreferrer">
                    <Linkedin className="fn__svg" />
                  </Link>
                </li> */}
                              </ul>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="location_item">
                      <div style={{ width: "100%" }}>
                        <img src="/img/word-logo.png" alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
