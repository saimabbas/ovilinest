import React, { useEffect, useState, useRef } from "react";

// Styles
import "../styles/globals.css";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
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
import { Dropdown } from "react-bootstrap";
import { MdKeyboardArrowDown, MdMenu, MdCancel } from "react-icons/md";
const Home = () => {
  useEffect(() => {
    /* gsap.fromTo(
      ".o, .v, .i1, .l, .i2",
      {
        backgroundPosition: "0",
        backgroundSize: "400%",
      },
      {
        backgroundPosition: "100%",
        backgroundSize: "500%",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        duration: 10,
      }
    );
    gsap.fromTo(
      ".nest",
      {
        backgroundPosition: "0",
        backgroundSize: "400%",
      },
      {
        backgroundPosition: "100%",
        backgroundSize: "500%",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        duration: 15,
      }
    ); */
    $(".o").mouseenter(() => {
      $(".o-box").css({
        opacity: "1",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "0",
      });
      $("body::-webkit-scrollbar").css({
        width: "0",
        padding: "0 10px 0 0",
      });
    });
    $(".o").mouseleave(() => {
      $(".o-box").css({
        opacity: "0",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "1",
      });
      $("body::-webkit-scrollbar").css({
        width: "10px",
        padding: "0",
      });
    });
    $(".v").mouseenter(() => {
      $(".v-box").css({
        opacity: "1",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "0",
      });
    });
    $(".v").mouseleave(() => {
      $(".v-box").css({
        opacity: "0",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "1",
      });
    });
    $(".i1").mouseenter(() => {
      $(".i1-box").css({
        opacity: "1",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "0",
      });
    });
    $(".i1").mouseleave(() => {
      $(".i1-box").css({
        opacity: "0",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "1",
      });
    });
    $(".l").mouseenter(() => {
      $(".l-box").css({
        opacity: "1",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "0",
      });
    });
    $(".l").mouseleave(() => {
      $(".l-box").css({
        opacity: "0",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "1",
      });
    });
    $(".i2").mouseenter(() => {
      $(".i2-box").css({
        opacity: "1",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "0",
      });
    });
    $(".i2").mouseleave(() => {
      $(".i2-box").css({
        opacity: "0",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "1",
      });
    });
    $(".nest").mouseenter(() => {
      $(".nest-box").css({
        opacity: "1",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "0",
      });
    });
    $(".nest").mouseleave(() => {
      $(".nest-box").css({
        opacity: "0",
      });
      $("header, .hero-section-bg, .hero-section .hero-content-box").css({
        opacity: "1",
      });
    });
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
      <main className="home-page">
        <div className="letter-box o-box">
          <video preload="auto" muted loop autoPlay>
            <source src={Ovideo} type="video/mp4" />
          </video>
          <div className="letter-header"></div>
          <div className="letter-body">
            <div className="hero-content-box">
              <div className="hero-head">
                <h1>
                  <span className="fatface oo">
                    O <i>ViLinest</i>{" "}
                  </span>
                  <span className="fatface v">V</span>
                  <span className="fatface i1">i</span>
                  <span className="fatface l">L</span>
                  <span className="fatface i2">i</span>
                  <span className="fatface nest">nest</span>
                </h1>
                <video preload="auto" muted loop autoPlay>
                  <source src={Ovideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box v-box">
          <video preload="auto" muted loop autoPlay>
            <source src={Vvideo} type="video/mp4" />
          </video>
          <div className="letter-header"></div>
          <div className="letter-body">
            <div className="hero-content-box">
              <div className="hero-head">
                <h1>
                  <span className="fatface o">O</span>
                  <span className="fatface vv">
                    <i className="i-left">O</i>V
                    <i className="i-right">iLinest</i>
                  </span>
                  <span className="fatface i1">i</span>
                  <span className="fatface l">L</span>
                  <span className="fatface i2">i</span>
                  <span className="fatface nest">nest</span>
                </h1>
                <video preload="auto" muted loop autoPlay>
                  <source src={Vvideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box i1-box">
          <video preload="auto" muted loop autoPlay>
            <source src={I1video} type="video/mp4" />
          </video>
          <div className="letter-header"></div>
          <div className="letter-body">
            <div className="hero-content-box">
              <div className="hero-head">
                <h1>
                  <span className="fatface o">O</span>
                  <span className="fatface v">V</span>
                  <span className="fatface ii1">
                    <i className="i-left">OV</i>i<i>Linest</i>
                  </span>
                  <span className="fatface l">L</span>
                  <span className="fatface i2">i</span>
                  <span className="fatface nest">nest</span>
                </h1>
                <video preload="auto" muted loop autoPlay>
                  <source src={I1video} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box l-box">
          <video preload="auto" muted loop autoPlay>
            <source src={Lvideo} type="video/mp4" />
          </video>
          <div className="letter-header"></div>
          <div className="letter-body">
            <div className="hero-content-box">
              <div className="hero-head">
                <h1>
                  <span className="fatface o">O</span>
                  <span className="fatface v">V</span>
                  <span className="fatface i1">i</span>
                  <span className="fatface ll">
                    <i className="i-left">OVi</i>L
                    <i className="i-right">inest</i>
                  </span>
                  <span className="fatface i2">i</span>
                  <span className="fatface nest">nest</span>
                </h1>
                <video preload="auto" muted loop autoPlay>
                  <source src={Lvideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box i2-box">
          <video preload="auto" muted loop autoPlay>
            <source src={I2video} type="video/mp4" />
          </video>
          <div className="letter-header"></div>
          <div className="letter-body">
            <div className="hero-content-box">
              <div className="hero-head">
                <h1>
                  <span className="fatface o">O</span>
                  <span className="fatface v">V</span>
                  <span className="fatface i1">i</span>
                  <span className="fatface l">L</span>
                  <span className="fatface ii2">
                    <i className="i-left">OViL</i>i<i>nest</i>
                  </span>
                  <span className="fatface nest">nest</span>
                </h1>
                <video preload="auto" muted loop autoPlay>
                  <source src={I2video} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box nest-box">
          <video preload="auto" muted loop autoPlay>
            <source src={NESTvideo} type="video/mp4" />
          </video>
          <div className="letter-header"></div>
          <div className="letter-body">
            <div className="hero-content-box">
              <div className="hero-head">
                <h1>
                  <span className="fatface o">O</span>
                  <span className="fatface v">V</span>
                  <span className="fatface i1">i</span>
                  <span className="fatface l">L</span>
                  <span className="fatface i2">i</span>
                  <span className="fatface nestnest">
                    <i className="i-left">OViLi</i>nest
                  </span>
                </h1>
                <video preload="auto" muted loop autoPlay>
                  <source src={NESTvideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
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
        <section className="hero-section">
          <div className="hero-section-bg"></div>
          <div className="home-box">
            <div className="hero-content">
              <div className="hero-content-box">
                <div className="hero-head">
                  <h1>
                    <span className="fatface o">O</span>
                    <span className="fatface v">V</span>
                    <span className="fatface i1">i</span>
                    <span className="fatface l">L</span>
                    <span className="fatface i2">i</span>
                    <span className="fatface nest">nest</span>
                  </h1>
                </div>
                <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
                <p>
                  오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이“를
                  모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로 젝트
                  입니다. <br />
                  오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
                </p>
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

export default Home;
