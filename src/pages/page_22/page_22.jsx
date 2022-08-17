import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/inf_1.jpg'
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
                            <h3>{context[lang].kafedra.fivth}</h3>
                            <div className="tab">
                                <button className="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf5.p1}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf5.p2}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf5.p3}</button>
                            </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h4>{context[lang].kaf5.p4}</h4>
                                <p>  {context[lang].kaf5.p5}
                                </p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h4>{context[lang].kaf5.p6}</h4>
                                <p> {context[lang].kaf5.p7}
                                </p>
                            </div>

                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h4>{context[lang].kaf5.p8}</h4>
                                <p>{context[lang].kaf5.p9}
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
                                                <span className="degree">{context[lang].kaf5.p10}</span>
                                                <span className="info">
                                                {context[lang].kaf5.p11}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf5.p12}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].kaf5.p13}</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">{context[lang].kaf5.p14}</a></li>
                        <Link to={'/page/static/get/18'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p15}</a></li>
                        </Link>
                        <Link to={'/page/static/get/19'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p16}</a></li>
                        </Link>
                        <Link to={'/page/static/get/20'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p17}</a></li>
                        </Link>
                        <Link to={'/page/static/get/21'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p18}</a></li>
                        </Link>
                        <Link to={'/page/static/get/23'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p19}</a></li>
                        </Link>
                        <Link to={'/page/static/get/24'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p20}</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p21}</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p22}</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p23}</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p24}</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p25}</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p26}</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p27}</a></li>
                        </Link>
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p28}</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p29}</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p30}</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p31}</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p32}</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p33}</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p34}</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p35}</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p36}</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p37}</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf5.p38}</a></li>
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
