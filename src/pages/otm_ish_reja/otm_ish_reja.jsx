import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'


function OtmIshReja() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">

                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="download-ish-reja-btn-wrapper">
                            <a className="download-ish-reja" download href="http://tkti.uz/uploads/22f0b8682e_1645524762.pdf">{context[lang].otmIshReja.first}</a>
                            <a className="download-ish-reja" download href="http://tkti.uz//uploads/57d491034d_1627660638.pdf">{context[lang].otmIshReja.second}</a>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                            <li className="nav-ul-li active"><a href="kafedra">{context[lang].generalInformation.third}</a></li>
                            <Link to={'/page/static/get/univer_haqida'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/biz_bn_aloqa'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.fifth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/bizning_manzil'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/aloqa'}>
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

export default OtmIshReja;