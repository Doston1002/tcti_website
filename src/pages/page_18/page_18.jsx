import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/a.jpg'
import Image2 from '../../images/b.jpg'
import Image3 from '../../images/c.jpg'
import Image4 from '../../images/d.jpg'
import Image5 from '../../images/e.jpg'
import Image6 from '../../images/f.jpg'
import Image7 from '../../images/j.jpg'
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
                    <div className="row">
                        <div className="col-lg-10 col-md-12">
                            <h3>{context[lang].kafedra.second}</h3>
                            <div className="tab">
                                <button className="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf1.p1}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf1.p2}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf1.p3}</button>
                            </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h3>{context[lang].kaf1.p4}</h3>
                                <p>  {context[lang].kaf1.p5}
                                </p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h3>{context[lang].kaf1.p6}</h3>
                                <p> {context[lang].kaf1.p7}
                                </p>
                            </div>

                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>{context[lang].kaf1.p8}</h3>
                                <p>{context[lang].kaf1.p9}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="teachers">
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image1} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p10}</span>
                                                <span className="info">{context[lang].kaf1.p11}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p12}</h6>
                                </div>

                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image2} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p13} </span>
                                                <span className="info">{context[lang].kaf1.p14}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p15}</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image3} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p16}</span>
                                                <span className="info">{context[lang].kaf1.p17}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p18}</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image4} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p19}</span>
                                                <span className="info">{context[lang].kaf1.p20}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p21}</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image5} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p22}</span>
                                                <span className="info">{context[lang].kaf1.p23}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p24}</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image6} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p25}</span>
                                                <span className="info">{context[lang].kaf1.p26}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p27}</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image7} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf1.p28}</span>
                                                <span className="info">{context[lang].kaf1.p29}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf1.p30}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].kaf1.p31}</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">{context[lang].kaf1.p32}</a></li>
                        <Link to={'/page/static/get/19'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p33}</a></li>
                        </Link>
                        <Link to={'/page/static/get/20'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p34}</a></li>
                        </Link>
                        
                        <Link to={'/page/static/get/22'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p36}</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p37}</a></li>
                        </Link>
                        <Link to={'/page/static/get/24'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p38}</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p39}</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p40}</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p41}</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p42}</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p43}</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p44}</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p45}</a></li>
                        </Link>
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p46}</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p47}</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p48}</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p49}</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p50}</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p51}</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p52}</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p53}</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p54}</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p55}</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf1.p56}</a></li>
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
