import React from "react";

export default function Hero() {
  return(
    <section className="hero d-flex">
      <div className="hero__box d-flex justify-content-center align-items-center">
        <i className="bx bxs-group hero__icon" />
      </div>
      <div className="d-flex flex-column ps-5">
        <h2 className="hero__title">New Employee</h2>
        <p className="hero__text">Form design with validation</p>
      </div>
    </section>
  )
}