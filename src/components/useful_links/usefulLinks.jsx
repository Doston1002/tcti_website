import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import uzEdu from '../../images/eduuz.jpg'
import lexUz from '../../images/lexuz.jpg'
import dtm from '../../images/DTM.jpg'
import yoshItt from '../../images/YI.jpg'
import scopus from '../../images/scopus.jpg'
import ziyoNetUz from '../../images/ziyonet.jpg'

function UsefulLinks() {
    const { lang, setLang } = useContext(LanguageContext);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="useful">
                            <h2>{context[lang].about.eighth}</h2>
                            <hr />
                            <div className="useful_list">
                                <div className="useful-item">
                                    <a href="https://edu.uz/uz" target="_blank" rel="noopener noreferrer">
                                        <img src={`${uzEdu}`} href="https://edu.uz/uz" className="useful_img" alt="edu-uz" />
                                    </a>
                                </div>
                                <div className="useful-item">
                                    <a href="https://lex.uz/uz/" target="_blank" rel="noopener noreferrer">
                                        <img src={`${lexUz}`} className="useful_img" alt="lexuz" />
                                    </a>
                                </div>
                                <div className="useful-item">
                                    <a href="http://dtm.uz/" target="_blank" rel="noopener noreferrer">
                                        <img src={`${dtm}`} className="useful_img" alt="DTM" />
                                    </a>
                                </div>
                                <div className="useful-item">
                                    <a href="http://yi.uz/" target="_blank" rel="noopener noreferrer">
                                        <img src={`${yoshItt}`} className="useful_img" alt="Yosh-itt" />
                                    </a>
                                </div>
                                <div className="useful-item">
                                    <a href="https://www.scopus.com/search/form.uri?display=basic#basic" target="_blank" rel="noopener noreferrer">
                                        <img src={`${scopus}`} className="useful_img" alt="scopus" />
                                    </a>
                                </div>
                                <div className="useful-item">
                                    <a href="http://ziyonet.uz/" target="_blank" rel="noopener noreferrer">
                                        <img src={`${ziyoNetUz}`} className="useful_img" alt="ziyonet" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default UsefulLinks;
