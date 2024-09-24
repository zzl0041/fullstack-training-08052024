import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Footer from "./components/Footer";
import './Layout.css';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="content">
        <Aside />
        <Section />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
