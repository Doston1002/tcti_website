import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'

import Image1 from '../../images/fakultet/mkt-1.jpg'
import Image2 from '../../images/fakultet/mkt-2.jpg'
import Image3 from '../../images/fakultet/mkt-3.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useContext } from 'react';

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
                        <div className="row">
                            <div className="col-lg-10 col-md-12 col-sm-12">
                                <div className="top-photo-mktf top-photo_style"></div>
                                <div className="tab">
                                    <button className="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a1}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a3}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.b1}</button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h4>{context[lang].facultet1.a1}</h4>
                                    <p>{context[lang].facultet3.a1}</p>
                                    <p>{context[lang].facultet3.a2}</p>
                                    <p>{context[lang].facultet3.a3}</p>
                                    <p>{context[lang].facultet3.a4}</p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <p>{context[lang].facultet3.a9}</p>
                                </div>
                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <p>{context[lang].facultet3.a10}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="teachers justify-content-center">
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image1} alt="" />

                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a8}</span>
                                                    <span className="info">{context[lang].facultet3.a6}

                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 71 273 02 96
                                                        <br />
                                                        <b>{context[lang].bizningManzil.fourth}</b> tkti.mktf@gmail.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet3.a5}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image2} alt="" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a12}</span>
                                                    <span className="info">

                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 71 244 60 64
                                                        <br />
                                                        <b>{context[lang].bizningManzil.fourth}</b> ilhomjonabdulakimov@gmail.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet3.a7}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image3} alt="" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a14}</span>
                                                    <span className="info">
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 71 244 60 64
                                                        <br />
                                                        <b>{context[lang].bizningManzil.fourth}</b> behzod.poyanov@mail.ru</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet3.a8}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].underCategory.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].faculty_names.third}</a></li>
                            <Link to={'/page/static/get/16'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/17'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/nmktf'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/vinoch'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/qush_talim'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.sixth}</a></li>
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
