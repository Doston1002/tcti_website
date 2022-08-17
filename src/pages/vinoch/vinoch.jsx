import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/fakultet/vtsu-dekan.png'
import Image2 from '../../images/fakultet/vino-zam.png'
import Image3 from '../../images/fakultet/Feruza-zam.png'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useContext } from 'react';

function PageStaticVinoUzum() {
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
                                <div className="top-photo-vtsuf top-photo_style"></div>
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
                                    }} id="defaultOpen">{context[lang].facultet4.a1}</button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h4>{context[lang].facultet1.a1}</h4>
                                    <p>{context[lang].facultet5.a1}
                                        <br />
                                        {context[lang].facultet5.a2}</p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <h5>{context[lang].facultet1.a5}</h5>
                                    <ul>
                                        <li>{context[lang].kafedra.fourth};</li>
                                        <li>{context[lang].kafedra.twentyfifth};</li>
                                        {/* <li>{context[lang].kafedra.fourth}.</li> */}
                                    </ul>
                                    <p>{context[lang].facultet5.a3}</p>
                                </div>
                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h4>{context[lang].facultet4.a1}</h4>
                                    <ul>
                                        <li>{context[lang].facultet5.a4};</li>
                                        <li>{context[lang].facultet5.a5};</li>
                                        <li>{context[lang].facultet5.a6}.</li>
                                    </ul>
                                    <h4>{context[lang].facultet4.a14}</h4>
                                    <ul>
                                        <li>{context[lang].facultet5.a7}</li>
                                        <li>{context[lang].facultet5.a8}</li>
                                        <li>{context[lang].facultet5.a9}</li>
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
                                                    <span className="info">
                                                        <h6>{context[lang].facultet3.a6}</h6>
                                                        <b>{context[lang].facultet1.a9}</b> {context[lang].facultet4.a23} 14:00-16:00
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b>
                                                        <br />
                                                        <b>{context[lang].bizningManzil.fourth}</b>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet5.a10}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image3} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet4.a24}</span>
                                                    <span className="info"><b></b>
                                                        <br />
                                                        <b>Tel:</b>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet5.a11}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image2} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].facultet4.a24}</span>
                                                    <span className="info"><b></b>
                                                        <br />
                                                        <b>Tel:</b>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet5.a12}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].underCategory.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].faculty_names.fivth}</a></li>
                            <Link to={'/page/static/get/16'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/17'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/mktf'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/nmktf'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.fourth}</a></li>
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

export default PageStaticVinoUzum;
