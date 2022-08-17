import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useContext } from "react";
import context from "../../lang/lang";

import { Context as LanguageContext } from "../../Context/Language";
import Image from "../../images/93809a2de8_1621412188.jpg";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-circle.png";

function PageStaticOne() {
  const tabOne = useRef();
  const tabTwo = useRef();
  const tabThree = useRef();
  const tabFour = useRef();
  const { lang } = useContext(LanguageContext);

  return (
    <>
     
      <div className="container-pages">
        <Header />
        <div className="mainsss">
          <div className="page_main">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <h3>{context[lang].centre.seventh}</h3>
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
                    {context[lang].centre.fifteenth}
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
                    {context[lang].facultet1.a3}
                  </button>
                  <button
                    className="tablinks"
                    onClick={() => {
                        console.log(222);
                      tabOne.current.classList.remove("opened");
                      tabTwo.current.classList.remove("opened");
                      tabThree.current.classList.add("opened");
                    }}
                    id="defaultOpen"
                  >
                    {context[lang].oquvBulimi.oquv30}
                  </button>
                  {/* <button
                    className="tablinks"
                    onClick={() => {
                        console.log(111);
                      tabOne.current.classList.remove("opened");
                      tabTwo.current.classList.remove("opened");
                      tabThree.current.classList.add("opened");
                    }}
                    id="defaultOpen"
                  >
                    {context[lang].oquvBulimi.oquv43}
                  </button> */}
                </div>
                <div id="About" ref={tabOne} className="tabcontent opened">
                  <h3>{context[lang].centre.fifteenth}</h3>
                  <p>{context[lang].oquvBulimi.oquv1}</p>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                  <h3>{context[lang].facultet1.a3}</h3>
                  <ul>
                    <li>{context[lang].oquvBulimi.oquv2}</li>
                    <li>{context[lang].oquvBulimi.oquv3}</li>
                    <li>{context[lang].oquvBulimi.oquv4}</li>
                    <li>{context[lang].oquvBulimi.oquv5}</li>
                    <li>{context[lang].oquvBulimi.oquv6}</li>
                    <li>{context[lang].oquvBulimi.oquv7}</li>
                    <li>{context[lang].oquvBulimi.oquv8}</li>
                    <li>{context[lang].oquvBulimi.oquv9}</li>
                    <li>{context[lang].oquvBulimi.oquv10}</li>
                    <li>{context[lang].oquvBulimi.oquv11}</li>
                    <li>{context[lang].oquvBulimi.oquv12}</li>
                    <li>{context[lang].oquvBulimi.oquv13}</li>
                    <li>{context[lang].oquvBulimi.oquv14}</li>
                    <li>{context[lang].oquvBulimi.oquv15}</li>
                    <li>{context[lang].oquvBulimi.oquv16}</li>
                    <li>{context[lang].oquvBulimi.oquv17}</li>
                    <li>{context[lang].oquvBulimi.oquv18}</li>
                    <li>{context[lang].oquvBulimi.oquv19}</li>
                    <li>{context[lang].oquvBulimi.oquv20}</li>
                    <li>{context[lang].oquvBulimi.oquv21}</li>
                    <li>{context[lang].oquvBulimi.oquv22}</li>
                    <li>{context[lang].oquvBulimi.oquv23}</li>
                    <li>{context[lang].oquvBulimi.oquv24}</li>
                    <li>{context[lang].oquvBulimi.oquv25}</li>
                    <li>{context[lang].oquvBulimi.oquv26}</li>
                    <li>{context[lang].oquvBulimi.oquv27}</li>
                    <li>{context[lang].oquvBulimi.oquv28}</li>
                    <li>{context[lang].oquvBulimi.oquv29}</li>
                  </ul>
                </div>

                <div id="Management" ref={tabThree} className="tabcontent">
                  <h3>{context[lang].oquvBulimi.oquv30}</h3>
                  <p>{context[lang].oquvBulimi.oquv31}</p>
                  <ul>
                    <li>{context[lang].oquvBulimi.oquv32}</li>
                    <li>{context[lang].oquvBulimi.oquv33}</li>
                    <li>{context[lang].oquvBulimi.oquv34}</li>
                    <li>{context[lang].oquvBulimi.oquv35}</li>
                    <li>{context[lang].oquvBulimi.oquv36}</li>
                    <li>{context[lang].oquvBulimi.oquv37}</li>
                    <li>{context[lang].oquvBulimi.oquv38}</li>
                    <li>{context[lang].oquvBulimi.oquv39}</li>
                    <li>{context[lang].oquvBulimi.oquv40}</li>
                    <li>{context[lang].oquvBulimi.oquv41}</li>
                    <li>{context[lang].oquvBulimi.oquv42}</li>
                  </ul>
                  <h3>{context[lang].oquvBulimi.oquv43}</h3>
                  <ul>
                    <li>{context[lang].oquvBulimi.oquv44}</li>
                    <li>{context[lang].oquvBulimi.oquv45}</li>
                    <li>{context[lang].oquvBulimi.oquv46}</li>
                    <li>{context[lang].oquvBulimi.oquv47}</li>
                    <li>{context[lang].oquvBulimi.oquv48}</li>
                    <li>{context[lang].oquvBulimi.oquv49}</li>
                    <li>{context[lang].oquvBulimi.oquv50}</li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <div className="teachers justify-content-start">
                  <div className="wrapper-personal">
                    <div className="photo-personal">
                      <img className="images-personal" src={Image} alt="About us" />
                      <div className="photo__large">
                        <div className="bg-text">
                          <span className="degree">{context[lang].facultet6.a42}</span>
                          <span className="info">
                            tel: 71 244–79–34; <br />
                            E-mail: rashidxabibullayev@gmail.com.
                          </span>
                        </div>
                      </div>
                    </div>
                    <h6 className="fullname-personal">
                      {context[lang].oquvBulimi.oquv51}
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
                  <img src={`${Logo}`} alt="" />
                  {context[lang].centre.first}
                </p>
              </li>
              <li className="nav-ul-li active">
                <a href=" ">{context[lang].centre.seventh}</a>
              </li>
              <Link to={"/page/static/get/9"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.fourth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/8"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.third}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/13"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.sixth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/12"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.eleventh}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/7"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.eighth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/4"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.nineth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/6"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.tenth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/15"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.fivth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/44"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.bugalter}</a>
                </li>
              </Link>
              <li className="nav-ull-header">
                <p>
                  {" "}
                  <img src={`${Logo}`} alt="" />
                  {context[lang].centre.second}
                </p>
              </li>
              <Link to={"/page/static/get/11"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.twelveth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/14"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.thirteenth}</a>
                </li>
              </Link>
              <Link to={"/page/static/get/5"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.fourteenth}</a>
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
