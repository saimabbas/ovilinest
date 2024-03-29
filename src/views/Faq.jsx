import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/faq.css";

// Images & Videos
import RotationImg from "../assets/img/rotation.gif";
import RotationImgBG from "../assets/img/nest-shape-1.png";
import Logo1 from "../assets/img/logo-1.png";
import FaqBgImg from "../assets/img/faq-bg.png";
import FAQArrowImg from "../assets/img/faq-arrow.png";

// Components

import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import $ from "jquery";
import { Dropdown, Accordion } from "react-bootstrap";
import {
  MdKeyboardArrowDown,
  MdMenu,
  MdOutlineRotate90DegreesCcw,
  MdClose,
  MdExpandMore,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Faq = () => {
  const [isMobHeaderShowing, setIsMobHeaderShowing] = useState(false);
  useEffect(() => {
    $(window).on("load", function () {
      gsap.fromTo(
        ".home-page",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.15,
          delay: 0.5,
        }
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="rotate-screen">
        <img src={RotationImgBG} alt="" />
        <p>화면을 돌려주세요.</p>
        <img src={RotationImg} alt="RotationImg" />
      </div>
      <main className="faq-page">
        {/* <header>
          {isMobHeaderShowing ? (
            <div className="header-mob-box">
              <div
                onClick={() => {
                  setIsMobHeaderShowing(false);
                }}
                className="header-bg-close"
              ></div>
              <div className="header-mob">
                <div className="header-mob-head">
                  <div className="home-box">
                    <div className="hmh-content">
                      <div
                        onClick={() => {
                          setIsMobHeaderShowing(false);
                        }}
                        className="header-mob-menu-icon"
                      >
                        <MdClose />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-mob-body">
                  <div className="home-box">
                    <div className="hmb-content">
                      <Link to="/world">WORLD</Link>
                      <Link to="/journeymap">JOURNEY MAP</Link>
                      <Link to="/utility">Utility</Link>
                      <Link to="/nest">NEST</Link>
                      <Link to="/guide">GUIDE</Link>
                      <Link to="/faq">
                        <span>FAQ</span>
                      </Link>
                      <Dropdown variant="danger">
                        <Dropdown.Toggle>
                          Link <MdKeyboardArrowDown />{" "}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="https://www.yongpyong.co.kr/"
                            target={"_blank"}
                          >
                            YongPyong
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="https://www.youtube.com/@user-vr9uv2nn5b/featured"
                            target={"_blank"}
                          >
                            YouTube
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="home-box">
            <div className="header-content">
              <div className="header-left">
                <Link to="/">
                  <img src={Logo1} alt="Logo1" />
                </Link>
                <Link to="/world">WORLD</Link>
                <Link to="/journeymap">JOURNEY MAP</Link>
                <Link to="/utility">Utility</Link>
                <Link to="/nest">NEST</Link>
                <div></div>
                <Link to="/guide">GUIDE</Link>
                <Link to="/faq">
                  <span>FAQ</span>
                </Link>
              </div>
              <div className="header-right">
                <Dropdown variant="danger">
                  <Dropdown.Toggle>
                    Link <MdKeyboardArrowDown />{" "}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="https://www.yongpyong.co.kr/"
                      target={"_blank"}
                    >
                      YongPyong
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.youtube.com/@user-vr9uv2nn5b/featured"
                      target={"_blank"}
                    >
                      YouTube
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div
                  onClick={() => {
                    setIsMobHeaderShowing(true);
                  }}
                  className="header-mob-menu-icon"
                >
                  <MdMenu />
                </div>
              </div>
            </div>
          </div>
        </header> */}
        <Header isFaqActive={true} />
        <section className="faq-section">
          <img src={FaqBgImg} alt="FaqBgImg" />
          <div className="home-box">
            <div className="faq-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>FAQ</h3>
                    <span></span>
                  </div>
                </div>
                <p>무엇이든 물어보세요</p>
              </div>
              <div className="faq-container">
                <Accordion>
                  <div className="acc-item-border-box">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h5>오빌리 NFT는 어떤 블록체인을 이용하나요?</h5>
                        <img src={FAQArrowImg} alt="FAQArrowImg" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          {" "}
                          오빌리 네스트는 클레이튼(Klaytn) 블록체인을
                          이용합니다.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="acc-item-border-box">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <h5> 민팅 시 어떤 지갑을 이용하나요?</h5>
                        <img src={FAQArrowImg} alt="FAQArrowImg" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          오빌리 네스트는 카이카스(Kaikas) 또는 클립(Klip)
                          지갑을 이용하시면 됩니다.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="acc-item-border-box">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <h5>2차 판매 로열티가 있나요?</h5>
                        <img src={FAQArrowImg} alt="FAQArrowImg" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>2차 판매 로열티는 7.5% 입니다.</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="acc-item-border-box">
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        <h5>저작권을 활용할 수 있나요?</h5>
                        <img src={FAQArrowImg} alt="FAQArrowImg" />
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          오빌리 네스트와 관련된 작품에 대하여 임의 변형 및 2차
                          창작 그리고 상업적 이용을 불허 합니다. NFT 소지자는 각
                          작품에 대한 소유권만 인정 됩니다
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Faq;
