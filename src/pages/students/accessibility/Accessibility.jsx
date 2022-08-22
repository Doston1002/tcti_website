import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { Context as LanguageContext } from "../../../Context/Language";
import context from "../../../lang/lang";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import './Accessibility.css'
import Accardion from "./accardion/Accardion";
const Accessibility = () => {
    const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className="container-pages">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accessibility__header">
                <h3>
                  {" "}
                  Nogiron yoki individual o'rganish ehtiyojlari bo'lgan
                  talabalar uchun{" "}
                </h3>
              </div>
            </div>
            <div className="col-12">
                <Accardion/>
            </div>
            <div className="col-12">
                h3
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Accessibility;
