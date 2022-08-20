import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image1 from '../../images/fakultet/Organika-dekan.jpg'
import Image2 from '../../images/fakultet/Organika-manaviy-zam dekan.jpg'
import Image3 from '../../images/fakultet/Organika-oquv-zam-dekan.jpg'
import Image4 from '../../images/fakultet/yobtf3.png'
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
                            <div className="col-lg-10 col-md-12">
                                <div className="top-photo-yobkt top-photo_style"></div>
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
                                    }} id="defaultOpen">{context[lang].facultet1.a2}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet2.a7}</button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h4>{context[lang].facultet1.a1}</h4>
                                    <p>{context[lang].facultet2.a1}</p>
                                </div>
                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <h4>{context[lang].facultet1.a5}</h4>
                                    <ul>
                                        <li>- {context[lang].kafedra.eleventh}</li>
                                        <li>- {context[lang].kafedra.nineth}</li>
                                        <li>- {context[lang].kafedra.twelveth}</li>
                                        <li>- {context[lang].kafedra.tenth}</li>
                                        <li>- {context[lang].kafedra.first}</li>
                                    </ul>
                                </div>
                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h4>{context[lang].facultet2.a7}</h4>
                                    <ul>
                                        <h4>{context[lang].facultet2.a8}</h4>
                                        <li>{context[lang].facultet2.a9}</li>
                                        <li>{context[lang].facultet2.a10}</li>
                                        <li>{context[lang].facultet2.a11}</li>
                                        <li>{context[lang].facultet2.a12}</li>
                                        <li>{context[lang].facultet2.a13}</li>
                                    </ul>
                                    <ul>
                                        <h4>{context[lang].facultet2.a15}</h4>
                                        <li>{context[lang].facultet2.a16}</li>
                                        <li>{context[lang].facultet2.a17}</li>
                                        <li>{context[lang].facultet2.a18}</li>
                                        <li>{context[lang].facultet2.a19}</li>
                                        <li>{context[lang].facultet2.a20}</li>
                                        <li>{context[lang].facultet2.a21}</li>
                                        <li>{context[lang].facultet2.a22}</li>
                                        <li>{context[lang].facultet2.a23}</li>
                                    </ul>
                                    <ul>
                                        <h4>{context[lang].facultet2.a24}</h4>
                                        <li>{context[lang].facultet2.a25}</li>
                                        <li>{context[lang].facultet2.a26}</li>
                                        <li>{context[lang].facultet2.a27}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="teachers justify-content-center">
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image1} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a8}</span>
                                                    <span className="info">{context[lang].facultet2.a3}
                                                        <br />
                                                        <b>{context[lang].facultet1.a9}</b>{context[lang].facultet2.a4} 14:00-16:00
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 71 244-19-72
                                                        <br />
                                                        <b>{context[lang].bizningManzil.a1}</b> alishon73@uks.uz
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet2.a2}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image3} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a12}</span>
                                                    <span className="info">
                                                        <b>{context[lang].facultet1.a9}</b> {context[lang].facultet2.a4} 14:00-16:00
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 97 780-19-74 / +99899-883-12-07
                                                        <br />
                                                        <b>{context[lang].bizningManzil.a1}</b> husan_berdiyev85@mail.ru
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet2.a5}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image4} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a12}</span>
                                                    <span className="info">
                                                        <b>{context[lang].facultet1.a9}</b> {context[lang].facultet2.a4} 14:00-16:00
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 97 780-19-74
                                                        <br />
                                                        <b>{context[lang].bizningManzil.a1}</b> mansurm1974@mail.ru
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet2.a29}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image2} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet1.a14}</span>
                                                    <span className="info"><b>{context[lang].facultet1.a9}</b> {context[lang].facultet2.a4} 14:00-16:00
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> 71 244-30-67 / +99893-562-53-77
                                                        <br />
                                                        <b>{context[lang].bizningManzil.a1}</b> djamishid1975s@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet2.a6}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].underCategory.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].faculty_names.second}</a></li>
                            <Link to={'/page/static/get/16'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/mktf'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.third}</a></li>
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
