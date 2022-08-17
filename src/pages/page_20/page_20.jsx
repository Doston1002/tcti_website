import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/1a.png'
import Image2 from '../../images/2b.png'
import Image3 from '../../images/3c.png'
import Image4 from '../../images/4d.png'
import Image5 from '../../images/5e.png'
import Image6 from '../../images/6f.png'
import Image7 from '../../images/7h.png'
import Image8 from '../../images/8j.png'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'




function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
      <>
        <div className="container-pages">
          <Header />
          <div className="mainsss">
            <div className="page_main">
              <div className="row">
                <div className="col-lg-10 col-md-12">
                  <h3>{context[lang].kafedra.fourth}</h3>
                  <div className="tab">
                    <button
                      className="tablinks"
                      onClick={() => {
                        tabTwo.current.classList.remove("opened");
                        tabThree.current.classList.remove("opened");
                        tabOne.current.classList.add("opened");
                      }}
                      id="defaultOpen"
                    >
                      {context[lang].kaf3.p1}
                    </button>
                    <button
                      className="tablinks"
                      onClick={() => {
                        tabOne.current.classList.remove("opened");
                        tabThree.current.classList.remove("opened");
                        tabTwo.current.classList.add("opened");
                      }}
                      id="defaultOpen"
                    >
                      {context[lang].kaf3.p2}
                    </button>
                    <button
                      className="tablinks"
                      onClick={() => {
                        tabOne.current.classList.remove("opened");
                        tabTwo.current.classList.remove("opened");
                        tabThree.current.classList.add("opened");
                      }}
                      id="defaultOpen"
                    >
                      {context[lang].kaf3.p3}
                    </button>
                  </div>
                  <div id="About" ref={tabOne} className="tabcontent opened">
                    <h4>{context[lang].kaf3.p4}</h4>
                    <p> {context[lang].kaf3.p5}</p>
                  </div>

                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h4>{context[lang].kaf3.p6}</h4>
                    <p> {context[lang].kaf3.p7}</p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h4>{context[lang].kaf3.p8}</h4>
                    <p>{context[lang].kaf3.p9}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="teachers">
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image1}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p10}</span>
                            <span className="info">{context[lang].kaf3.p11}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p12}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image2}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p13}</span>
                            <span className="info">{context[lang].kaf3.p14}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p15}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image3}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p16}</span>
                            <span className="info">{context[lang].kaf3.p17}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p18}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image4}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p19}</span>
                            <span className="info">{context[lang].kaf3.p20}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p21}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image5}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p22}</span>
                            <span className="info">{context[lang].kaf3.p23}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p24}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image6}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p25}</span>
                            <span className="info">{context[lang].kaf3.p26}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p27}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image7}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p28}</span>
                            <span className="info">{context[lang].kaf3.p29}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p30}
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image8}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">{context[lang].kaf3.p31}</span>
                            <span className="info">{context[lang].kaf3.p32}</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {context[lang].kaf3.p33}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-side">
              <ul className="nav-ull">
                <li className="nav-ull-header">
                  <p>
                    {" "}
                    <img src={`${Logo}`} alt="" /> {context[lang].kaf3.p34}
                  </p>
                </li>
                <li className="nav-ul-li active">
                  <a href="kafedra">{context[lang].kaf3.p35}</a>
                </li>
                <Link to={"/page/static/get/18"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p36}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/19"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p37}</a>
                  </li>
                </Link>
               
                <Link to={"/page/static/get/22"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p39}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/13"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p40}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/24"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p41}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/25"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p42}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/26"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p43}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/27"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p44}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/28"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p45}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/29"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p46}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/30"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p47}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/31"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p48}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/32"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p49}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/33"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p50}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/34"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p51}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/35"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p52}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/36"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p53}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/37"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p54}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/38"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p55}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/39"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p56}</a>
                  </li>
                </Link>
                
                <Link to={"/page/static/get/41"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p58}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/42"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p59}</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default PageStaticOne;
