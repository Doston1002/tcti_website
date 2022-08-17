import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/IMG_4792.JPG'
import Image3 from '../../images/cc7c09bf7d_1505135148.jpg'
import Image4 from '../../images/dh.jpg'
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
                            <h3>{context[lang].kafedra.first}</h3>
                            <div className="tab">
                                <button className="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf2.p1}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf2.p2}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kaf2.p3}</button>
                            </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h3>{context[lang].kaf2.p4}</h3>
                                <p>    {context[lang].kaf2.p5}
                                </p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h3>{context[lang].kaf2.p6}</h3>
                                <p>{context[lang].kaf2.p7}
                                </p>
                            </div>

                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>{context[lang].kaf2.p8}</h3>
                                <p> {context[lang].kaf2.p9}
                                </p>
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
                                                <span className="degree">{context[lang].kaf2.p10}</span>
                                                <span className="info">
                                                {context[lang].kaf2.p11}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf2.p12}</h6>
                                </div>

                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image3} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf2.p13}</span>
                                                <span className="info">{context[lang].kaf2.p14} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf2.p15}</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image4} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kaf2.p16}</span>
                                                <span className="info">{context[lang].kaf2.p17}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">{context[lang].kaf2.p18}</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].kaf2.p19}</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">{context[lang].kaf2.p20}</a></li>
                        <Link to={'/page/static/get/18'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p21}</a></li>
                        </Link>
                        <Link to={'/page/static/get/20'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p22}</a></li>
                        </Link>
                        <Link to={'/page/static/get/21'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p23}</a></li>
                        </Link>
                        <Link to={'/page/static/get/22'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p24}</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p25}</a></li>
                        </Link>
                        <Link to={'/page/static/get/24'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p26}</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p27}</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p28}</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p29}</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p30}</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p31}</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p32}</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p33}</a></li>
                        </Link>
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p34}</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p35}</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p36}</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p37}</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p38}</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p39}</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p40}</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p41}</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p42}</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p43}</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kaf2.p44}</a></li>
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
