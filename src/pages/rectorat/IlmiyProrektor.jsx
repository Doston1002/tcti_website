
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ParticlesBg from 'particles-bg'
import ImageRector from '../../images/rectorat/Ilmiy-pro-rector.jpg'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import '../../pages/rectorat/style-rectorat.css';

function RectorPageOquv() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
            
            <div className="container-pages"><Header /></div>

            <div className="container-rektor">
                <div className="about">
                    <div className="about-text">
                        <h2>{context[lang].rahbariyat.eighth}</h2>
                        <p>{context[lang].rahbariyat.third}<a href=" "><i className="fa-brands fa-facebook"></i></a> <a href="#"><i className="fa-brands fa-instagram"></i></a></p>
                        <p className='info'>{context[lang].polatov.p1}</p>
                    </div>
                    <div className="wrapper">
                        <div className="parent-tab">
                            <input type="radio" name="tab" id="tab-1" />
                            <label for="tab-1">
                                <span>{context[lang].polatov.p2}</span>
                                <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div className="content">
                                <p>{context[lang].polatov.p3}</p>
                                <p>{context[lang].polatov.p4}</p>
                                <p> {context[lang].polatov.p5}</p>
                                <p>{context[lang].polatov.p6}</p>
                                <p>{context[lang].polatov.p7}</p>
                                
                            </div>
                        </div>
                        <div className="parent-tab">
                            <input type="radio" name="tab" id="tab-2" />
                            <label for="tab-2">
                                <span>{context[lang].polatov.p8}</span>
                                <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div className="content">
                                <ul>
                                    <li>{context[lang].polatov.p9}</li>
                                    <li>{context[lang].polatov.p10}</li>
                                    <li>{context[lang].polatov.p11}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="parent-tab tab-3">
                            <input type="radio" name="tab" id="tab-3" />
                            <label for="tab-3" className="tab-3">
                                <span>{context[lang].polatov.p12}</span>
                                <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div className="content">
                                <ul>
                                    <li>{context[lang].polatov.p13}</li>
                                    <li>{context[lang].polatov.p14}</li>
                                    <li>{context[lang].polatov.p15}</li>
                                    <li>{context[lang].polatov.p16}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="parent-tab">
                            <input type="radio" name="tab" id="tab-6" />
                            <label for="tab-6">
                                <span>{context[lang].polatov.p17}</span>
                                <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                            </label>
                            <div className="content">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo">
                    <img src={ImageRector} />
                    <p><i className="fa-solid fa-mobile-screen-button"></i>+998712447924</p>
                    <a href=" "><i className="fa-solid fa-envelope"></i>{context[lang].polatov.p18}</a>
                    <p><i className="fa-solid fa-location-dot"></i>{context[lang].polatov.p19}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RectorPageOquv;
