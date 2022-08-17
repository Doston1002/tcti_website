import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'
import XalqHamk from '../../images/xal-hamk.png'

function XorijiyAbitur() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
    
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <div>
                            <img className="top-photo" src={XalqHamk} alt="About us" />
                        </div>
                        <h4>{context[lang].XorijAbitur.t1}</h4>
                        <div className="text-wrapp">
                            <ul>
                                <li>{context[lang].XorijAbitur.t2}</li>
                                <li>{context[lang].XorijAbitur.t3}</li>
                                <li>{context[lang].XorijAbitur.t4}</li>
                                <li>{context[lang].XorijAbitur.t5}</li>
                                <li>{context[lang].XorijAbitur.t6}</li>
                            </ul>
                            <p>{context[lang].XorijAbitur.t7}</p>
                            <p>{context[lang].XorijAbitur.t8}</p>
                        </div>
                        <h4>{context[lang].XorijAbitur.t9}</h4>
                        <div className="text-wrapp">

                            <h4>{context[lang].XorijAbitur.t10}</h4>
                            <p>{context[lang].XorijAbitur.t11}</p>
                            <p>{context[lang].XorijAbitur.t12}</p>
                            <p>{context[lang].XorijAbitur.t13}</p>
                            <br />
                            <b>{context[lang].XorijAbitur.t14}</b>

                            <b> <a href="https://goo.gl/maps/5wZsSuRJkoVyR7LH8" target="_blank" rel="noopener noreferrer">100011, {context[lang].XorijAbitur.t15}</a></b>
                            <br />
                            <br />
                            <h4>{context[lang].XorijAbitur.t16}</h4>

                            {context[lang].XorijAbitur.t17}
                            <br />
                            {context[lang].XorijAbitur.t18}
                            <br />
                            <h4>{context[lang].XorijAbitur.t19}</h4>

                            {context[lang].XorijAbitur.t20}
                            <br />
                            {context[lang].XorijAbitur.t21}
                            <br />
                            {context[lang].XorijAbitur.t22}
                            <br />
                            <h4>{context[lang].XorijAbitur.t23}</h4>

                            {context[lang].XorijAbitur.t24}
                            <br />
                            {context[lang].XorijAbitur.t25}
                            <br />
                            {context[lang].XorijAbitur.t26}
                            <br />
                            <h4>{context[lang].XorijAbitur.t27}</h4>

                            {context[lang].XorijAbitur.t28}
                            <br />
                            {context[lang].XorijAbitur.t29} +998-93-527-95-00
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].header.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].entrantLinks.first}</a></li>
                            <Link to={'/page/static/get/utishBall'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/NotFound'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.nineth}</a></li>
                            </Link>
                            <Link to={'/page/get/79'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.fourth}</a></li>
                            </Link>
                            <Link to={'/page/get/80'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/TestFanlari'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.sixth}</a></li>
                            </Link>
                            <Link to={'/page/get/83'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.seventh}</a></li>
                            </Link>
                            <Link to={'/page/get/84'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.eighth}</a></li>
                            </Link>
                            <Link to={'/page/get/85'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.tenth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default XorijiyAbitur;
