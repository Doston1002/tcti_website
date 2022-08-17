import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'


function BizBnAloqa() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={150} bg={true} />
            <div className="container-pages">

                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="bizbnaloqawrapper">
                            <h2>{context[lang].generalInformation.fifth}</h2><br />
                            <h4>{context[lang].faculty_names.third} - <a href="tel:+998712736460">+998 71 273 64 60</a></h4><br />
                            <h4>{context[lang].faculty_names.first} - <a href="tel:+998712449235">+998 71 244 92 35</a></h4><br />
                            <h4>{context[lang].faculty_names.fourth} - <a href="tel:+998712672368">+998 71 267 23 68</a></h4><br />
                            <h4>{context[lang].faculty_names.second} - <a href="tel:+998712443067">+998 71 244 30 67</a></h4><br />
                            <h4>{context[lang].faculty_names.fivth} - <a href="tel:++998712071568">+998 71 207 15 68</a></h4><br />
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                            <li className="nav-ul-li active"><a href="kafedra">{context[lang].generalInformation.fifth}</a></li>
                            <Link to={'/page/static/get/univer_haqida'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/otm_ish_reja'}>
                                <li className="nav-ul-li"><a href="kafedra">{context[lang].generalInformation.third}</a></li>
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

export default BizBnAloqa;