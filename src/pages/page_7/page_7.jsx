import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/6.jpg'
import Image2 from '../../images/7.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'


function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);

    return (
        <>
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                <div className='page_main'>
                    <div className="row">
                        <div className="col-lg-10 col-md-12">
                            <h3>{context[lang].centre.eighth}</h3>
                            <div className="tab">
                                    <button className="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].centre.fifteenth}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.b1}</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].facultet1.a3}</button>
                                </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h3>{context[lang].centre.fifteenth}</h3>
                                
                            </div>
                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h3>{context[lang].facultet1.b1}</h3>

                               </div>
                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>{context[lang].facultet1.a3}</h3>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="teachers justify-content-center">
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].facultet6.a42}</span>
                                                <span className="info">Xamroqulov G’ofurjon Xolyigitovich

                                                    e-mail: khamrakulovgafurjan@gmail.com
                                                    
                                                    Kimyo fanlari doktori, professor



                                                    Tel: +998 71 278-96-58; +998 90-931-07-98

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Xamroqulov G’ofurjon Xolyigitovich</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image2} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Bo‘lim metodisti</span>
                                                <span className="info">Karimov Jahongir Zafarjon o’g’li

                                                    Ma’lumoti: Tugallanmagan Oliy

                                                    Chet tillarni bilishi: Rus tili, Ingliz tili, Nemis tili

                                                    Tel: +998 71 278-96-58; +99891-693-43-94.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Karimov Jahongir Zafarjon o’g’li</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">Magistratura bo‘limi</a></li>
                        <Link to={'/page/static/get/8'}>
                        <li className="nav-ul-li"><a href="kafedra">Marketing va talabalar amaliyoti boʻlimi</a></li>
                        </Link>
                        <Link to={'/page/static/get/9'}>
                        <li className="nav-ul-li"><a href="kafedra">Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/15'}>
                        <li className="nav-ul-li"><a href="kafedra">Xalqaro aloqalar bo`limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="kafedra">Ta’lim sifatini nazorat qilish bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/10'}>
                        <li className="nav-ul-li"><a href="kafedra">O‘quv-uslubiy bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/4'}>
                        <li className="nav-ul-li"><a href="kafedra">Ilmiy innovatsion ishlanmalarni tijoratlashtirish bo’limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/6'}>
                        <li className="nav-ul-li"><a href="kafedra">Kadrlar bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/12'}>
                        <li className="nav-ul-li"><a href="kafedra">Sirtqi bo'lim</a></li>
                        </Link>
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Markazlar</p></li>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="kafedra">Raqamli ta'lim texnologiyalari markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/14'}>
                        <li className="nav-ul-li"><a href="kafedra">TKTI huzuridagi “Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish” tarmoq markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/5'}>
                        <li className="nav-ul-li"><a href="kafedra">Innovasion markazi</a></li>
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
