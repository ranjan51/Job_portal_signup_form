import React from "react";
import logo from "../../src/assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        {/* <img src='https://static.naukimg.com/s/4/100/i/naukri_Logo.png' id='img_header'/> */}
        <div className="imageContainer">
          <img src={logo} id="img_header" />
        </div>

        <h6 id="h6-header">
          Already Registered? <span style={{ color: "blue" }}>Login</span> here
        </h6>
      </header>
    </div>
  );
};

export default Navbar;
