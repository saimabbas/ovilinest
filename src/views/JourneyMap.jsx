import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/faq.css";
import "../styles/utility.css";
import "../styles/journeymap.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import CBImg1 from "../assets/img/common-benefits-img-1.png";
import CBImg2 from "../assets/img/common-benefits-img-2.png";

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

const JourneyMap = () => {
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

    gsap.fromTo(
      ".map-card",
      {
        opacity: 0,
        y: "5rem",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.15,
        stagger: {
          each: 0.2,
        },
      }
    );
  }, []);

  return (
    <div className="app">
      <div className="rotate-screen">
        <p>
          화면을 돌려주세요. <MdOutlineRotate90DegreesCcw />{" "}
        </p>
      </div>
      <main className="map-page">
        <header>
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
                      <Link to="/journeymap">
                        <span>JOURNEY MAP</span>
                      </Link>
                      <Link to="/utility">Utility</Link>
                      <Link to="/nest">NEST</Link>
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
            </div>
          ) : null}

          <div className="home-box">
            <div className="header-content">
              <div className="header-left">
                <Link to="/">
                  <img src={Logo1} alt="Logo1" />
                </Link>
                <Link to="/world">WORLD</Link>
                <Link to="/journeymap">
                  <span>JOURNEY MAP</span>
                </Link>
                <Link to="/utility">Utility</Link>
                <Link to="/nest">NEST</Link>
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
        <section className="map-section">
          <div className="home-box">
            <div className="map-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>Journey Map</h3>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="map-grid">
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>O</span>pening <i>(첫둥지)</i>
                    </h5>
                    <p>우리가 궁금해? </p>
                    <p>우리 친구할까?</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          첫번째 네스트 오픈 <br />
                          (전용 프리미엄 객실)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span className="complete">COMPLETE</span>
                        <p>
                          오빌리의 행복한 상상! <br />
                          등급별 유틸리티 공개
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>오빌리 민팅 완료!</p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리 모습을 드러내다! <br />
                          PFP, 레어리티 공개
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>V</span>enture <i>(새로운 모험)</i>
                    </h5>
                    <p>뭐하며 놀까?</p>
                    <p>스키, 골프, 요트 즐길 건 너무나 많아</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          특별하게 스키 타고 싶을 때? <br />
                          빌리언즈만을 위한 스키투어
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>빌리언즈만을 위한 골프 타임</p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          대한민국 스포츠 영웅과 <br />
                          함께하는 엄홍길 트래킹
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>바다로 가는 빌리언즈, 짠내 투어</p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>스릴 넘치는 즐거움</p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>내 인생의 버킷 레포츠</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>I</span>nvitation<i>(낯선 초대)</i>
                    </h5>
                    <p>다른데 가서 놀까?</p>
                    <p>새로운 친구는 어때?</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리와 친구들이 함께하는 <br />
                          새로운 프로젝트
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          빌리언즈를 위한 네스트, <br />
                          네스트 그리고 네스트
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>빌리언즈를 위한 특별한 공연</p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>빌리언즈만 입장 가능한 홀더파티!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>L</span>ove<i>(오빌리의 사랑)</i>
                    </h5>
                    <p>함께할수록 사랑은 커지겠지?</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>오빌리 탄생의 비밀 공개</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>I</span>ntro<i>(더 넓은 세상)</i>
                    </h5>
                    <p>또 다른 세상이 궁금해?</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>새로운 Journey Map 공개</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="home-box">
            <div className="footer-content">
              <div className="footer-top">
                <span> 용평리조트 대표이사 : 신달순, 임학운</span>
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

export default JourneyMap;
