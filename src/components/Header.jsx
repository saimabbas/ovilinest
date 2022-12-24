import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Link } from "react-router-dom";
import { Dropdown, Accordion } from "react-bootstrap";
import {
  MdKeyboardArrowDown,
  MdMenu,
  MdOutlineRotate90DegreesCcw,
  MdClose,
  MdExpandMore,
} from "react-icons/md";
import Logo1 from "../assets/img/logo-1.png";

const Header = (props) => {
  const [isMobHeaderShowing, setIsMobHeaderShowing] = useState(false);
  const [isWorldActive, setIsWorldActive] = useState(false);
  const [isJourneyMapActive, setIsJourneyMapActive] = useState(false);
  const [isUtilityActive, setIsUtilityActive] = useState(false);
  const [isNestActive, setIsNestActive] = useState(false);
  const [isGuideActive, setIsGuideActive] = useState(false);
  const [isFaqActive, setIsFaqActive] = useState(false);
  return (
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
                  <Link to="/">
                    <img src={Logo1} alt="Logo1" />
                  </Link>
                  <Link to="/world">
                    <span className={props.isWorldActive ? "active-class" : ""}>
                      WORLD
                    </span>
                  </Link>
                  <Link to="/journeymap">
                    <span
                      className={props.isJourneyMapActive ? "active-class" : ""}
                    >
                      JOURNEY MAP
                    </span>
                  </Link>
                  <Link to="/utility">
                    <span
                      className={props.isUtilityActive ? "active-class" : ""}
                    >
                      Utility
                    </span>
                  </Link>
                  <Link to="/nest">
                    <span className={props.isNestActive ? "active-class" : ""}>
                      NEST
                    </span>
                  </Link>
                  <div></div>
                  <Link to="/guide">
                    <span className={props.isGuideActive ? "active-class" : ""}>
                      GUIDE
                    </span>
                  </Link>
                  <Link to="/faq">
                    <span className={props.isFaqActive ? "active-class" : ""}>
                      FAQ
                    </span>
                  </Link>
                  <Dropdown variant="danger">
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
            <Link to="/world">
              <span className={props.isWorldActive ? "active-class" : ""}>
                WORLD
              </span>
            </Link>
            <Link to="/journeymap">
              <span className={props.isJourneyMapActive ? "active-class" : ""}>
                JOURNEY MAP
              </span>
            </Link>
            <Link to="/utility">
              <span className={props.isUtilityActive ? "active-class" : ""}>
                Utility
              </span>
            </Link>
            <Link to="/nest">
              <span className={props.isNestActive ? "active-class" : ""}>
                NEST
              </span>
            </Link>
            <div></div>
            <Link to="/guide">
              <span className={props.isGuideActive ? "active-class" : ""}>
                GUIDE
              </span>
            </Link>
            <Link to="/faq">
              <span className={props.isFaqActive ? "active-class" : ""}>
                FAQ
              </span>
            </Link>
          </div>
          <div className="header-right">
            <Dropdown variant="danger">
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
  );
};

export default Header;
