import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Working Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                {/* All */}
                <Tab>Web</Tab>
                {/* For Print */}
                <Tab>Print</Tab>
                {/* For Web */}
              </TabList>
              {/* END TABLIST */}

              <div className="list_wrapper">
                <TabPanel>
                  {" "}
                  {/* All */}
                  <ul className="portfolio_list">
                    <SRLWrapper></SRLWrapper>

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Ave Simone</h3>
                          <span> Details</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel>
                  {" "}
                  {/* Web */}
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/superherolanding.png"
                            alt="Details"
                            onClick={toggleModalThree}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Superhero Landing Page</h3>
                          <span>Details</span>
                        </div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/7.jpg"
                            alt="Details"
                            onClick={toggleModalFour}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Password Generator</h3>
                          <span>Details</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </TabPanel>

                <TabPanel>
                  {" "}
                  {/* Print */}
                  <ul className="portfolio_list">
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/heraldcoverpage.jpg"
                            alt="Details"
                            onClick={toggleModalFive}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>Herald Ad Campaign</h3>
                          <span>Advertising</span>
                        </div>
                      </div>
                    </li>
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/view.jpg"
                            alt="Details"
                            onClick={toggleModalSix}
                          />
                        </div>
                        <div className="mobile_title">
                          <h3>View From the Hill</h3>
                          <span>Layout</span>
                        </div>
                      </div>
                    </li>
                    <SRLWrapper>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/tea.png">
                              <img
                                src="assets/img/portfolio/tea.png"
                                alt="Tea Overlay"
                              />
                            </a>
                            <a href="assets/img/portfolio/teabox.jpg">
                              <img
                                src="assets/img/portfolio/teabox.jpg"
                                alt="Box Of Tea"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Quetzalcoatl Tea</h3>
                            <span>Branding</span>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/bgoslogos.png">
                              <img
                                src="assets/img/portfolio/bgoslogos.png"
                                alt="BGOnStage Logos for various productions"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Production Logos</h3>
                              <span>Logos</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </SRLWrapper>
                  </ul>
                </TabPanel>


              </div>
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      /> */}
      {/* End Youtube Modal video */}
      {/* <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      /> */}
      {/* End Vimeo Modal Video */}

      {/* -------------------------------------------START MODAL 3 FOR PORTFOLIO DETAILS------------------------------------------- */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/portfolio/superherolanding.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/superherolanding.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Super Hero Landing Page</h3>
                <span>First html+css layout </span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    For an assignment to make a landing page, what better landing page than a "super hero" landing page?
                  </p>
                  <p>
                    {/* Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate. */}
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Classwork</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Web Design</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>September 16, 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/superherolanding2.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/superherolanding3.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* -------------------------------------------END MODAL 3 FOR PORTFOLIO DETAILS------------------------------------------- */}

      {/* -------------------------------------------START MODAL 4 FOR PORTFOLIO DETAILS------------------------------------------- */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Password Generator</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    This project was a Password Generator made in html, css and javascript.
                    <br/>
                    [file upload here]
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Sellf - Code Along</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Web App</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>Oct 15, 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* -------------------------------------------END MODAL 4 FOR PORTFOLIO DETAILS------------------------------------------- */}

      {/* -------------------------------------------START MODAL 5 FOR PORTFOLIO DETAILS------------------------------------------- */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/herald4.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Herald Ad Campaign</h3>
                <span>Advertising</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    As the creative director of the College Heights Herald, the student run newspaper of Western Kentucky University, I took it upon myself to craft and run an
                    ad campaign that showed off more of the human, student side of the student newspaper. This Ad Campaign won 2nd place nationally at the CMBAM (College Media Business and Advertising Managers) Conference.

                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Student Work</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Advertising</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>november 05, 2013</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
              <SRLWrapper>
              <div className="additional_images">
                <ul className="gallery_zoom">
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="assets/img/portfolio/herald4.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/herald4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/herald2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  {/* <li>
                    <div className="list_inner">
                    <div className="my_image">
                    <img src="img/thumbs/4-2.jpg" alt="thumb" />
                    <div
                    className="main"
                    style={{
                      backgroundImage: "url(assets/img/portfolio/4.jpg)",
                    }}
                    ></div>
                    </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                </ul>
              </div>
                  </SRLWrapper>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* -------------------------------------------END MODAL 5 FOR PORTFOLIO DETAILS------------------------------------------- */}
      {/* -------------------------------------------START MODAL 6 FOR PORTFOLIO DETAILS------------------------------------------- */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/voh2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>View of the Hill</h3>
                <span>Magazine</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    As the Creative Director of the College Heights Herald, I Took over the design and layout of the "View of the Hill," a magazine sent off to incoming freshmen
                    that previews the stories and people currently inhabiting the campus of Western Kentucky University. Being the only designer on a 64 page magazine style book was
                    the best learning experience that I could have wished for.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* -------------------------------------------END MODAL 6 FOR PORTFOLIO DETAILS------------------------------------------- */}
    </>
  );
};

export default Portfolio;
