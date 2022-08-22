import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


import './Students.css'
const Students = () => {
     const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className="container-pages">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="students__header">
                <h3>
                  O'qishning birinchi kunlarida tez-tez beriladigan savollar va
                  boshqa foydali ma'lumotlar!
                </h3>
                <button>Ko'proq ma'lumot olish</button>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 students__section">
              <a href={`/page/static/get/finance`}>
                <div className="students__section1">
                  <h2>Moliya</h2>
                </div>
              </a>
              <a href={`/page/static/get/accessibility`}>
                <div className="students__section2">
                  {" "}
                  <h2>Qo'shma ta'lim</h2>
                </div>
              </a>
              <a href={`http://185.217.131.79/`}>
                <div className="students__section3">
                  {" "}
                  <h2>Moliya</h2>
                </div>
              </a>
              <a href={`/page/static/get/startup`}>
                <div className="students__section4">
                  {" "}
                  <h2>Moliya</h2>
                </div>
              </a>
              <a href={`/page/static/get/startup`}>
                <div className="students__section5">
                  {" "}
                  <h2>Moliya</h2>
                </div>
              </a>
              <a href={`/page/static/get/studentInfo`}>
                <div className="students__section6">
                  {" "}
                  <h2>Talabalar</h2>
                </div>
              </a>
              <a href={`/page/static/get/startup`}>
                <div className="students__section7">
                  {" "}
                  <h2>Talabalar</h2>
                </div>
              </a>
              <a href={`/page/static/get/bedroom`}>
                <div className="students__section8">
                  {" "}
                  <h2>Talabalar</h2>
                </div>
              </a>
            </div>
            <div className="col-12">
              <div className="students__footer">
                <h3>
                  O'qishning birinchi kunlarida tez-tez beriladigan savollar va
                  boshqa foydali ma'lumotlar!
                </h3>
                <button>Ko'proq ma'lumot olish</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Students