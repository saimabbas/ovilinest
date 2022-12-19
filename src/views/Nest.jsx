import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/nest.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import NestImg1Color from "../assets/img/nest-img-1-color.png";
import NestImg2Color from "../assets/img/nest-img-2-color.png";
import NestImg3Color from "../assets/img/nest-img-3-color.png";
import NestImg4Color from "../assets/img/nest-img-4-color.png";
import NestImg1Dull from "../assets/img/nest-img-1-dull.png";
import NestImg2Dull from "../assets/img/nest-img-2-dull.png";
import NestImg3Dull from "../assets/img/nest-img-3-dull.png";
import NestImg4Dull from "../assets/img/nest-img-4-dull.png";
import NCSwooshImg from "../assets/img/nest-card-swoosh.png";
import NBSwooshImg from "../assets/img/nest-bottom-swoosh.png";
import NSImg1 from "../assets/img/nest-shape-1.png";
import NSImg2 from "../assets/img/nest-shape-2.png";
import NSImg3 from "../assets/img/nest-shape-3.png";
import NSImg4 from "../assets/img/nest-shape-4.png";
import NSImg5 from "../assets/img/nest-shape-5.png";

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
  MdOutlineRotate90DegreesCcw,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Nest = () => {
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
          화면을 돌려주세요. <MdOutlineRotate90DegreesCcw />{" "}
        </p>
      </div>
      <main className="nest-page">
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
                    <Link to="/nest">
                      <span>NEST</span>
                    </Link>
                    <Link to="/guide">GUIDE</Link>
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
                <Link to="/nest">
                  <span>NEST</span>
                </Link>
                <div></div>
                <Link to="/guide">GUIDE</Link>
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
        <section className="nest-section">
          <div className="home-box nest-img-box">
            <img className="nsimg-1" src={NSImg1} alt="nest img" />
            <img className="nsimg-2" src={NSImg2} alt="nest img" />
            <img className="nsimg-3" src={NSImg3} alt="nest img" />
            <img className="nsimg-4" src={NSImg4} alt="nest img" />
            <img className="nsimg-5" src={NSImg5} alt="nest img" />
            <div className="nest-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>Nest</h3>
                    <span></span>
                  </div>
                </div>
                <p>
                  빌리언즈를 위해 새로이 준비한 특별한 객실, 네스트(Nest)
                  입니다. 네스트(Nest)는 4개 지역을 시작으로 계속 오픈 될 예정
                  입니다. 빌리언즈에게는 네스트(Nest)에 대한 우선 예약 권한이
                  제공됩니다.
                </p>
              </div>
              <div className="nest-grid">
                <div className="nest-grid-card">
                  <img
                    src={NestImg1Color}
                    alt="NestImg"
                    className="color-img"
                  />
                  <img src={NestImg1Dull} alt="NestImg" className="dull-img" />
                  <p>강원도 평창, 용평리조트 타워콘도</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>스키장을 발아래 둔, 높은 만큼 멋진 뷰</h6>
                </div>
                <div className="nest-grid-card">
                  <img
                    src={NestImg2Color}
                    alt="NestImg"
                    className="color-img"
                  />
                  <img src={NestImg2Dull} alt="NestImg" className="dull-img" />
                  <p>충남 보령, 비체팰리스</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>들어서면 모래사장 서해를 가장 잘 즐길 수 있는 곳</h6>
                </div>
                <div className="nest-grid-card">
                  <img
                    src={NestImg3Color}
                    alt="NestImg"
                    className="color-img"
                  />
                  <img src={NestImg3Dull} alt="NestImg" className="dull-img" />
                  <p>강원도 고성, 파인리즈리조트</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>
                    페어웨이, 그린이 침대 바로 옆 <br />
                    1년 내내 초록이 느껴지는 곳
                  </h6>
                </div>
                <div className="nest-grid-card">
                  <img
                    src={NestImg4Color}
                    alt="NestImg"
                    className="color-img"
                  />
                  <img src={NestImg4Dull} alt="NestImg" className="dull-img" />
                  <p>전남 여수, 디오션 리조트</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>
                    바다 위의 리조트라 불리는 <br />
                    계속 바다, 바다, 바다가 펼쳐지는 곳
                  </h6>
                </div>
              </div>
              <div className="nest-bottom">
                <img src={NBSwooshImg} alt="" />
                <h5>계속 우리만의 둥지를 틉니다.</h5>
                <img src={NBSwooshImg} alt="" />
                <p>COMING SOON</p>
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

export default Nest;
