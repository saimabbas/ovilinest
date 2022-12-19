import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/guide.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import GuideBgImg from "../assets/img/guide-bg.png";
import GuideSwooshImg from "../assets/img/guide-swoosh.png";

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
  MdClose,
  MdExpandMore,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Guide = () => {
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
        <p>
          Please Rotate The Screen <MdOutlineRotate90DegreesCcw />{" "}
        </p>
      </div>
      <main className="guide-page">
        <header>
          {isMobHeaderShowing ? (
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
                    <Link to="/guide">
                      <span>GUIDE</span>
                    </Link>
                    <Link to="/faq">FAQ</Link>
                    <Dropdown>
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
                <Link to="/guide">
                  <span>GUIDE</span>
                </Link>
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="header-right">
                <Dropdown>
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
        </header>
        <section className="guide-section">
          <img src={GuideBgImg} alt="" />
          <div className="home-box">
            <div className="guide-content">
              <div className="guide-heading">
                <h1>COMING SOON</h1>
                <span>COMING SOON</span>
              </div>
              <img src={GuideSwooshImg} alt="" />
            </div>
          </div>
        </section>
        <footer>
          <div className="home-box">
            <div className="footer-content">
              <div className="footer-top">
                <span>(주) 용평리조트 대표이사 : 신달순, 임학운</span>
                <div></div>
                <span>
                  주소 : 강원도 평창군 대관령면 올림픽로 715(구 용산리 130)
                </span>
                <div></div>
                <span>제휴문의 ovilinest@yongpyong.co.kr</span>
              </div>
              <p>Copyright 2022 YONGPYONG RESORT All right reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Guide;
