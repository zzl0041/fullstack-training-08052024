import React from "react";
import "../Layout.css";
import FrontendInfo from "./FrontendInfo";
import Counter from "./Counter";
import Converter from "./Converter";

const Section = () => {
  return (
    <section className="section">
      Section
      <FrontendInfo />
      <Counter />
      <Converter />
    </section>
  );
};

export default Section;
