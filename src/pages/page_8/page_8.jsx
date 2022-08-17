import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useContext } from 'react';
import { useRef } from 'react'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Image from '../../images/marketing.png'
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
                    <div className='page_main'>
                        <div className="row-marketing">
                            <div className="row">
                                <div className="col-lg-10 col-md-12">
                                    <h3>{context[lang].centre.third}</h3>
                                    <div className="tab">
                                        <button className="tablinks" onClick={() => {
                                            tabTwo.current.classList.remove("opened")
                                            tabThree.current.classList.remove("opened")
                                            tabOne.current.classList.add("opened")
                                        }} id="defaultOpen">{context[lang].centre.fifteenth}</button>
                                        <button className="tablinks" onClick={() => {
                                            tabOne.current.classList.remove("opened")
                                            tabThree.current.classList.remove("opened")
                                            tabTwo.current.classList.add("opened")
                                        }} id="defaultOpen">{context[lang].facultet1.b1}</button>
                                        <button className="tablinks" onClick={() => {
                                            tabOne.current.classList.remove("opened")
                                            tabTwo.current.classList.remove("opened")
                                            tabThree.current.classList.add("opened")
                                        }} id="defaultOpen">{context[lang].facultet1.a3}</button>
                                    </div>
                                    <div id="About" ref={tabOne} className="tabcontent opened">
                                        <h3>{context[lang].centre.fifteenth}</h3>
                                        <p>{context[lang].marketing.c1}</p>
                                    </div>

                                    <div id="Functions" ref={tabTwo} className="tabcontent">
                                        <h3>{context[lang].facultet1.b1}</h3>
                                        <ul>
                                            <li>{context[lang].marketing.c2}</li>
                                            <li>{context[lang].marketing.c3}</li>
                                            <li>{context[lang].marketing.c4}</li>
                                            <li>{context[lang].marketing.c5}</li>
                                            <li>{context[lang].marketing.c6}</li>
                                            <li>{context[lang].marketing.c7}</li>
                                            <li>{context[lang].marketing.c8}</li>
                                            <li>{context[lang].marketing.c9}</li>
                                            <li>{context[lang].marketing.c10}</li>
                                            <li>{context[lang].marketing.c11}</li>
                                            <li>{context[lang].marketing.c12}</li>
                                            <li>{context[lang].marketing.c13}</li>
                                        </ul>
                                    </div>
                                    <div id="Management" ref={tabThree} className="tabcontent">
                                        <h3>{context[lang].facultet1.a3}</h3>
                                        <ul>
                                            <li>{context[lang].marketing.c14}</li>
                                            <li>{context[lang].marketing.c15}</li>
                                            <li>{context[lang].marketing.c16}</li>
                                            <li>{context[lang].marketing.c17}</li>
                                            <li>{context[lang].marketing.c18}</li>
                                            <li>{context[lang].marketing.c19}</li>
                                            <li>{context[lang].marketing.c20}</li>
                                            <li>{context[lang].marketing.c21}</li>
                                            <li>{context[lang].marketing.c22}</li>
                                            <li>{context[lang].marketing.c23}</li>
                                            <li>{context[lang].marketing.c24}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="teachers justify-content-between">
                                        <div className="wrapper-personal">
                                            <div className="photo-personal">
                                                <img className="images-personal" src={Image} alt="About us" />
                                                <div className="photo__large">
                                                    <div className="bg-text">
                                                        <span className="degree">{context[lang].facultet6.a42}</span>
                                                        <span className="info">{context[lang].marketing.c25}
                                                            <br />
                                                            <b>{context[lang].bizningManzil.second}</b> (+998 71) 244-79-27
                                                            <br />
                                                            <b>{context[lang].bizningManzil.fourth}</b> tkti_marketing@edu.uz</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="fullname-personal">{context[lang].marketing.c25}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].centre.first}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].centre.third}</a></li>
                            <Link to={'/page/static/get/44'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.bugalter}</a></li>
                            </Link>
                            <Link to={'/page/static/get/9'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/15'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/13'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.sixth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/10'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.seventh}</a></li>
                            </Link>
                            <Link to={'/page/static/get/7'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.eighth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/4'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.nineth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/6'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.tenth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/12'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.eleventh}</a></li>
                            </Link>
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].centre.second}</p></li>
                            <Link to={'/page/static/get/11'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.twelveth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/14'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.thirteenth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/5'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.fourteenth}</a></li>
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
