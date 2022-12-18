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

const Utility = () => {
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
      <main className="utility-page">
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
                <div className="common-benefits-card-bg">
                  <div className="common-benefits-card">
                    <img src={CBImg1} alt="CBImg1" />
                    <div className="cbc-content">
                      <p>공통혜택 1</p>
                      <h6>네스트 예약</h6>
                      <p>
                        ※ 네스트란?NFT 홀더들에게 제공되는 별도의 프라이빗한
                        전용객실로 NFT 홀더들이 우선 예약할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="common-benefits-card-bg">
                  <div className="common-benefits-card">
                    <img src={CBImg1} alt="CBImg1" />
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
                <div className="suites-card-bg">
                  <div className="suites-card">
                    <div className="sc-head">
                      <h3>Royal Suite</h3>
                      <span>수량 30개 (0.3%)</span>
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
                          <h6>프리미엄 콘도 무료 숙박권</h6>
                          <p>베르데힐 38 Type</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
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
                          <h6>프리미엄 콘도 무료 숙박권</h6>
                          <p>베르데힐 38 Type</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="suites-card-bg">
                  <div className="suites-card">
                    <div className="sc-head">
                      <h3>Royal Suite</h3>
                      <span>수량 30개 (0.3%)</span>
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
                          <h6>프리미엄 콘도 무료 숙박권</h6>
                          <p>베르데힐 38 Type</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
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
                          <h6>프리미엄 콘도 무료 숙박권</h6>
                          <p>베르데힐 38 Type</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
                      <div className="scb-card">
                        <div className="scb-card-left">
                          <h6>프리미엄 콘도 무료 숙박권</h6>
                          <p>베르데힐 38 Type</p>
                        </div>
                        <div className="scb-card-right">
                          <p>1회/년</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="plans-grid">
                  <div className="suites-card-bg">
                    <div className="suites-card">
                      <div className="sc-head">
                        <div className="duo-text-box">
                          <h3>Executive</h3>
                          <span>Executive</span>
                        </div>
                        <span>수량 30개 (0.3%)</span>
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
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
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
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suites-card-bg">
                    <div className="suites-card">
                      <div className="sc-head">
                        <div className="duo-text-box">
                          <h3>Deluxe</h3>
                          <span>Deluxe</span>
                        </div>
                        <span>수량 30개 (0.3%)</span>
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
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
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
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
                        <div className="scb-card">
                          <div className="scb-card-left">
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suites-card-bg">
                    <div className="suites-card">
                      <div className="sc-head">
                        <div className="duo-text-box">
                          <h3>Superior</h3>
                          <span>Superior</span>
                        </div>
                        <span>수량 30개 (0.3%)</span>
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
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
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
                            <h6>프리미엄 콘도 무료 숙박권</h6>
                            <p>베르데힐 38 Type</p>
                          </div>
                          <div className="scb-card-right">
                            <p>1회/년</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notes-card">
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

export default Utility;
