import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Image from '../../images/d374ecf67a_1555577918.jpg'
import Image2 from '../../images/7a48e85ae2_1614595249.jpg'
import Image3 from '../../images/4f264ae87f_1614598711.jpg'
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
                                    <h3>{context[lang].centre.fourth}</h3>
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
                                        <p>{context[lang].monitoring.m1}</p>
                                        <p>{context[lang].monitoring.m2}</p>
                                        <p>{context[lang].monitoring.m3}</p>
                                    </div>

                                    <div id="Functions" ref={tabTwo} className="tabcontent">
                                        <h3>{context[lang].facultet1.b1}</h3>
                                        <p>{context[lang].monitoring.m4}</p>
                                        <p>{context[lang].monitoring.m5}</p>
                                        <p>{context[lang].monitoring.m6}</p>
                                    </div>


                                    <div id="Management" ref={tabThree} className="tabcontent">
                                        <h3>{context[lang].facultet1.a3}</h3>
                                        <p>{context[lang].monitoring.m7}</p>
                                        <p>{context[lang].monitoring.m8}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="teachers">
                                        <div className="wrapper-personal">
                                            <div className="photo-personal">
                                                <img className="images-personal" src={Image} alt="About us" />
                                                <div className="photo__large">
                                                    <div className="bg-text">
                                                        <span className="degree">{context[lang].facultet6.a42}</span>
                                                        <span className="info">{context[lang].monitoring.m9}
                                                            <b>{context[lang].bizningManzil.second}</b> (71) 244-79-23
                                                            <br />
                                                            <b>{context[lang].bizningManzil.fourth}</b> nazorat@tcti.uz, tkti.nazorat@mail.ru
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="fullname-personal">{context[lang].monitoring.m9}</h6>
                                        </div>
                                        <div className="wrapper-personal">
                                            <div className="photo-personal">
                                                <img className="images-personal" src={Image2} alt="About us" />
                                                <div className="photo__large">
                                                    <div className="bg-text">
                                                        <span className="degree">{context[lang].monitoring.m10}</span>
                                                        <span className="info">{context[lang].monitoring.m11}

                                                            {context[lang].bizningManzil.second} (+99890) 112-50-53
                                                            <br />
                                                            {context[lang].bizningManzil.fourth} sardor6387665@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="fullname-personal">{context[lang].monitoring.m11}</h6>
                                        </div>
                                        <div className="wrapper-personal">
                                            <div className="photo-personal">
                                                <img className="images-personal" src={Image3} alt="About us" />
                                                <div className="photo__large">
                                                    <div className="bg-text">
                                                        <span className="degree">{context[lang].monitoring.m12}</span>
                                                        <span className="info">{context[lang].monitoring.m13}

                                                            {context[lang].bizningManzil.second} (+99894) 664-38-96
                                                            <br />
                                                            {context[lang].bizningManzil.fourth} umarjonovqodirjon@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="fullname-personal">{context[lang].monitoring.m13}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].centre.first}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].centre.fourth}</a></li>
                            <Link to={'/page/static/get/8'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.third}</a></li>
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
                            <Link to={'/page/static/get/44'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].centre.bugalter}</a></li>
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
