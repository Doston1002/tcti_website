import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import uzNeft from '../../images/UNG.png'
import shurtan from '../../images/shurtan.png'
import uzKor from '../../images/uz-kor.png'
import artel from '../../images/Artel.png'
import enterEngi from '../../images/Enter.png'

function Partners() {
    const { lang, setLang } = useContext(LanguageContext);
    return (
        <>
            <div className="container-fluid">
                <div className="partners">
                    <h2>{context[lang].about.fivth}</h2>
                    <hr />
                    <div className="partners_list">
                        <div className="list-item">
                            <img src={`${uzNeft}`} alt="" width="150" height="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${uzKor}`} alt="" width="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${artel}`} alt="" width="150" height="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${shurtan}`} alt="" width="100" />
                        </div>
                        <div className="list-item">
                            <img src={`${enterEngi}`} alt="" width="220" />
                        </div>

                        <div className="list-item">
                            <img src={`${uzNeft}`} alt="" width="150" height="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${uzKor}`} alt="" width="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${artel}`} alt="" width="150" height="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${shurtan}`} alt="" width="100" />
                        </div>
                        <div className="list-item">
                            <img src={`${enterEngi}`} alt="" width="220" />
                        </div>
                        <div className="list-item">
                            <img src={`${uzNeft}`} alt="" width="150" height="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${uzKor}`} alt="" width="150" />
                        </div>
                        <div className="list-item">
                            <img src={`${artel}`} alt="" width="150" height="150" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Partners;
