import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'

function UniverHaqida() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            
            <div className="container-pages">

                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="unv_haqida_text">
                            <h2></h2>
                            <h3>{context[lang].generalInformation.first}</h3>
                            <p>{context[lang].otmHaqida.first}</p><br />
                            <p>{context[lang].otmHaqida.second}</p><br />
                            <p>{context[lang].otmHaqida.third}</p><br />
                            <p>{context[lang].otmHaqida.fourth}</p><br />
                            <p>{context[lang].otmHaqida.fivth}</p><br />
                            <p>{context[lang].otmHaqida.sixth}</p><br />
                            <p>{context[lang].otmHaqida.seventh}</p><br />
                            <p>{context[lang].otmHaqida.eightth}</p><br />
                            <p>{context[lang].otmHaqida.nineth}</p><br />
                            <p>{context[lang].otmHaqida.tenth}</p><br />
                        </div>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].generalInformation.first}</a></li>
                            <Link to={'/page/static/get/otm_ish_reja'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/biz_bn_aloqa'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.fifth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/bizning_manzil'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/aloqa'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/otm_ustavi'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.sixth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default UniverHaqida;