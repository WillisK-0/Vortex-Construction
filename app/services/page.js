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
              <div>
                <div className="title_holder">
                  <div style={{ textAlign: "center" }}>
                    <h2 className="title">We Are Vortex Construction</h2>
                  </div>

                  <p>
                    Established in 2015 out of a spare bedroom, Vortex
                    Construction has experienced significant growth over the
                    past 9 years. Now headquartered in Richmond, Texas, and
                    serving the entire Greater Houston area, we have become the
                    premier provider of turnkey concrete services in Houston. If
                    you're tired of unfulfilled promises and missed deadlines,
                    Vortex Construction is here to provide you with a dedicated
                    team that ensures deadlines are not only met but exceeded
                    with the highest quality in the industry. With extensive
                    experience in home building prior to specializing in turnkey
                    concrete, we understand what home builders are looking for
                    and deliver work efficiently, setting industry-leading
                    standards for both timeframe and quality. Choose Vortex
                    Construction for reliable, top-notch concrete solutions
                    tailored to meet your needs.
                  </p>
                </div>
                {/* <div className="sign_holder">
                  <h3 className="name">The Vortex Team</h3>
                </div> */}
              </div>
              <div style={{ marginTop: "60px" }}>
                <img src="img/AboutUS.jpg" alt="" />
              </div>
            </div>
            {/* <!-- /About Shortcode --> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
