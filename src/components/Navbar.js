import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
    {/* <nav class={`navbar navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid px-2">
    <a class="navbar-brand " href="#">
      <img src="logo192.png" width="24" height="24" class="d-inline-block align-text-top"/>
      {props.title}
    </a>
    <a class="navbar-brand" href="#">
      {props.home}
    </a>
    
    <div className={`form-check ms-auto form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.darkMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode === "light" ? "Dark" : "Light"}
          </label>
         </div>
   
   </div>
</nav> */}

    
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.home}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      See More
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
           </div>
         </div>
        <div className="colorPallets">
            <div className="black color-box" onClick={props.darkMode}></div>
            <div className="blue color-box" onClick={props.blueMode}></div>
            <div className="red color-box" onClick={props.redMode}></div>
            <div className="green color-box" onClick={props.greenMode}></div>
            <div className="white color-box" onClick={props.lightMode}></div>
         </div>
        {/* <div
          className={`form-check mx-3 ms-auto form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.darkMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode === "light" ? "Dark" : "Light"}
          </label>
         </div> */}
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
