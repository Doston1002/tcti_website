
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'
import ImageRector from '../../images/rectorat/Manviy-pro-rector.jpg'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import '../../pages/rectorat/style-rectorat.css';

function RectorPageManav() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
    
            <div className="container-pages"><Header /></div>

            <div className="container-rektor">
                <div className="about">
                    <div className="about-text">
                        <h2>{context[lang].rahbariyat.tenth}</h2>
                        <p>{context[lang].rahbariyat.fifth}  <a href=" "><i className="fa-brands fa-facebook"></i></a> <a href=" "><i className="fa-brands fa-instagram"></i></a></p>
                        <p className='info'>{context[lang].prormanav.f1}</p>
                    </div>
                    <div className="wrapper">
                        <div className="parent-tab">
                            <input type="radio" name="tab" id="tab-1" />
                            <label for="tab-1">
                                <span>{context[lang].prormanav.f2}</span>
                                <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div className="content">
                                <p>{context[lang].prormanav.f3}</p>
                                <p>{context[lang].prormanav.f4}</p>
                                <p>{context[lang].prormanav.f5}</p>

                            </div>
                        </div>
                        <div className="parent-tab">
                            <input type="radio" name="tab" id="tab-2" />
                            <label for="tab-2">
                                <span>{context[lang].prormanav.f11}</span>
                                <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div className="content">
                                <ul>
                                    <li>{context[lang].prormanav.f7} </li>
                                    <li>{context[lang].prormanav.f8}</li>
                                    <li>{context[lang].prormanav.f9}</li>
                                    <li>{context[lang].prormanav.f10}</li>
                                    <li>{context[lang].prormanav.f11}</li>
                                    <li>{context[lang].prormanav.f12}</li>
                                    <li>{context[lang].prormanav.f13}</li>
                                    <li>{context[lang].prormanav.f14}</li>
                                    <li>{context[lang].prormanav.f15}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo">
                    <img src={ImageRector} />
                    <p><i className="fa-solid fa-mobile-screen-button"></i>Tel: (998 71) 244-79-24</p>
                    <a href="#"><i className="fa-solid fa-envelope"></i>{context[lang].prormanav.f16}</a>
                    <p><i className="fa-solid fa-location-dot"></i> {context[lang].prormanav.f17}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RectorPageManav;
