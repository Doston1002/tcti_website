import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo.png'


function PageStaticOne() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <div className="bulim-va-markaz">
                            <h2 className='title_centres'>{context[lang].centre.first}</h2>
                            <hr />
                            <div className="bulimlar">
                                <div className="bulim">
                                    <Link to={'/page/static/get/8'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.third}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/9'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.fourth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/15'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.fivth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/13'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.sixth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/10'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.seventh}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/7'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.eighth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/4'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.nineth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/6'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.tenth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/12'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.eleventh}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/44'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.bugalter}</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bulim-va-markaz">
                            <h2 className='title_centres'>{context[lang].centre.second}</h2>
                            <hr />
                            <div className="bulimlar">
                                <div className="bulim">
                                    <Link to={'/page/static/get/11'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.twelveth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/14'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.thirteenth}</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bulim">
                                    <Link to={'/page/static/get/5'}>
                                        <div className="bulim-inner">
                                            <h4>{context[lang].centre.fourteenth}</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Tuzilma</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].underCategory.second}</a></li>
                            <Link to={'/page/static/get/faculties'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/NotFound'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/yoshlar'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.seventh}</a></li>
                            </Link>
                            <Link to={'/page/static/get/rectorat'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.first}</a></li>
                            </Link>
                            <Link to={'/page/static/get/3'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fourth}</a></li>
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
            </div>

            <Footer />
        </>
    );
}

export default PageStaticOne;
