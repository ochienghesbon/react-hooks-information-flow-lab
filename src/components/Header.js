import React from "react";


function Header({onDarkModeClick,text}) {
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {text ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header