import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import YoshlarItt from '../../images/litsey_drektori.jpg';
import YoshlarItt2 from '../../images/litsey_orinbosari.png';
import YoshlarItt3 from '../../images/litsey_3.png';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'



function PageStaticAkademiklitsey() {
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
                                <h3>{context[lang].AkademikLitsey.litsey}</h3>
                                <div className="tab">
                                    <button className="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].Akademik_Litsey.first}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].Akademik_Litsey.fivth}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].Akademik_Litsey.twenty}</button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h4>{context[lang].Akademik_Litsey.first}</h4>
                                    <p>{context[lang].Akademik_Litsey.second}</p>
                                    <p>{context[lang].Akademik_Litsey.third}</p>
                                    <p>{context[lang].Akademik_Litsey.fourth}</p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <h4>{context[lang].Akademik_Litsey.fivth}</h4>
                                    <p>{context[lang].Akademik_Litsey.sixth}</p>
                                    <p>{context[lang].Akademik_Litsey.seventh}</p>
                                    <p>{context[lang].Akademik_Litsey.eighth
                                    }</p>
                                </div>

                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h4>{context[lang].Akademik_Litsey.twenty}</h4>
                                    <p>{context[lang].Akademik_Litsey.twentyfirst}</p>
                                    <p>{context[lang].Akademik_Litsey.twentysecond}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="teachers">
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={YoshlarItt} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].Akademik_Litsey.tenth}</span>
                                                    <span className="info"><br />
                                                        {context[lang].Akademik_Litsey.twelveth}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].Akademik_Litsey.eleventh}</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={YoshlarItt2} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].Akademik_Litsey.thirteenth}</span>
                                                    <span className="info">
                                                        {context[lang].Akademik_Litsey.fifteenth}<br />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">Ernazarov Davronbek Javlon o‘g‘li</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={YoshlarItt3} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree">{context[lang].Akademik_Litsey.sixteenth}</span>
                                                    <span className="info">
                                                        {context[lang].Akademik_Litsey.eighteenth}<br />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">{context[lang].Akademik_Litsey.seventeenth}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="litsey-adres">
                            <h5>{context[lang].Akademik_Litsey.nineth}</h5>
                            <h6>{context[lang].bizningManzil.eightth}</h6>
                            <span>Tel: <a href="tel:+998712248717">(99871) 224-87-17,</a>(99871) 221-61-33</span>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Tuzilma</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].underCategory.eighth}</a></li>
                            <Link to={'/page/static/get/rectorat'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.first}</a></li>
                            </Link>
                            <Link to={'/'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/faculties'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/1'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/yoshlar'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.seventh}</a></li>
                            </Link>
                            <Link to={'/page/static/get/filial'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.sixth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/3'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fourth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticAkademiklitsey;
