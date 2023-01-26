import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/faq.css";
import "../styles/mynft.css";

// Images & Videos
import RotationImg from "../assets/img/rotation.gif";
import RotationImgBG from "../assets/img/nest-shape-1.png";
import Logo1 from "../assets/img/logo-1.png";
import FaqBgImg from "../assets/img/faq-bg.png";
import SmallImgIcon from "../assets/img/small-img-icon.png";
import EggNFT from "../assets/img/egg-nft.png";
import OpenseaIcon from "../assets/img/opensea.png";
import PalaIcon from "../assets/img/pala.png";
import OwlImg from "../assets/img/owl.png";

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
import { Dropdown, Accordion, Modal, Nav, Tab } from "react-bootstrap";
import {
  MdKeyboardArrowDown,
  MdMenu,
  MdOutlineRotate90DegreesCcw,
  MdClose,
  MdExpandMore,
  MdOutlineChevronLeft,
  MdContentCopy,
  MdOutlineCheck,
  MdSearch,
  MdOutlineChevronRight,
  MdReplay,
  MdFilterList,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyNFT = () => {
  const [isMobHeaderShowing, setIsMobHeaderShowing] = useState(false);

  const [show, setShow] = useState(false);
  const [modalScreen1, setModalScreen1] = useState(true);
  const [modalScreen2, setModalScreen2] = useState(false);
  const [modalScreen3, setModalScreen3] = useState(false);
  const [modalScreen4, setModalScreen4] = useState(false);
  const [modalScreen5, setModalScreen5] = useState(false);
  const [isFilerMobOpen, setIsFilerMobOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const showCopiedfun = () => {
    gsap.fromTo(
      ".copied",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.15,
      }
    );
    setTimeout(() => {
      gsap.fromTo(
        ".copied",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.15,
        }
      );
    }, 2000);
  };

  return (
    <div className="app">
      <div className="rotate-screen">
        <img src={RotationImgBG} alt="" />
        <p>화면을 돌려주세요.</p>
        <img src={RotationImg} alt="RotationImg" />
      </div>
      <main className="faq-page">
        <Header />
        <section className="faq-section">
          <div className="hero-section-bg"></div>
          <div className="home-box">
            <div className="faq-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>My NFT</h3>
                    <span></span>
                  </div>
                </div>
                <p>나의 Ovili Collection을 확인해 보세요~!</p>
              </div>
              <div className="mynft-copy-box">
                <div className="copied">Copied!</div>
                <img src={SmallImgIcon} alt="SmallImgIcon" />
                <p>0xfDaa4A9F09fd580fv1v15af6E2fb3c859eB02574</p>
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "0xfDaa4A9F09fd580fv1v15af6E2fb3c859eB02574"
                    );
                    showCopiedfun();
                  }}
                >
                  <MdContentCopy />
                </span>
              </div>
              {isFilerMobOpen ? (
                <div className="filter-mob">
                  <div className="filter-mob-content">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="Rarity"
                    >
                      <div className="fmc-head">
                        <div className="fmc-head-left">
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="Rarity">Rarity</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="Fam">Fam</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="Utility">Utility</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <div className="fmc-head-right">
                          초기화 <MdReplay />
                        </div>
                      </div>
                      <div className="fmc-body">
                        <Tab.Content>
                          <Tab.Pane eventKey="Rarity">
                            <div className="o-checkbox">
                              <input type="checkbox" name="o1" id="o1" />
                              <label htmlFor="o1">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>Royal Suite</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="o1" id="o2" />
                              <label htmlFor="o2">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>Presidential Suite</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="o1" id="o3" />
                              <label htmlFor="o3">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>Exeutive</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="o1" id="o4" />
                              <label htmlFor="o4">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>Deluxe</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="o1" id="o5" />
                              <label htmlFor="o5">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>Superior</p>
                                </div>
                              </label>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Fam">
                            <div className="o-checkbox">
                              <input type="checkbox" name="p1" id="p1" />
                              <label htmlFor="p1">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>N Fam</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="p1" id="p2" />
                              <label htmlFor="p2">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>O Fam</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="p1" id="p3" />
                              <label htmlFor="p3">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>B Fam</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="p1" id="p4" />
                              <label htmlFor="p4">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>L Fam</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="p1" id="p5" />
                              <label htmlFor="p5">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>E Fam</p>
                                </div>
                              </label>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="Utility">
                            <div className="o-checkbox">
                              <input type="checkbox" name="h1" id="h1" />
                              <label htmlFor="h1">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>당월 Claim 가능</p>
                                </div>
                              </label>
                            </div>
                            <div className="o-checkbox">
                              <input type="checkbox" name="h1" id="h2" />
                              <label htmlFor="h2">
                                <div className="o-checkbox-box">
                                  <div className="ocb-box">
                                    <MdOutlineCheck />
                                  </div>
                                  <p>당월 Claim 가능</p>
                                </div>
                              </label>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                    <button>DONE</button>
                  </div>
                </div>
              ) : null}
              <div className="mnft-main-grid">
                <div className="mynft-mg-left">
                  <div className="mn-filters-head">
                    <h5>Filter</h5>
                    <MdReplay />
                  </div>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Rarity <MdExpandMore />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="o-checkbox">
                          <input type="checkbox" name="o1" id="o1" />
                          <label htmlFor="o1">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>Royal Suite</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="o1" id="o2" />
                          <label htmlFor="o2">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>Presidential Suite</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="o1" id="o3" />
                          <label htmlFor="o3">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>Exeutive</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="o1" id="o4" />
                          <label htmlFor="o4">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>Deluxe</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="o1" id="o5" />
                          <label htmlFor="o5">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>Superior</p>
                            </div>
                          </label>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Fam <MdExpandMore />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="o-checkbox">
                          <input type="checkbox" name="p1" id="p1" />
                          <label htmlFor="p1">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>N Fam</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="p1" id="p2" />
                          <label htmlFor="p2">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>O Fam</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="p1" id="p3" />
                          <label htmlFor="p3">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>B Fam</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="p1" id="p4" />
                          <label htmlFor="p4">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>L Fam</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="p1" id="p5" />
                          <label htmlFor="p5">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>E Fam</p>
                            </div>
                          </label>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Utility <MdExpandMore />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="o-checkbox">
                          <input type="checkbox" name="h1" id="h1" />
                          <label htmlFor="h1">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>당월 Claim 가능</p>
                            </div>
                          </label>
                        </div>
                        <div className="o-checkbox">
                          <input type="checkbox" name="h1" id="h2" />
                          <label htmlFor="h2">
                            <div className="o-checkbox-box">
                              <div className="ocb-box">
                                <MdOutlineCheck />
                              </div>
                              <p>당월 Claim 가능</p>
                            </div>
                          </label>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="mynft-mg-right">
                  <div className="mynft-head">
                    <h6>
                      <span>1000</span> Items
                    </h6>
                    <div>
                      <select name="" id="">
                        <option value="번호순">번호순</option>
                        <option value="번호역순">번호역순</option>
                      </select>
                      <div className="mynft-search-box">
                        <input type="text" placeholder="Number" />
                        <MdSearch />
                      </div>
                      {isFilerMobOpen ? (
                        <div
                          className="mynft-search-box mynft-filter-mob-box mynft-filter-mob-box-active"
                          onClick={() => {
                            setIsFilerMobOpen(false);
                          }}
                        >
                          <MdFilterList />
                        </div>
                      ) : (
                        <div
                          className="mynft-search-box mynft-filter-mob-box"
                          onClick={() => {
                            setIsFilerMobOpen(true);
                          }}
                        >
                          <MdFilterList />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mynft-grid">
                    <div className="mynft-grid-card" onClick={handleShow}>
                      <img src={EggNFT} alt="EggNFT" />
                      <h6>Ovili #8145</h6>
                    </div>
                    <div className="mynft-grid-card" onClick={handleShow}>
                      <img src={EggNFT} alt="EggNFT" />
                      <h6>Ovili #8145</h6>
                    </div>
                    <div className="mynft-grid-card" onClick={handleShow}>
                      <img src={EggNFT} alt="EggNFT" />
                      <h6>Ovili #8145</h6>
                    </div>
                    <div className="mynft-grid-card" onClick={handleShow}>
                      <img src={EggNFT} alt="EggNFT" />
                      <h6>Ovili #8145</h6>
                    </div>
                    <div className="mynft-grid-card" onClick={handleShow}>
                      <img src={EggNFT} alt="EggNFT" />
                      <h6>Ovili #8145</h6>
                    </div>
                    <div className="mynft-grid-card" onClick={handleShow}>
                      <img src={EggNFT} alt="EggNFT" />
                      <h6>Ovili #8145</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          {modalScreen1 ? (
            <div className="nftm-content">
              <div className="nftm-cross">
                <span></span>
                <span onClick={handleClose}>
                  {" "}
                  <MdClose />
                </span>
              </div>
              <div className="nftm-grid">
                <div className="nftm-grid-left">
                  <img src={EggNFT} alt="" />
                  <a href="#">
                    <img src={OpenseaIcon} alt="" />
                    <span>View on OpenSea</span>
                  </a>
                  <a href="#">
                    <img src={PalaIcon} alt="" />
                    <span>View on Pala</span>
                  </a>
                </div>
                <div className="nftm-grid-right">
                  <h4>Ovili #8145 </h4>
                  <div className="nftm-grid-3">
                    <div className="nftm-tags">
                      <span>Rarity</span>
                      <h6>Presidential Suite</h6>
                    </div>
                    <div className="nftm-tags">
                      <span>Fam</span>
                      <h6>N</h6>
                    </div>
                  </div>
                  <div className="nftm-content-box">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <div className="nftm-content-box-head">
                        <div>
                          <p>Utility</p>
                          <span></span>
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="first">일반</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">스페셜</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <h6
                          onClick={() => {
                            setModalScreen1(false);
                            setModalScreen2(true);
                          }}
                        >
                          Claim <MdOutlineChevronRight />
                        </h6>
                      </div>
                      <div className="nftm-content-box-body">
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="nftm-cards-box">
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>NEST 예약권</h6>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>워터파크 연간 입장권 (당월)</h6>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>케이블카 연간 이용권 (당월)</h6>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>리프트 이용권 (주간/대인)</h6>
                                  <p>잔여 2회 남음 / 총 3회</p>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="nftm-cards-box">
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                              </div>
                              <div className="nftm-card-grd">
                                <div className="nftm-card">
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {modalScreen2 ? (
            <div className="nftm-content">
              <div className="nftm-cross">
                <span
                  onClick={() => {
                    setModalScreen1(true);
                    setModalScreen2(false);
                  }}
                >
                  <MdOutlineChevronLeft />
                </span>
                <span onClick={handleClose}>
                  <MdClose />
                </span>
              </div>

              <div className="nftm-grid-right">
                <h4>Ovili #8145 </h4>

                <div className="nftm-content-box">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <div className="nftm-content-box-head">
                      <div>
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="first">일반</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">스페셜</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <h6
                        onClick={() => {
                          setModalScreen2(false);
                          setModalScreen3(true);
                        }}
                      >
                        휴대폰 번호 등록하러 가기 <MdOutlineChevronRight />
                      </h6>
                    </div>
                    <div className="nftm-content-box-body">
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="nftm-cards-box">
                            <div className="nftm-card-grd">
                              <div className="nftm-card nftm-card-2">
                                <h6>NEST 예약권</h6>
                                <a href="#">Link</a>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card nftm-card-2">
                                <h6>워터파크 연간 입장권 (당월)</h6>
                                <button
                                  onClick={() => {
                                    setModalScreen2(false);
                                    setModalScreen3(true);
                                  }}
                                >
                                  Claim
                                </button>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card nftm-card-2">
                                <h6>케이블카 연간 이용권 (당월)</h6>
                                <button>Claim</button>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card nftm-card-2">
                                <div>
                                  <h6>리프트 이용권 (주간/대인)</h6>
                                  <p>잔여 2회 남음 / 총 3회</p>
                                </div>
                                <button>Claim</button>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="nftm-cards-box">
                            <div className="nftm-card-grd">
                              <div className="nftm-card  nftm-card-2">
                                <div>
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                                <button
                                  onClick={() => {
                                    setModalScreen2(false);
                                    setModalScreen4(true);
                                  }}
                                >
                                  Claim
                                </button>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card  nftm-card-2">
                                <div>
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                                <span>사용완료</span>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card  nftm-card-2">
                                <div>
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                                <button>Claim</button>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card  nftm-card-2">
                                <div>
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                                <button>Claim</button>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card  nftm-card-2">
                                <div>
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                                <button>Claim</button>
                              </div>
                            </div>
                            <div className="nftm-card-grd">
                              <div className="nftm-card  nftm-card-2">
                                <div>
                                  <h6>일반콘도 무료 숙박권</h6>
                                  <p>유효기간 2년</p>
                                </div>
                                <button>Claim</button>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              </div>
            </div>
          ) : null}
          {modalScreen3 ? (
            <div className="nftm-content">
              <div className="nftm-cross">
                <span>
                  <MdOutlineChevronLeft />
                </span>
                <span onClick={handleClose}>
                  <MdClose />
                </span>
              </div>

              <div className="nftm-grid-right">
                <h4>Ovili #8145 </h4>

                <div className="nftm-content-box">
                  <div className="nftm3-content">
                    <h4>[일반 유틸리티 클레임 안내]</h4>
                    <ul>
                      <li>
                        1. 일반 유틸리티의 경우 클레임 전 매월 1회 휴대폰 번호
                        등록이 필요하며, 유틸리티를 클레임 할 경우 등록된 휴대폰
                        번호로만 사용이 가능합니다.{" "}
                      </li>
                      <li>
                        2. 등록된 휴대폰 번호는 해당 월 말 일까지 변경이
                        불가능하며, 등록된 휴대폰 번호는 매월 1일 0시에
                        초기화됩니다.
                      </li>
                      <li>
                        3. 유틸리티 클레임 시 등록된 휴대폰 번호로 용평리조트
                        모바일 서비스 URL이 전송되며, 해당 페이지에서 동일한
                        휴대폰 번호로 로그인 후 유틸리티를 확인 및 사용하실 수
                        있습니다.
                      </li>
                    </ul>
                    <button>휴대폰 번호 등록하러 가기</button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {modalScreen4 ? (
            <div className="nftm-content">
              <div className="nftm-cross">
                <span>
                  <MdOutlineChevronLeft />
                </span>
                <span onClick={handleClose}>
                  <MdClose />
                </span>
              </div>

              <div className="nftm-grid-right">
                <h4>Ovili #8145 </h4>
                <h5>호텔 객실 무료 숙박권 (드래곤밸리호텔 디럭스)</h5>

                <div className="nftm4-grid">
                  <div className="nftm4-grid-left">
                    <h4>[유틸리티 클레임 안내]</h4>
                    <ul>
                      <li>
                        1. 호텔 객실 무료 숙박권 유틸리티 관련 사용 안내 문구가
                        보여야 합니다.
                      </li>
                    </ul>
                  </div>
                  <div className="nftm4-grid-right">
                    <h3>휴대폰 번호 등록</h3>
                    <div className="input-btn-box">
                      <input type="text" placeholder="010-0000-0000" />
                      <button>인증요청</button>
                    </div>
                    <div className="input-btn-box">
                      <input type="text" placeholder="인증번호입력" />
                      <button>확인</button>
                    </div>
                    <button
                      onClick={() => {
                        setModalScreen4(false);
                        setModalScreen5(true);
                      }}
                    >
                      등록
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {modalScreen5 ? (
            <div className="nftm-content">
              <div className="nftm-cross">
                <span>
                  <MdOutlineChevronLeft />
                </span>
                <span onClick={handleClose}>
                  <MdClose />
                </span>
              </div>

              <div className="nftm-grid-right">
                <h4>Ovili #8145 </h4>
                <h5>호텔 객실 무료 숙박권 (드래곤밸리호텔 디럭스)</h5>
                <div className="nftm-content-box">
                  <div className="nftm3-content nftm5-content">
                    <img src={OwlImg} alt="" />
                    <h4>
                      호텔 객실 무료 숙박권 (드래곤밸리호텔 디럭스)
                      <br />
                      Claim이 완료 되었습니다.
                    </h4>

                    <button>확인</button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyNFT;
