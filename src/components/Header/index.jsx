import React from "react";

export default function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center">
      <div className="header__searchbox d-flex align-items-center">
        <i className="bx bx-search header__sicon" />
        <input className="header__search" type="text" placeholder="Search topics" />
      </div>
      <div className="header__box d-flex">
        <button className="header__btn"><i className="bx bx-bell header__icon" /><span className="header__btnspan">4</span></button>
        <button className="header__btn"><i className="bx bx-message header__icon" /><span className="header__btnspanb">3</span></button>
        <button className="header__btn"><i className="bx bx-power-off header__icon" /></button>
      </div>
    </header>
  )
}