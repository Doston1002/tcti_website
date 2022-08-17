import { useContext } from 'react';
// import { Link } from 'react-router-dom';

import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import NotFountImg from '../../images/404.png'


function NotFound() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">
                <Header />
                <h2 className='NotFound-title'>{context[lang].NotFount.first}</h2>
                <img className="NotFount-Img" src={NotFountImg} alt="NotFountImg" />
            </div>
            <Footer />
        </>
    );
}

export default NotFound;
