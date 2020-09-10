import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateContext } from "../../ContextProvider";

function Header() {
  const [{ basket }, dispatch] = useStateContext();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav">
        <div className="header__navItems">
          <Link to="/signup">
            <p className="header__navItemTop">Sign up</p>
          </Link>
          <Link to="/signin">
            <p className="header__navItemBottom">Hello,Sign in</p>
          </Link>
        </div>
        <div className="header__navItems">
          <p className="header__navItemTop">Returns</p>
          <p className="header__navItemBottom">& Orders</p>
        </div>
        <div className="header__navItems">
          <p className="header__navItemTop">Try</p>
          <p className="header__navItemBottom">Prime</p>
        </div>
        <Link to="/checkout">
          <div className="header__cartContainer">
            <ShoppingCartIcon />
            <h2 className="header__cartCounter">{basket.length}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
