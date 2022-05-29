import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import classes from "./SideBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "20px",
      height: "1.5rem",
      left: "15px",
      top: "15px",
    },
    bmBurgerBars: {
      background: "#373a47",
      //padding: "0",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      // this is the x button
      height: "24px",
      width: "10px",
    },
    bmCross: {
      // the x button color
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "20%"
      //width: window.innerWidth > "730" ? "15%" : "25%"
    },
    
    bmMorphShape: {
      fill: "#373a47",
    },

    bmItem: {
      //display: "inline-block",
      padding: "0",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
  };

  const stateChangeHandler = (state) => {
    setMenuIsOpen((prev) => {
      return state.isOpen;
    });
  };

  const menuHandler = () => {
    setMenuIsOpen((prev) => {
      //console.log(prev);
      return false;
    });
  };
  return (
    <Menu
      styles={styles}
      customBurgerIcon={<MenuIcon fontSize="large" />}
      isOpen={menuIsOpen}
      onStateChange={stateChangeHandler}
      itemListClassName={classes["item-list"]}
      menuClassName={classes.menu}
    >
      <ul>
        <Link to="/" className={classes.link} onClick={menuHandler}>
          Home
        </Link>
      </ul>
      <ul>
        <Link to="/movie" className={classes.link} onClick={menuHandler}>
          Movie
        </Link>
      </ul>
      <ul>
        <Link to="/tv" className={classes.link} onClick={menuHandler}>
          TV
        </Link>
      </ul>
    </Menu>
  );
};

export default SideBar;
