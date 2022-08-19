import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { Context as LanguageContext } from "../../../Context/Language";
import context from "../../../lang/lang";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import './InstitutAbout.css'
import InstititutImg from "../../../images/Toshkent_kimyo_texnologiya_instituti.jpg";
const InstitutAbout = () => {
  const { lang } = useContext(LanguageContext);
    return (
      <>
        <div className="container-pages">
          <Header />
          <div className="mainsss">
            <div className="page_main">
              <div className="unv_haqida_text">
                <img className="institutImg" src={InstititutImg} alt="" />

                <h3>{context[lang].generalInformation.first}</h3>
                <p>{context[lang].otmHaqida.first}</p>
                <br />
                <p>{context[lang].otmHaqida.second}</p>
                <br />
                <p>{context[lang].otmHaqida.third}</p>
                <br />
                <p>{context[lang].otmHaqida.fourth}</p>
                <br />
                <p>{context[lang].otmHaqida.fivth}</p>
                <br />
                <p>{context[lang].otmHaqida.sixth}</p>
                <br />
                <p>{context[lang].otmHaqida.seventh}</p>
                <br />
                <p>{context[lang].otmHaqida.eightth}</p>
                <br />
                <p>{context[lang].otmHaqida.nineth}</p>
                <br />
                <p>{context[lang].otmHaqida.tenth}</p>
                <br />
              </div>
              <div className="rectorat">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div>
                        <h2>Rektorat</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div>
                        <div>
                          <img
                            src="https://ktu.edu/wp-content/uploads/2018/09/E.V.6-768x768.jpg"
                            alt=""
                          />
                          <h3>Prof. Eugenijus Valatka </h3>
                          <div className="">
                            <h3>
                              <a href="#" target="_blank">
                                <i className="color-white  fa-brands fa-telegram"></i>
                              </a>
                            </h3>

                            <h3>
                              {" "}
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                            </h3>
                            <h3>
                              {" "}
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                              </a>
                            </h3>
                            <h3>
                              <a href="#" target="_blank">
                                {" "}
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </h3>
                            <h3>
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-4">
                      <div>
                        <div>
                          <img
                            src="https://ktu.edu/wp-content/uploads/2018/09/E.V.6-768x768.jpg"
                            alt=""
                          />
                          <h3>Prof. Eugenijus Valatka </h3>
                          <div className="">
                            <h3>
                              <a href="#" target="_blank">
                                <i className="color-white  fa-brands fa-telegram"></i>
                              </a>
                            </h3>

                            <h3>
                              {" "}
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                            </h3>
                            <h3>
                              {" "}
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                              </a>
                            </h3>
                            <h3>
                              <a href="#" target="_blank">
                                {" "}
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </h3>
                            <h3>
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-4">
                      <div>
                        <div>
                          <img
                            src="https://ktu.edu/wp-content/uploads/2018/09/E.V.6-768x768.jpg"
                            alt=""
                          />
                          <h3>Prof. Eugenijus Valatka </h3>
                          <div className="">
                            <h3>
                              <a href="#" target="_blank">
                                <i className="color-white  fa-brands fa-telegram"></i>
                              </a>
                            </h3>

                            <h3>
                              {" "}
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                            </h3>
                            <h3>
                              {" "}
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                              </a>
                            </h3>
                            <h3>
                              <a href="#" target="_blank">
                                {" "}
                                <i className="fa-brands fa-facebook"></i>
                              </a>
                            </h3>
                            <h3>
                              <a href="#" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p>
                    Rektor Universitetning yagona boshqaruv organi boʻlib, uning
                    nomidan ish koʻradi va uni vakil qiladi. Rektorat rektorning
                    maslahat organi hisoblanadi. Rektorat tarkibiga rektor,
                    prorektorlar, fakultet dekanlari , Talabalar vakolatxonasi
                    prezidenti , shuningdek rektor buyrug‘i bilan tayinlanadigan
                    boshqa bo‘lim mudirlari kiradi.
                  </p>
                </div>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s"
                  allowFullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
}


export default InstitutAbout