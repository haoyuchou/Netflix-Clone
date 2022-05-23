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
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "black",
      padding: "10% 10% 0",
      fontSize: "1.15em",
      //overflowY: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0",
    },
    bmItem: {
      display: "inline-block",
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
      width={"15%"}
      styles={styles}
      customBurgerIcon={<MenuIcon fontSize="large" />}
      isOpen={menuIsOpen}
      onStateChange={stateChangeHandler}
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
