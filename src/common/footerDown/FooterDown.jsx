import React from "react";
import "./FooterDown.css";
import moment from "moment";
import { Link } from "react-router-dom";

const FooterDown = () => {
  const currentDate = moment();
  const formattedDate = currentDate.format("YYYY");

  return (
    <div className="footer_down_main">
      <div className="footer_down_con">
        <p className="footer_down_text">
          &copy; Copyright {formattedDate} - Galaxy Conveyor | All Rights
          Reserved
        </p>
        <ul className="footer_down_list_main">
          <Link to='termscondition' className="footer_down_list">Terms and Conditions</Link>
          <div className="footer_down_pipeline"></div>
          <Link to='termsofusage' className="footer_down_list">Terms of Usage</Link>
          <div className="footer_down_pipeline"></div>
          <Link to='privacypolicy' className="footer_down_list">Privacy Policy</Link>
          <div className="footer_down_pipeline"></div>
           <Link to='datausagepolicy' className="footer_down_list">Data Usage Policy</Link>
        </ul>
      </div>
    </div>
  );
};

export default FooterDown;

// Copyright ©2015-2024 Galaxy Conveyor | All Rights Reserved
