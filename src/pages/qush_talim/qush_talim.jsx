import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/fakultet/qush-talim-dekan.png'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useContext } from 'react';

function PageStaticQoshTalim() {
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
                                <div className="top-photo-double top-photo_style"></div>
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
                                    }} id="defaultOpen">{context[lang].facultet6.a1}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet6.a2}</button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h4>{context[lang].centre.fifteenth}</h4>
                                    <p>{context[lang].facultet6.a3}</p>
                                    <p>{context[lang].facultet6.a4}</p>
                                    <p>{context[lang].facultet6.a5}</p>
                                    <p>{context[lang].facultet6.a6}</p>
                                    <p>{context[lang].facultet6.a7}</p>
                                </div>
                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <p>{context[lang].facultet6.a8}</p>
                                    <p>{context[lang].facultet6.a9}</p>
                                    <p>{context[lang].facultet6.a10}</p>
                                    <p>{context[lang].facultet6.a11}</p>
                                    <p>{context[lang].facultet6.a12}</p>
                                </div>
                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h4>{context[lang].facultet6.a13}</h4>
                                    <h5>{context[lang].facultet6.a14}</h5>
                                    <ul>
                                        <li>{context[lang].facultet6.a15};</li>
                                        <li>{context[lang].facultet6.a16};</li>
                                        <li>{context[lang].facultet6.a17}.</li>
                                    </ul>
                                    <h5>{context[lang].facultet6.a18}</h5>
                                    <ul>
                                        <li>{context[lang].facultet6.a17}.</li>
                                    </ul>
                                    <h4>{context[lang].facultet6.a20}</h4>
                                    <h5>{context[lang].facultet6.a14}</h5>
                                    <ul>
                                        <li>{context[lang].facultet6.a22}</li>
                                        <li>{context[lang].facultet6.a23}</li>
                                        <li>{context[lang].facultet6.a24}</li>

                                        <h5>{context[lang].facultet6.a18}</h5>

                                        <li>{context[lang].facultet6.a31}</li>
                                        <li>{context[lang].facultet6.a27}</li>
                                        <li>{context[lang].facultet6.a33}.</li>

                                        <h4>{context[lang].facultet6.a29}</h4>
                                        <h5>{context[lang].facultet6.a18}</h5>
                                        <li>{context[lang].facultet6.a31}</li>
                                        <li>{context[lang].facultet6.a27}</li>
                                        <li>{context[lang].facultet6.a33}.</li>

                                        <h4>{context[lang].facultet6.a34}</h4>
                                        <h5>{context[lang].facultet6.a34}</h5>
                                        <li>{context[lang].facultet6.a36};</li>
                                        <li>{context[lang].facultet6.a37}</li>
                                        <li>{context[lang].facultet6.a38}</li>
                                        <li>{context[lang].facultet6.a39}</li>
                                        <li>{context[lang].facultet6.a40}</li>
                                        <li>{context[lang].facultet6.a41}</li>
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
                                                    <span className="degree">{context[lang].facultet6.a42}</span>
                                                    <span className="info">
                                                        <h6>{context[lang].facultet2.a3}</h6>
                                                        <br />
                                                        <b>{context[lang].bizningManzil.second}</b> +998 99 819 09 79
                                                        <br />
                                                        <b>{context[lang].bizningManzil.fourth}</b> a_shan@bk.ru
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].facultet6.a43}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].underCategory.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].faculty_names.sixth}</a></li>
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
                            <Link to={'/page/static/get/vinoch'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].faculty_names.fivth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticQoshTalim;
