"use client";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";
import { Location } from "@/public/svg/icon";
import Link from "next/link";
import emailjs from "emailjs-com";
// export const metadata = {
//   title: "Contact",
// };

export default function page() {
  const sendEmail = (e) => {
    e.preventDefault();

    const obj = {
      name: e.target[0].value,
      email: e.target[1].value,
      body: e.target[2].value,
    };

    emailjs
      .send("service_ipykcdj", "template_80df9el", obj, "LUn-OOyzVZhl5hQWp")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
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
              </div>
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
}
