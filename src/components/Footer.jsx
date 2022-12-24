import React from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/guide.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
