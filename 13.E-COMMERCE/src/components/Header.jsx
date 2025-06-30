import React from "react";
import "../css/Header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

function Header() {

  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");
   
    if(theme){
        root.style.backgroundColor = "black";
        root.style.color="#fff"
    }else{
        root.style.backgroundColor = "#fff";
        root.style.color="black"
    }
     setTheme(!theme);
  }
  return (
    <div
      style={{
        display: "flex ",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.png" alt="" />
        <p className="logo-text">HİLAL A.Ş</p>
      </div>

      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Bir şeyler ara"
        />
        <div>
          {theme ? <FaMoon className="icon" onClick={changeTheme} /> : <CiLight className="icon" onClick={changeTheme}/>}
          
          <FaBasketShopping className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
