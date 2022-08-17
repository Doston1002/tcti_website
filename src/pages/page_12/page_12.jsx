import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useContext } from "react";
import context from "../../lang/lang";
import ParticlesBg from "particles-bg";
import { Context as LanguageContext } from "../../Context/Language";
import Image from "../../images/2a366e578f_1525352911.jpg";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-circle.png";

function PageStaticOne() {
  const tabOne = useRef();
  const tabTwo = useRef();
  const { lang } = useContext(LanguageContext);
  const tabThree = useRef();
  return (
    <>
      <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />

      <div className="container-pages">
        <Header />
        <div className="mainsss">
          <div className="page_main">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <h3>{context[lang].centre.eleventh}</h3>
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
                    {context[lang].facultet1.b1}
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
                    {context[lang].facultet1.a3}
                  </button>
                </div>
                <div id="About" ref={tabOne} className="tabcontent opened">
                  <h3>{context[lang].centre.fifteenth}</h3>
                  <p>{context[lang].sirtqi.sirtqi5}</p>
                  <ul>
                    <li>{context[lang].sirtqi.sirtqi6}</li>
                    <li>{context[lang].sirtqi.sirtqi7}</li>
                    <li>{context[lang].sirtqi.sirtqi8}</li>
                    <li>{context[lang].sirtqi.sirtqi9}</li>
                    <li>{context[lang].sirtqi.sirtqi10}</li>
                    <p>{context[lang].sirtqi.sirtqi11}</p>
                    <p>{context[lang].sirtqi.sirtqi12}</p>
                  </ul>
                </div>

                <div id="Functions" ref={tabTwo} className="tabcontent">
                  <h3>{context[lang].facultet1.b1}</h3>
                  <p>{context[lang].sirtqi.sirtqi13}</p>
                </div>
                <div id="Management" ref={tabThree} className="tabcontent">
                  <h3>{context[lang].facultet1.a3}</h3>
                  <p>{context[lang].sirtqi.sirtqi14}</p>
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
                          <span className="degree">
                            {context[lang].sirtqi.sirtqi1}
                          </span>
                          <span className="info">
                            {context[lang].sirtqi.sirtqi3}
                            <br />
                            Tel: 71 244-79-34
                            <br />
                            E-mail: Buxorov_shuxrat@mail.ru
                            <br />
                            {context[lang].sirtqi.sirtqi4}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h6 className="fullname-personal">
                      {context[lang].sirtqi.sirtqi2}
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
                <a href=" ">{context[lang].centre.eleventh}</a>
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
              <Link to={"/page/static/get/10"}>
                <li className="nav-ul-li">
                  <a href=" ">{context[lang].centre.seventh}</a>
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
