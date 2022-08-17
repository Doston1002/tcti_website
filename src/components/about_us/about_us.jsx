import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import fakultetImg from '../../images/university.png'
import studentImg from '../../images/student.png'
import teacherImg from '../../images/teacher.png'
import partnerImg from '../../images/partners.png'
import directionalImg from '../../images/directional.png'
import doubleImg from '../../images/global-education.png'

function About_us() {
    const { lang, setLang } = useContext(LanguageContext);
    return (
        <>
            <div className="about_us">
                <div className="list-item">
                    <img src={`${fakultetImg}`} alt="" width="100" height="100" />
                    <h2>5</h2>
                    <p>{context[lang].about.first}</p>
                </div>
                <div className="list-item">
                    <img src={`${studentImg}`} alt="" width="100" height="100" />
                    <h2>7300</h2>
                    <p>{context[lang].about.second}</p>
                </div>
                <div className="list-item">
                    <img src={`${teacherImg}`} alt="" width="100" height="100" />
                    <h2>500</h2>
                    <p>{context[lang].about.third}</p>
                </div>
                <div className="list-item">
                    <img src={`${partnerImg}`} alt="" width="100" height="100" />
                    <h2>47</h2>
                    <p>{context[lang].about.fourth}</p>
                </div>
                <div className="list-item">
                    <img src={`${directionalImg}`} alt="" width="100" height="100" />
                    <h2>25</h2>
                    <p>{context[lang].about.sixth}</p>
                </div>
                <div className="list-item">
                    <img src={`${doubleImg}`} alt="" width="100" height="100" />
                    <h2>7</h2>
                    <p>{context[lang].about.seventh}</p>
                </div>
            </div>
        </>
    );
}

export default About_us;
