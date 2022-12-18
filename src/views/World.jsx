import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/world.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import WCImg1 from "../assets/img/world-chapter-1.png";
import WCImg2 from "../assets/img/world-chapter-2.png";
import WCVideo3 from "../assets/videos/world-chapter-3.mp4";

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
      <main className="world-page">
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
        <section className="world-section wc-1">
          <img src={WCImg1} alt="world" />
          <div className="home-box">
            <div className="world-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>오빌리 이야기</h3>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="world-text-box">
                <h2>
                  Chapter 1 <span>발왕산을 지키는 수호신</span>
                </h2>
                <p>
                  아주 먼 옛날 높은 산에 신비한 힘을 가진 왕수리부엉이 한 마리가
                  살고 있었어요.
                  <br />
                  <br />
                  왕수리부엉이가 날갯짓을 한 번 할 때마다 바람이 불었고 산을 한
                  바퀴 돌면 눈이 내렸으며 부보부보~ 소리를 내어 울면 꽃이 피고
                  따뜻한 봄이 왔답니다.
                  <br />
                  <br />
                  왕수리부엉이가 사는 산에 왕이 나온다는 얘기가 돌며 사람들은 이
                  산을 발왕산이라 불렀어요.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="world-section wc-2">
          <img src={WCImg2} alt="world" />
          <div className="home-box">
            <div className="world-content">
              <div className="world-text-box">
                <h2>
                  Chapter 2 <span>발왕산을 지키는 수호신</span>
                </h2>
                <p>
                  아주 먼 옛날 높은 산에 신비한 힘을 가진 왕수리부엉이 한 마리가
                  살고 있었어요.
                  <br />
                  <br />
                  왕수리부엉이가 날갯짓을 한 번 할 때마다 바람이 불었고 산을 한
                  바퀴 돌면 눈이 내렸으며 부보부보~ 소리를 내어 울면 꽃이 피고
                  따뜻한 봄이 왔답니다.
                  <br />
                  <br />
                  왕수리부엉이가 사는 산에 왕이 나온다는 얘기가 돌며 사람들은 이
                  산을 발왕산이라 불렀어요.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="world-section wc-3">
          <video muted loop autoPlay>
            <source src={WCVideo3} type="video/mp4" />
          </video>
          <div className="home-box">
            <div className="world-content">
              <div className="world-text-box">
                <h2>
                  Chapter 3 <span>발왕산을 지키는 수호신</span>
                </h2>
                <p>
                  아주 먼 옛날 높은 산에 신비한 힘을 가진 왕수리부엉이 한 마리가
                  살고 있었어요.
                  <br />
                  <br />
                  왕수리부엉이가 날갯짓을 한 번 할 때마다 바람이 불었고 산을 한
                  바퀴 돌면 눈이 내렸으며 부보부보~ 소리를 내어 울면 꽃이 피고
                  따뜻한 봄이 왔답니다.
                  <br />
                  <br />
                  왕수리부엉이가 사는 산에 왕이 나온다는 얘기가 돌며 사람들은 이
                  산을 발왕산이라 불렀어요.
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

export default Nest;
