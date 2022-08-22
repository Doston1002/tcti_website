import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { Context as LanguageContext } from "../../../Context/Language";
import context from "../../../lang/lang";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import DataTime from "../finance/dataTime/DataTime";
import Select from "../select/Select";
const Startup = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className="container-pages">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="badroom__header">
                <h1>MOLIYA</h1>
              </div>
            </div>
            <div className="col-6">
              <p>
                Universitet talabalar uchun davlat tomonidan
                moliyalashtiriladigan va nodavlat ta'lim muassasalarida turli
                xil moliyaviy yordam va ko'tarilish imkoniyatlarini taklif
                etadi. Universitet tomonidan taqdim etilgan barcha
                imkoniyatlardan foydalaning!
              </p>
            </div>
            <div className="col-6">
              <DataTime />
            </div>
            <div className="col-12">
              <Select />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Startup;
