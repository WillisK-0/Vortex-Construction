import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Principles",
};

export default function page() {
  return (
    <Layout>
      <Breadcumb firstChild={"Principles"} />
      <div className="industify_fn_principles">
        <div className="container">
          <div className="principles">
            <ul>
              <li>
                <div className="item" id="Honesty">
                  <div className="item_left">
                    <h2>01.</h2>
                    <h3>Speed</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      At our company, we pride ourselves on setting the industry
                      standard for swift concrete pouring
                    </p>
                    <p>
                      services. Our streamlined processes and efficient team
                      ensure that your project is completed within{" "}
                    </p>
                    <p>
                      an unbeatable timeframe, without compromising on quality.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item" id="Passion">
                  <div className="item_left">
                    <h2>02.</h2>
                    <h3>Quality</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      When you choose us, you can rest assured that only the
                      highest quality materials will be used for
                    </p>
                    <p>
                      your project. We believe in delivering superior results
                      that stand the test of time, providing you with
                    </p>
                    <p>
                      durable and reliable concrete structures that exceed your
                      expectations.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item" id="Quality">
                  <div className="item_left">
                    <h2>03.</h2>
                    <h3>Communication</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      Communication is key in any successful project, and our
                      dedicated team is always ready to provide you with the
                      support and information you need. Whether you have
                      questions, concerns, or simply
                    </p>
                    <p>
                      want updates on the progress of your project, our team is
                      here to ensure that you are always
                    </p>
                    <p>informed and involved every step of the way.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h2>04.</h2>
                    <h3>Superior Service</h3>
                  </div>
                  <div className="item_right">
                    <p>
                      With a wealth of experience in homebuilding and concrete
                      work, our office and field teams are dedicated to
                      delivering unmatched service that goes above and beyond.
                      From start to finish, we are
                    </p>
                    <p>
                      committed to blowing your expectations out of the water
                      and maintaining a clear path of workflow, ensuring that
                      your project is completed to the highest standards of
                      quality and craftsmanship. Get
                    </p>
                    <p>
                      ready to experience the difference that our expertise and
                      dedication can make for your project.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
