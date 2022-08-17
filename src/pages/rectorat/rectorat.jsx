import Header from '../../components/header/header';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import ParticlesBg from 'particles-bg';
import ImageRectorat1 from '../../images/rectorat/Rector.jpeg';
import ImageRectorat2 from '../../images/rectorat/Oquv-pro-rector.jpg';
import ImageRectorat3 from '../../images/rectorat/Ilmiy-pro-rector.jpg';
import ImageRectorat4 from '../../images/rectorat/Moliya-pro-rectori.jpg';
import ImageRectorat5 from '../../images/rectorat/Manviy-pro-rector.jpg';
import Logo from '../../images/logo-circle.png';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';

import '../../pages/rectorat/rektorat.css';

function PageStaticRectorat() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
          
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <h3>{context[lang].underCategory.first}</h3>
                        <div className="container-rektorat">
                            <div className="wrapper-cards">
                                <div className="card-rektorat">
                                    <Link to={'/page/static/get/rector'}>
                                        <img src={ImageRectorat1} alt="rector" />
                                        <h4>{context[lang].rahbariyat.sixth}</h4>
                                        <p>{context[lang].rahbariyat.first}</p>
                                            {/* <a href="https://www.instagram.com/b.usmonov_/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="https://www.facebook.com/botir.usmonov.5" target="_blank" rel="noopener noreferrer">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a> */}
                                        {/* <a href=" "><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i></a> */}
                                    </Link>
                                </div>
                                <div className="card-rektorat">
                                    <Link to={'/page/static/get/oquvProrekt'}>
                                        <img src={ImageRectorat2} alt="prorector1" />
                                        <h4>{context[lang].rahbariyat.seventh}</h4>
                                        <p>{context[lang].rahbariyat.second}</p>
                                        {/* <a href=" "><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i></a> */}
                                    </Link>
                                </div>
                                <div className="card-rektorat">
                                    <Link to={'/page/static/get/IlmiyProrektor'}>
                                        <img src={ImageRectorat3} alt="prorector" />
                                        <h4>{context[lang].rahbariyat.eighth}</h4>
                                        <p>{context[lang].rahbariyat.third}</p>
                                        {/* <a href=" "><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i></a> */}
                                    </Link>
                                </div>
                                <div className="card-rektorat">
                                    <Link to={'/page/static/get/MoliyaProrektor'}>
                                        <img src={ImageRectorat4} alt="prorector" />
                                        <h4>{context[lang].rahbariyat.nineth}</h4>
                                        <p>{context[lang].rahbariyat.fourth}</p>
                                        {/* <a href=" "><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i></a> */}
                                    </Link>
                                </div>
                                <div className="card-rektorat">
                                    <Link to={'/page/static/get/RectorPageManav'}>
                                        <img src={ImageRectorat5} alt="prorector4" />
                                        <h4>{context[lang].rahbariyat.tenth}</h4>
                                        <p>{context[lang].rahbariyat.fifth}</p>
                                        {/* <a href=" "><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i></a> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Tuzilma</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].underCategory.first}</a></li>
                            <Link to={'/page/static/get/faculties'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/3'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.fivth}</a></li>
                            </Link>
                            <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.seventh}</a></li>
                            <Link to={'/page/static/get/1'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].underCategory.second}</a></li>
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

export default PageStaticRectorat;
