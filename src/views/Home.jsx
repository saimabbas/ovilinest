import React, { useEffect, useState, useRef } from "react";

// Styles
import "../styles/globals.css";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Images & Videos
import RotationImg from "../assets/img/rotation.gif";
import RotationImgBG from "../assets/img/nest-shape-1.png";
import Logo1 from "../assets/img/logo-1.png";
import MobBgImg1 from "../assets/img/1.webp";
import MobBgImg2 from "../assets/img/2.webp";
import MobBgImg3 from "../assets/img/3.webp";
import MobBgImg4 from "../assets/img/4.webp";
import MobBgImg5 from "../assets/img/5.webp";
import MobBgImg6 from "../assets/img/6.webp";
import Ovideo from "../assets/videos/o2.mp4";
import Vvideo from "../assets/videos/v2.mp4";
import I1video from "../assets/videos/i12.mp4";
import Lvideo from "../assets/videos/l2.mp4";
import I2video from "../assets/videos/i22.mp4";
import NESTvideo from "../assets/videos/nest2.mp4";
import Video1Img from "../assets/img/video1.jpg";
import Video2Img from "../assets/img/video2.jpg";
import Video3Img from "../assets/img/video3.jpg";
import Video4Img from "../assets/img/video4.jpg";
import Video5Img from "../assets/img/video5.jpg";
import Video6Img from "../assets/img/video6.jpg";

// Components

import gsap from "gsap";
import { Back, Power3, Linear, Power4, Expo, Circ } from "gsap/dist/gsap";
import $ from "jquery";
import { Dropdown } from "react-bootstrap";
import {
  MdKeyboardArrowDown,
  MdMenu,
  MdClose,
  MdOutlineRotate90DegreesCcw,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Home = () => {
  const [isMobHeaderShowing, setIsMobHeaderShowing] = useState(false);
  useEffect(() => {
    // FOR DESKTOPS
    /* gsap.fromTo(
      ".o",
      {
        backgroundPosition: "0% 0%",
        backgroundSize: "200%",
      },
      {
        backgroundPosition: "100% 100%",
        backgroundSize: "300%",
        ease: Linear.easeNone,
        autoRound: false,
        repeat: -1,
        yoyo: true,
        duration: 20,
      }
    );
    gsap.fromTo(
      ".v",
      {
        backgroundPosition: "50% 50%",
        backgroundSize: "300%",
      },
      {
        backgroundPosition: "0% 0%",
        backgroundSize: "400%",
        ease: Linear.easeNone,
        autoRound: false,
        repeat: -1,
        yoyo: true,
        duration: 15,
      }
    );  
    gsap.fromTo(
      ".i1",
      {
        backgroundPosition: "0% 0%",
        backgroundSize: "200%",
      },
      {
        backgroundPosition: "50% 100%",
        backgroundSize: "400%",
        ease: Linear.easeNone,
        autoRound: false,
        repeat: -1,
        yoyo: true,
        duration: 15,
      }
    );
    gsap.fromTo(
      ".l",
      {
        backgroundPosition: "0% 0%",
        backgroundSize: "400%",
      },
      {
        backgroundPosition: "100% 100%",
        backgroundSize: "250%",
        ease: Linear.easeNone,
        autoRound: false,
        repeat: -1,
        yoyo: true,
        duration: 20,
      }
    );
    gsap.fromTo(
      ".i2",
      {
        backgroundPosition: "0% 0%",
      },
      {
        backgroundPosition: "100% 100%",
        ease: Linear.easeNone,
        autoRound: false,
        repeat: -1,
        yoyo: true,
        duration: 10,
      }
    );
    gsap.fromTo(
      ".nest",
      {
        backgroundSize: "100%",
      },
      {
        backgroundSize: "150%",
        ease: Linear.easeNone,
        autoRound: false,
        repeat: -1,
        yoyo: true,
        duration: 10,
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
    /* let homeLandingAnim = gsap.timeline({
      paused: true,
    });
    homeLandingAnim.fromTo(
      ".home-page",
      {
        scale: "0",
      },
      {
        scale: "1",
        duration: 1,
      }
    ); */
    /* $(window).on("load", function () {
      homeLandingAnim.play();
    }); */
    /* $(document).ready(function () {
      homeLandingAnim.play();
    }); */
  }, []);

  return (
    <div className="app">
      <div id="preload-div">
        <link rel="preload" href={Video1Img} as="image" />
        <link rel="preload" href={Video2Img} as="image" />
        <link rel="preload" href={Video3Img} as="image" />
        <link rel="preload" href={Video4Img} as="image" />
        <link rel="preload" href={Video5Img} as="image" />
        <link rel="preload" href={Video6Img} as="image" />
        <img src={Video1Img} alt="Video1Img" />
        <img src={Video2Img} alt="Video1Img" />
        <img src={Video3Img} alt="Video1Img" />
        <img src={Video4Img} alt="Video1Img" />
        <img src={Video5Img} alt="Video1Img" />
        <img src={Video6Img} alt="Video1Img" />
      </div>
      <div className="rotate-screen">
        <img src={RotationImgBG} alt="" />
        <p>화면을 돌려주세요.</p>
        <img src={RotationImg} alt="RotationImg" />
      </div>
      <main className="home-page">
        <div className="letter-box o-box">
          <img src={MobBgImg1} alt="MobBgImg" />
          <video muted autoPlay loop playsInline>
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
                <video muted autoPlay loop playsInline>
                  <source src={Ovideo} type="video/mp4" />
                </video>

                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="https://ovilinest-web-resource.s3.ap-northeast-2.amazonaws.com/video/1-ski.mp4"
        />,
      `,
                  }}
                ></div> */}
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이”를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box v-box">
          <img src={MobBgImg2} alt="MobBgImg" />
          <video muted autoPlay loop playsInline>
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
                <video muted autoPlay loop playsInline>
                  <source src={Vvideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이” 를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box i1-box">
          <img src={MobBgImg3} alt="MobBgImg" />
          <video muted autoPlay loop playsInline>
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
                <video muted autoPlay loop playsInline>
                  <source src={I1video} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이” 를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box l-box">
          <img src={MobBgImg4} alt="MobBgImg" />
          <video muted autoPlay loop playsInline>
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
                <video muted autoPlay loop playsInline>
                  <source src={Lvideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이” 를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box i2-box">
          <img src={MobBgImg5} alt="MobBgImg" />
          <video muted autoPlay loop playsInline>
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
                <video muted autoPlay loop playsInline>
                  <source src={I2video} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이” 를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
        <div className="letter-box nest-box">
          <img src={MobBgImg6} alt="MobBgImg" />
          <video muted autoPlay loop playsInline>
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
                <video muted autoPlay loop playsInline>
                  <source src={NESTvideo} type="video/mp4" />
                </video>
              </div>
              <h2>“Hi, Villionz! Welcome to Ovili nest”</h2>
              <p>
                오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이” 를
                모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                입니다. <br />
                오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
              </p>
            </div>
          </div>
        </div>
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
                <Link to="/journeymap">JOURNEY MAP</Link>
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
                <h2>
                  “Hi, Villionz! <br /> Welcome to Ovili nest”
                </h2>
                <p>
                  오빌리 네스트는 발왕산에 서식하는 천연기념물 “수리부엉이” 를
                  모티브로 <br /> 용평리조트에서 운영하는 NFT 멤버십 프로젝트
                  입니다. <br />
                  오빌리와 함께 신나고 즐거운 모험을 떠나보세요!
                </p>
                <p>
                  오빌리 네스트는 발왕산에 서식하는
                  <br />
                  천연기념물 “수리부엉이“를 모티브로
                  <br />
                  용평리조트에서 운영하는
                  <br />
                  NFT 멤버십 프로젝트 입니다.
                  <br />
                  오빌리와 함께 신나고
                  <br />
                  즐거운 모험을 떠나보세요!
                </p>
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

export default Home;
