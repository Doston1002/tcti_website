import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Context as LanguageContext } from '../../Context/Language';
import { useContext } from 'react';
import context from '../../lang/lang';

import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'




function PageStaticOne() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages"><Header /></div>
            <div className="mainsss">
                <div className='page_main'>
                    <h3>{context[lang].underCategory.fourth}</h3>
                    <div className="kafedralar">
                        <div className="kafedra">
                            <Link to={'/page/static/get/18'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.second}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/19'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.first}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/20'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.fourth}</h4>
                                </div>
                            </Link>
                        </div>
                    
                        <div className="kafedra">
                            <Link to={'/page/static/get/22'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.fivth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/23'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.sixth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/24'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.seventh}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/25'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.eighth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/26'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.nineth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/27'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.tenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/28'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.eleventh}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/29'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.twelveth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/30'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.thirteenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/31'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.fourteenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/32'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.fifteenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/33'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.sixteenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/34'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.seventeenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/35'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.eighteenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/36'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.nineteenth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/37'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.twenty}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/38'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.twentyfirst}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/39'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.twentysecond}</h4>
                                </div>
                            </Link>
                        </div>
                       
                        <div className="kafedra">
                            <Link to={'/page/static/get/41'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.twentyfourth}</h4>
                                </div>
                            </Link>
                        </div>
                        <div className="kafedra">
                            <Link to={'/page/static/get/42'} >
                                <div className="kafedra-inner">
                                    <h4>{context[lang].kafedra.twentyfifth}</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Tuzilma</p></li>
                        <li className="nav-ul-li active"><a href=" ">{context[lang].underCategory.fourth}</a></li>
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
                        <Link to={'/page/static/get/litsey'}>
                            <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.eighth}</a></li>
                        </Link>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticOne;
