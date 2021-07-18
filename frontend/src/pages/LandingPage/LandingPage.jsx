import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="LandingPage animatedContent">
      <img
        className="LandingPage--image"
        src="https://wellnesstg.com/wp-content/themes/wtechgroup/img/logo-Wellness-TechGroup.svg"
        alt="Wellness tech group"
      ></img>
      <h1 className="display-1 LandingPage--title font-weight-bold">
        WELCOME TO WELLNESS ELECTRICITY
        <span className="LandingPage--span">.</span>
      </h1>
      <h5 className="LandingPage--text font-weight-light">
        Check all your electricity bills with us.
      </h5>
      <Link to="/facturas">
        <button className="LandingPage--button btn btn-outline-dark btn-lg">
          Check my bills
        </button>
      </Link>
    </div>
  );
}
