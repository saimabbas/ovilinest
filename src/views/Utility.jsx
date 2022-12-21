import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/faq.css";
import "../styles/utility.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import CBImg1 from "../assets/img/common-benefits-img-1.png";
import CBImg2 from "../assets/img/common-benefits-img-2.png";
import SuiteBGImg from "../assets/img/utility-suite-bg.png";
import SuiteBGImg2 from "../assets/img/utility-suite-bg-2.png";

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

const Utility = () => {
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

  var files = [
    new Image(),
    document.createElement("link"),
    document.createElement("script"),
  ];

  files[0].setAttribute("src", { CBImg1 });
  files[1].setAttribute("src", { CBImg1 });
  window.onload = function (e) {
    document.getElementsByTagName("head")[0].appendChild(files[0]);
    document.getElementsByTagName("head")[0].appendChild(files[2]);
  };

  return (
    <div className="app">
      <div className="rotate-screen">
        <p>
          화면을 돌려주세요. <MdOutlineRotate90DegreesCcw />{" "}
        </p>
      </div>
      <main className="utility-page">
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
                      <Link to="/journeymap">JOURNEY MAP</Link>
                      <Link to="/utility">
                        <span>Utility</span>
                      </Link>
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
                <Link to="/journeymap">JOURNEY MAP</Link>
                <Link to="/utility">
                  <span>Utility</span>
                </Link>
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
        <section className="utility-section">
          <div className="home-box">
            <div className="utility-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>Utility</h3>
                    <span></span>
                  </div>
                </div>
                <p>
                  소유만으로도 가치를 인정받는 멤버십 유틸리티를 소개합니다.
                </p>
              </div>
              <div className="utility-grid">
                <div className="common-benefits-card-bg utility-card-anim">
                  <div className="common-benefits-card">
                    <img src={CBImg1} alt="CBImg1" loading="eager" />
                    <div className="cbc-content">
                      <p>공통혜택 1</p>
                      <h6>네스트 예약</h6>
                      <p>
                        ※ 네스트란?
                        <br />
                        NFT 홀더들에게 제공되는 별도의 프라이빗한 전용객실로{" "}
                        <br />
                        NFT 홀더들이 우선 예약할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="common-benefits-card-bg utility-card-anim">
                  <div className="common-benefits-card">
                    <img src={CBImg2} alt="CBImg1" loading="eager" />
                    <div className="cbc-content">
                      <p>공통혜택 2</p>
                      <h6>신규 콘도 분양 2% (최대 3천만원) 할인</h6>
                      <p>
                        ※유의사항 <br /> 1. 혜택은 디스코드 채널을 통한 직접
                        분양시에만 적용됩니다. <br /> 2. 중복 할인 불가(자세한
                        사항은 디스코드 분양 채널 참조)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="suites-card-bg utility-card-anim">
                  <div className="suites-card">
                    <div className="sc-head">
                      <img src={SuiteBGImg} alt="" />
                      <h3>Royal Suite</h3>
                      <div className="sc-head-span">
                        <span>수량 30개 (0.3%)</span>
                      </div>
                    </div>
                    <div className="sc-body">
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>프리미엄 콘도 무료 숙박권</h6>
                          <p>베르데힐 38 Type</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>스키 시즌권</h6>
                          <p>시즌 일정 홈페이지 참조</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/시즌</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>케이블카 연간 이용권</h6>
                          <p>왕복/대인기준</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/일</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>워터파크 연간 입장권</h6>
                          <p>종일/대인기준</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/일</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="suites-card-bg utility-card-anim">
                  <div className="suites-card">
                    <div className="sc-head">
                      <img src={SuiteBGImg2} alt="" />
                      <h3>Presidential Suite</h3>
                      <div className="sc-head-span">
                        <span>수량 30개 (0.3%)</span>
                      </div>
                    </div>
                    <div className="sc-body">
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>호텔 객실 무료 숙박권</h6>
                          <p>드래곤밸리 호텔 디럭스</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>골프 라운딩 무료 이용권 (1인)</h6>
                          <p>용평9(퍼블릭) 9H + 카트피(팀) + 동반 30% 할인</p>
                        </div>
                        <div className="scb-card-right">
                          <p>4회/년</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>케이블카 연간 이용권</h6>
                          <p>왕복/대인기준</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/일</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>워터파크 연간 입장권</h6>
                          <p>종일/대인기준</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/일</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>리프트 이용권</h6>
                          <p>주간권/대인 기준, 월 1회</p>
                        </div>
                        <div className="scb-card-right">
                          <p>3회/년</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plans-grid">
                  <div className="suites-card-bg utility-card-anim">
                    <div className="suites-card">
                      <div className="sc-head">
                        <div className="duo-text-box">
                          <h3>Executive</h3>
                          <span>Executive</span>
                        </div>
                        <div className="sc-head-span">
                          <span>수량 550개 (5.5%)</span>
                        </div>
                      </div>
                      <div className="sc-body">
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>워터파크 연간 입장권</h6>
                            <p>종일/대인기준</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/일</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>리프트 이용권</h6>
                            <p>주간권/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>케이블카 이용권</h6>
                            <p>왕복/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>마운틴코스터 이용권</h6>
                            <p>대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suites-card-bg utility-card-anim">
                    <div className="suites-card">
                      <div className="sc-head">
                        <div className="duo-text-box">
                          <h3>Deluxe</h3>
                          <span>Deluxe</span>
                        </div>
                        <div className="sc-head-span">
                          <span>수량 3,800개 (38%)</span>
                        </div>
                      </div>
                      <div className="sc-body">
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>워터파크 입장권</h6>
                            <p>종일/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>리프트 이용권</h6>
                            <p>주간권/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>케이블카 이용권</h6>
                            <p>왕복/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>마운틴코스터 이용권</h6>
                            <p>대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suites-card-bg utility-card-anim">
                    <div className="suites-card">
                      <div className="sc-head">
                        <div className="duo-text-box">
                          <h3>Superior</h3>
                          <span>Superior</span>
                        </div>
                        <div className="sc-head-span">
                          <span>수량 5,590개 (55.9%)</span>
                        </div>
                      </div>
                      <div className="sc-body">
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>워터파크 입장권</h6>
                            <p>종일/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>리프트 이용권</h6>
                            <p>주간권/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>케이블카 이용권</h6>
                            <p>왕복/대인 기준, 월 1회</p>
                          </div>
                          <div className="scb-card-right">
                            <p>3회/년</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notes-card utility-card-anim">
                  <h6>[유틸리티 유의사항]</h6>
                  <p>
                    1. 유틸리티는 등급별 CLAIM 횟수가 상이하며, 매월 말일 자정
                    기준으로 초기화 됩니다. <br />
                    2. 모든 혜택은 타 프로모션 및 할인 이벤트와 중복 적용이 불가
                    합니다. <br />
                    3. 리프트 이용권 발급 시 매표소에서 보증금이 발생하며,
                    리조트 내 보증금 환급기를 통해 환불 받을 수 있습니다. <br />
                    4. 그 외 유틸리티 이용 관련 유의사항 및 이용약관은 향후 별도
                    페이지를 통해 안내 될 예정입니다.
                  </p>
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

export default Utility;
