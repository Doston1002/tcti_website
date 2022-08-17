import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'


function BizningManzil() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">

                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="bizningmanzilwrapper">
                            <div className="bizningmanziltext">
                                <h3>{context[lang].generalInformation.second}</h3>
                                <h4>{context[lang].sub_header.third}: <a href="tel:+998712447849">(+998 71)244-78-49</a></h4><br />
                                <h4>{context[lang].bizningManzil.first}</h4>
                                <p>{context[lang].bizningManzil.sixth}32 100011<br />
                                    <span>{context[lang].bizningManzil.second}</span><a href="tel:+998712447920">(+998-71) 244-79-20</a><br />
                                    <span>{context[lang].bizningManzil.third}</span> (+998-71) 244-79-17 <br />
                                    <span>{context[lang].bizningManzil.fourth}</span> <a href="mailto:txti_rektor@edu.uz">txti_rektor@edu.uz</a>, <a href="mailto:info@tcti.uz">info@tcti.uz</a></p><br />
                                <h4>{context[lang].faculty_names.fourth}</h4>
                                <p>{context[lang].bizningManzil.fifth} Tel. 267-98-32</p><br />
                                <h4>{context[lang].faculty_names.second}</h4>
                                <p>{context[lang].bizningManzil.sixth}36. Tel. (998-71) 244-19-72</p><br />
                                <h4>{context[lang].faculty_names.first}</h4>
                                <p>{context[lang].bizningManzil.sixth}32. Tel. (998-71) 244-92-35</p><br />
                                <h4>{context[lang].faculty_names.third}</h4>
                                <p>{context[lang].bizningManzil.seventh}. Tel. (998-71) 273-64-60</p><br />
                                <h4>{context[lang].bizningManzil.nineth}</h4>
                                <p>{context[lang].bizningManzil.sixth}32.</p><br />
                                <h4>{context[lang].AkademikLitsey.litsey}</h4>
                                <p>{context[lang].bizningManzil.eightth} Tel. (998-71) 221-61-33</p>
                            </div>
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                            <li className="nav-ul-li active"><a href="kafedra">{context[lang].generalInformation.second}</a></li>
                            <Link to={'/page/static/get/univer_haqida'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/otm_ish_reja'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/biz_bn_aloqa'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.fifth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/biz_bn_aloqa'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/otm_ustavi'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.sixth}</a></li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default BizningManzil;