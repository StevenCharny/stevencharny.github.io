import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Steven Charny - Designer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hey there, I am a creative graphic and web designer looking for my
                next big problems to solve. While I love puzzles, nothing is more
                satisfying than creating beautiful, visual solutions with others.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>10.04.1991
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>30
                  </p>
                </li>
                <li>
                  <p>
                    <span>Location:</span>Bowling Green, KY
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:steven@charny.co">steven@charny.co</a>
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+77 022 177 05 05</a>
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Study:</span>Western Kentucky University
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Graphic Design</span>
                        <span className="number">Web Design</span>
                      </span>
                      {/* <div className="background"> */}
                        {/* <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div> */}
                      {/* </div> */}
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Web Development</span>
                        <span className="number">Branding</span>
                      </span>
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Photography</span>
                        <span className="number">Communication</span>
                      </span>
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Interests</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Art</span>
                        <span className="number">Video Games</span>
                      </span>
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Mechanial Keyboards</span>
                        <span className="number">Philosophy</span>
                      </span>
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Cooking</span>
                        <span className="number">Dungeons & Dragons</span>
                      </span>
                      {/* <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}

                      <br />
                      


              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>1</h3>
                      <span>Adorable Child</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Cups of Coffee</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>17</h3>
                      <span>Lucky Number</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
