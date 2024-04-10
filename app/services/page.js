import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";
import Sidebar from "@/layouts/sidebar";
import Link from "next/link";

export const metadata = {
  title: "Services",
};

export default function page() {
  return (
    <Layout>
      <div className="industify_fn_sidebarpage">
        <div className="container">
          <div className="about_section">
            {/* <!-- About Shortcode --> */}
            <div className="fn_cs_about">
              <div className="container">
                <div className="a_inner">
                  <div className="leftpart">
                    <div className="title_holder">
                      <h3 className="title">We are Vortex Construction</h3>
                      <p>
                        Established in 2015 out of a spare bedroom, Vortex
                        Construction has experienced significant growth over the
                        past 9 years. Now headquartered in Richmond, Texas, and
                        serving the entire Greater Houston area, we have become
                        the premier provider of turnkey concrete services in
                        Houston. If you're tired of unfulfilled promises and
                        missed deadlines, Vortex Construction is here to provide
                        you with a dedicated team that ensures deadlines are not
                        only met but exceeded with the highest quality in the
                        industry. With extensive experience in home building
                        prior to specializing in turnkey concrete, we understand
                        what home builders are looking for and deliver work
                        efficiently, setting industry-leading standards for both
                        timeframe and quality. Choose Vortex Construction for
                        reliable, top-notch concrete solutions tailored to meet
                        your needs.
                      </p>
                    </div>
                    <div className="sign_holder">
                      <h3 className="name">The Vortex Team</h3>
                      {/* <p className="occ">Chief Executive</p> */}
                    </div>
                  </div>
                  <div className="rightpart">
                    <div
                      className="r_inner"
                      id="scene"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        className=" "
                        data-depth="0.3"
                        style={{
                          position: "relative",
                          display: "block",
                          left: "0px",
                          top: "0px",
                          transform: "translate3d(21.2782px, -19.0075px, 0px)",
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <img src="img/vortex-logo.png" alt="" />
                      </div>
                      <div
                        className="img_holder layer"
                        data-depth="0.5"
                        style={{
                          position: "absolute",
                          display: "block",
                          left: "0px",
                          top: "0px",
                        }}
                      >
                        <img src="img/vortex-logo.png" alt="" />
                        <div
                          className="abs_img"
                          data-bg-img="img/vortex-logo.png"
                          style={{
                            backgroundImage: "url(img/vortex-logo.png)",
                          }}
                        ></div>
                      </div>
                      {/* <div
                        className="dots layer"
                        data-switch="disable"
                        data-depth="0.9"
                        style={{
                          position: "absolute",
                          display: "block",
                          left: "0px",
                          top: "0px",
                          transform: "translate3d(63.8345px, -57.0226px, 0px)",
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <img src="img/logo.jpg" alt="" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /About Shortcode --> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
