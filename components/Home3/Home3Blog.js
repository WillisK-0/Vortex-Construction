import Link from "next/link";

const blog_bg = "img/blog/map.png";
const blog_bg1 = "img/DJI_00159.jpg";
const blog_bg2 = "img/DJI_00199.jpg";
const blog_bg3 = "img/DJI_00155.jpg";

export default function Home3Blog() {
  return (
    <>
      <div className="blog_section">
        <div
          className="overlay"
          style={{ backgroundImage: `url(${blog_bg})` }}
        ></div>

        {/* <!-- Main Title --> */}
        <div className="fn_cs_main_title">
          <div className="container">
            <div className="title_holder">
              <h3>Find Our Most Recent Work</h3>
            </div>
          </div>
        </div>
        {/* <!-- /Main Title --> */}

        {/* <!-- Triple Blog Modern Shortcode --> */}
        <div className="fn_cs_triple_blog_modern fn_alpha">
          <div className="container">
            <div className="inner">
              <ul>
                <li>
                  <div className="item">
                    <div
                      className="img_holder"
                      style={{ backgroundImage: `url(${blog_bg1})` }}
                    >
                      <img src="img/DJI_00146.jpg" alt="" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div
                      className="img_holder"
                      style={{ backgroundImage: `url(${blog_bg2})` }}
                    >
                      <img src="img/DJI_00149.jpg" alt="" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div
                      className="img_holder"
                      style={{ backgroundImage: `url(${blog_bg3})` }}
                    >
                      <img src="img/DJI_00155.jpg" alt="" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Triple Blog Modern Shortcode --> */}
      </div>
    </>
  );
}
