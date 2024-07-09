import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./navbar.css";

export const Navbar = (props) => {
  const { showAlert } = props;
  let location = useLocation();
  let history = useHistory();

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [slider, setSliderClass] = useState("slider minheight");
  const [header, setHeaderClass] = useState("header minheight");

  const navbarRef = useRef(null);
  const prevLocation = useRef(location); // Store previous location

  const updateMenu = () => {
    if (!isMenuClicked) {
      setSliderClass("slider maxwidth");
      setHeaderClass("header maxheight");
      setBurgerClass("burger-bar clicked");
      setTimeout(() => {
        setMenuClass("menu visible");
      }, 200);
    } else {
      setSliderClass("slider minwidth");
      setHeaderClass("header minheight");
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);

  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    history.push("/login");
    updateMenu();
    showAlert("primary", "Successfully logged out!");
  };

  const closeMenu = () => {
    setSliderClass("slider minwidth");
    setHeaderClass("header minheight");
    setBurgerClass("burger-bar unclicked");
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
  };

  // Close menu on outside click (using useEffect)
  useEffect(() => {

    // Close menu on route change
    if (prevLocation.current.pathname !== location.pathname) {
      closeMenu();
      prevLocation.current = location; // Update previous location
    }

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener on mount
    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove listener on unmount
    return () => document.removeEventListener("click", handleClickOutside);
  }, [navbarRef, location]); // Dependency array includes navbarRef

  return (
    <>
      <header className={header} ref={navbarRef}>
        <nav>
          <div>
            <div className="logo">inkwell</div>
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
            <div className={slider}>
              <div className={menu}>
                <div className="quickLinks">
                  <Link to="/">
                    <span
                      className={`${location.pathname === "/" ? "active" : ""}`}
                    >
                      Home
                    </span>
                  </Link>
                </div>
                <div className="quickLinks">
                  <Link to="/search">
                    <span
                      className={`${location.pathname === "/search" ? "active" : ""}`}
                    >
                      Search
                    </span>
                  </Link>
                </div>
                <div className="quickLinks">
                  <Link to="/about">
                    <span
                      className={`${location.pathname === "/about" ? "active" : ""
                        }`}
                    >
                      About
                    </span>
                  </Link>
                </div>
                <div className="quickLinks">
                  <Link to="/contact">
                    <span
                      className={`${location.pathname === "/contact" ? "active" : ""
                        }`}
                    >
                      Contact
                    </span>
                  </Link>
                </div>
                <div className="quickLinks">
                  <Link to="/github">Github</Link>
                </div>
                {!localStorage.getItem("token") ? (
                  <div>
                    <Link
                      className="authBtn"
                      to={"/login"}
                      onClick={updateMenu}
                    >
                      Login
                    </Link>
                    <Link
                      className="authBtn"
                      to={"/signup"}
                      onClick={updateMenu}
                    >
                      Signup
                    </Link>
                  </div>
                ) : (
                  <button className="authBtn" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ height: "80px" }}></div>
    </>
  );
};
