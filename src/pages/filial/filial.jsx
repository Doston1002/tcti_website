import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRef } from "react";
import { useContext } from "react";
import context from "../../lang/lang";
import { Context as LanguageContext } from "../../Context/Language";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-circle.png";
import Image1 from "../../images/shaxrisabz.jpg";
import Image2 from "../../images/yangiyer.jpg";

function PageStaticAkademikFilial() {
    const tabOne = useRef();
    const tabTwo = useRef();
    const tabThree = useRef();
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="row">
                            <div className="col-lg-10 col-md-12">
                                <h3>{context[lang].Filial.first}</h3>
                                <img className="top-photo_style" src={Image1} alt="About us" />
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
                                        {context[lang].Filial.fourth}
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
                                        {" "}
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
                                        {" "}
                                    </button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h5>{context[lang].Filial.fourth}</h5>
                                    <p>{context[lang].Filial.fivth}</p>
                                    <p>{context[lang].Filial.sixth}</p>
                                    <p>{context[lang].Filial.seventh}</p>
                                    <p>{context[lang].Filial.eighth}</p>
                                    <p>{context[lang].Filial.nineth}</p>
                                    <p>{context[lang].Filial.tenth}</p>
                                    <p>{context[lang].Filial.eleventh}</p>
                                    <p>{context[lang].Filial.twelveth}</p>
                                    <p>{context[lang].Filial.thirteenth}</p>
                                    <p>
                                        {context[lang].Filial.fourteenth}{" "}
                                        <a href="http://stict.uz" target="blank">
                                            http://stict.uz
                                        </a>
                                    </p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <h3></h3>
                                </div>

                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h3> </h3>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-12 mt-5">
                                <img className="top-photo_style" src={Image2} alt="About us" />
                                <h3>{context[lang].Filial.second}</h3>
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
                                        {context[lang].Filial.yf1}
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
                                        {" "}
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
                                        {" "}
                                    </button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h5>{context[lang].Filial.yf1}</h5>
                                    <p>{context[lang].Filial.yf2}</p>
                                    <p>{context[lang].Filial.yf3}</p>
                                    <p>{context[lang].Filial.yf4}</p>
                                    <p>{context[lang].Filial.yf5}</p>
                                    <p>{context[lang].Filial.yf6}</p>
                                    <p>{context[lang].Filial.yf7}</p>
                                    <p>{context[lang].Filial.yf8}</p>
                                    <p>{context[lang].Filial.yf9}</p>
                                    <p>{context[lang].Filial.yf10}</p>
                                    <p>{context[lang].Filial.yf11}</p>
                                    <p>{context[lang].Filial.yf12}</p>
                                    <p>
                                        <p>
                                            {context[lang].Filial.fourteenth}{" "}
                                            <a href="https://tktiyf.uz/">http://stict.uz</a>
                                        </p>
                                    </p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <h3></h3>
                                </div>
                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h3> </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].header.third}</p></li>

                            <li className="nav-ul-li active">
                                <a href=" ">{context[lang].underCategory.sixth}</a>
                            </li>
                            <Link to={"/page/static/get/rectorat"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.first}</a>
                                </li>
                            </Link>
                            <Link to={"/"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.fivth}</a>
                                </li>
                            </Link>
                            <Link to={"/page/static/get/faculties"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.third}</a>
                                </li>
                            </Link>
                            <Link to={"/page/static/get/1"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.second}</a>
                                </li>
                            </Link>
                            <Link to={"/page/static/get/yoshlar"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.seventh}</a>
                                </li>
                            </Link>
                            <Link to={"/page/static/get/litsey"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.eighth}</a>
                                </li>
                            </Link>
                            <Link to={"/page/static/get/3"}>
                                <li className="nav-ul-li">
                                    <a href=" ">{context[lang].underCategory.fourth}</a>
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

export default PageStaticAkademikFilial;