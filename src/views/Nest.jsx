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
  MdCancel,
  MdExpandMore,
} from "react-icons/md";

const Nest = () => {
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
      <main className="nest-page">
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
        <section className="nest-section">
          <div className="home-box">
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
                  <p>강원도 평창, 용평리조트 타워콘도</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>스키장을 발아래 둔, 높은 만큼 멋진 뷰</h6>
                </div>
                <div className="nest-grid-card">
                  <img
                    src={NestImg3Color}
                    alt="NestImg"
                    className="color-img"
                  />
                  <img src={NestImg3Dull} alt="NestImg" className="dull-img" />
                  <p>강원도 평창, 용평리조트 타워콘도</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>스키장을 발아래 둔, 높은 만큼 멋진 뷰</h6>
                </div>
                <div className="nest-grid-card">
                  <img
                    src={NestImg4Color}
                    alt="NestImg"
                    className="color-img"
                  />
                  <img src={NestImg4Dull} alt="NestImg" className="dull-img" />
                  <p>강원도 평창, 용평리조트 타워콘도</p>
                  <img src={NCSwooshImg} alt="" className="nest-swoosh" />
                  <h6>스키장을 발아래 둔, 높은 만큼 멋진 뷰</h6>
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
