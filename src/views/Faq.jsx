import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/faq.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import FaqBgImg from "../assets/img/faq-bg.png";
import Ovideo from "../assets/videos/o.mp4";
import Vvideo from "../assets/videos/v.mp4";
import I1video from "../assets/videos/i1.mp4";
import Lvideo from "../assets/videos/l.mp4";
import I2video from "../assets/videos/i2.mp4";
import NESTvideo from "../assets/videos/nest.mp4";

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
  MdCancel,
  MdExpandMore,
} from "react-icons/md";

const Faq = () => {
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
      <main className="faq-page">
        <header>
          <div className="home-box">
            <div className="header-content">
              <div className="header-left">
                <img src={Logo1} alt="Logo1" />
                <a href="#">WORLD</a>
                <a href="#">JOURNEY MAP</a>
                <a href="#">UTLITY</a>
                <a href="#">NEST</a>
                <div></div>
                <a href="#">GUIDE</a>
                <a href="#">FAQ</a>
              </div>
              <div className="header-right">
                <Dropdown>
                  <Dropdown.Toggle>
                    Link <MdKeyboardArrowDown />{" "}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://drive.google.com/drive/YoungPyung ">
                      YongPyong
                    </Dropdown.Item>
                    <Dropdown.Item href="https://drive.google.com/drive/YoungPyung ">
                      YouTube
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="header-mob-menu-icon">
                  <MdMenu />
                </div>
              </div>
            </div>
          </div>
        </header>
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
                <Accordion defaultActiveKey="0">
                  <div className="acc-item-border-box">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h5>오빌리 NFT는 어떤 블록체인을 이용하나요?</h5>
                        <MdExpandMore />
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
                        <h5>오빌리 NFT는 어떤 블록체인을 이용하나요?</h5>
                        <MdExpandMore />
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
                        <h5>오빌리 NFT는 어떤 블록체인을 이용하나요?</h5>
                        <MdExpandMore />
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
                        <h5>오빌리 NFT는 어떤 블록체인을 이용하나요?</h5>
                        <MdExpandMore />
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
                </Accordion>
              </div>
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

export default Faq;
