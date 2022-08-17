import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/oziq-ovqat-sanoat.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'





function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                <div className='page_main'>
                    <div className="row">
                        <div className="col-lg-10 col-md-12">
                            <h3>{context[lang].kafedra.sixth}</h3>
                            <div className="tab">
                                <button className="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf6.p1}
                                </button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf6.p2}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf6.p3}</button>
                            </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h4>{context[lang].kaf6.p4}</h4>
                                <p> {context[lang].kaf6.p5}
                                    <p>{context[lang].kaf6.p6}</p>
                                    <p>{context[lang].kaf6.p7}</p>
                                    <p>{context[lang].kaf6.p8}</p>
                                    <p>{context[lang].kaf6.p9}</p>
                                    <p>{context[lang].kaf6.p10}</p>
                                </p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h4>{context[lang].kaf6.p11}</h4>
                                <p> {context[lang].kaf6.p12}

                                    <p>{context[lang].kaf6.p13}</p>

                                    <p>{context[lang].kaf6.p14}</p>

                                    <p>{context[lang].kaf6.p15}</p>

                                    <p>{context[lang].kaf6.p16}</p>

                                    <p>{context[lang].kaf6.p17}</p>

                                    <p>{context[lang].kaf6.p18}</p>

                                    <p>{context[lang].kaf6.p19}</p>

                                    <p>{context[lang].kaf6.p20}</p>

                                    <p>{context[lang].kaf6.p21}</p>

                                    <p>{context[lang].kaf6.p22}</p>

                                    <p>{context[lang].kaf6.p23}</p>
                                </p>
                            </div>

                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h4>{context[lang].kaf6.p24}</h4>
                                <p>{context[lang].kaf6.p25}
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
                                                <span className="degree">{context[lang].kaf6.p26}</span>
                                                <span className="info">
                                                {context[lang].kaf6.p27}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">  {context[lang].kaf6.p28}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].kaf6.p29}</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">{context[lang].kaf6.p30}</a></li>
                        <Link to={'/page/static/get/18'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p31}</a></li>
                        </Link>
                        <Link to={'/page/static/get/19'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p32}</a></li>
                        </Link>
                        <Link to={'/page/static/get/20'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p33}</a></li>
                        </Link>
                        <Link to={'/page/static/get/21'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p34}</a></li>
                        </Link>
                        <Link to={'/page/static/get/22'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p35}</a></li>
                        </Link>
                        <Link to={'/page/static/get/24'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p36}</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p37}</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p38}</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p39}</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p40}</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p41}</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p42}</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p43}</a></li>
                        </Link>
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p44}</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p45}</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p46}</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p47}</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p48}</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p49}</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p50}</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p51}</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p52}</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p53}</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf6.p54}</a></li>
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
