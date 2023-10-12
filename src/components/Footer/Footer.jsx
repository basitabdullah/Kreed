import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <span>Kreed</span>
      <div className="links">
          <span>Socials</span>
        <div className="box">
          <a href="">
            <img src="/svgs/linkedins.svg" width={30} height={30} alt="" />
          </a>
          <a href="">
            <img src="/svgs/instagram.svg" width={40} height={40} alt="" />
          </a>
          <a href="">
            <img src="/svgs/chrome.svg" width={30} height={30} alt="" />
          </a>
        </div>
      </div>
      <span>© Kreeda</span>
    </div>
  );
};

export default Footer;
