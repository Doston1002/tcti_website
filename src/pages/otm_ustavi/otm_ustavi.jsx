import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'


function OtmUstavi() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages">

                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="otm-ustav-btn-wrapper">
                            <a className='otmustavbtn' href="http://tkti.uz/uploads/5111a3995b_1653399905.pdf" target='_blank'>{context[lang].generalInformation.seventh}</a>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                            <li className="nav-ul-li active"><a href="kafedra">{context[lang].generalInformation.sixth}</a></li>
                            <Link to={'/page/static/get/otm_ish_reja'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/biz_bn_aloqa'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.fifth}</a></li>
                            </Link>
                            <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.second}</a></li>
                            <Link to={'/page/static/get/univer_haqida'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/aloqa'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.fourth}</a></li>
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

export default OtmUstavi;