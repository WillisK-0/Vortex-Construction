const background1 = "img/bg-slab1.jpeg";
export default function Home3Principle() {
  return (
    <>
      <div
        className="fn_cs_principles"
        // style={{ backgroundImage: `url(${background1})` }}
      >
        <div className="container ">
          <div className="inner">
            <div className="left_part">
              <div className="masonry_in">
                <div className="item">
                  <div class="title_holder">
                    <h3>Our Guiding Principles</h3>
                    <p>
                      Discover the cornerstone principles that define our
                      exceptional concrete services:
                    </p>
                    <p>
                      When you choose us, you can expect excellence in every
                      aspect of your project. Let us show you why we stand out
                      from the rest.
                    </p>
                  </div>
                  <div class="number_holder">01</div>
                </div>
              </div>
            </div>
            <div className="right_part">
              <ul className="masonry">
                <li className="masonry_in">
                  <div className="item">
                    <div class="title_holder">
                      <h3>Speed</h3>
                      <p>
                        Industry-leading efficiency with swift concrete pouring
                        services. Quality results in record time.
                      </p>
                    </div>
                    <div class="number_holder">01</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div class="title_holder">
                      <h3>Quality</h3>
                      <p>
                        Top-notch materials for durable concrete structures that
                        exceed expectations.
                      </p>
                    </div>
                    <div class="number_holder">02</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div class="title_holder">
                      <h3>Communication</h3>
                      <p>
                        Dedicated team for smooth progress and constant support.
                        Stay informed and involved every step of the way.
                      </p>
                    </div>
                    <div class="number_holder">03</div>
                  </div>
                </li>
                <li className="masonry_in">
                  <div className="item">
                    <div class="title_holder">
                      <h3>Superior Service</h3>
                      <p>
                        Experience unmatched dedication and expertise. Your
                        project deserves the best.
                      </p>
                    </div>
                    <div class="number_holder">04</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
