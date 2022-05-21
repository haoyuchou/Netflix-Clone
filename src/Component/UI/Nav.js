import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import classes from "./Nav.module.css";

const Nav = () => {
  const [changeNavColor, setChangeNavColor] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setChangeNavColor(window.pageYOffset > 200);
      });
    }
  }, [changeNavColor]);

  const backgroundColor = changeNavColor ? "black" : "transparent";

  return (
    <div className={classes.nav} style={{ backgroundColor: backgroundColor }}>
      <div className={classes["nav-sidebar"]}>
        <div>
          <SideBar />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="netflix-logo"
            className={classes["nav-logo"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
