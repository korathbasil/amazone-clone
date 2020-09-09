import React from "react";
import "./Header.css";
import Logo from "./amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateContext } from "../../ContextProvider";

function Header() {
  const [{ basket }, dispatch] = useStateContext();
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav">
        <div className="header__navItems">
          <p className="header__navItemTop">Hello, Sign in</p>
          <p className="header__NavItemBottom">Account & Lists</p>
        </div>
        <div className="header__navItems">
          <p className="header__navItemTop">Returns</p>
          <p className="header__NavItemBottom">& Orders</p>
        </div>
        <div className="header__navItems">
          <p className="header__navItemTop">Try</p>
          <p className="header__NavItemBottom">Prime</p>
        </div>
        <div className="header__cartContainer">
          <ShoppingCartIcon />
          <h2 className="header__cartCounter">{basket.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
