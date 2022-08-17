import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/8a1a1d5e0b_1502266379.png'
import Image2 from '../../images/8b8f349796_1528715906.jpg'
import Image3 from '../../images/2501d7a632_1528715906.jpg'
import Image4 from '../../images/4340d59a84_1528715906.jpg'
import Image5 from '../../images/1088dc0af5_1528715906.jpg'
import Image6 from '../../images/fc2470144a_1528715906.jpg'
import Image7 from '../../images/7730940cfe_1528715906.jpg'
import { useRef } from 'react';

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
                <div className="page_main">
                    <div className="row">
                        <div className="col-lg-10 col-md-12 col-sm-10">
                            <h3>{context[lang].centre.fourteenth}</h3>
                            <div className="tab">
                                <button className="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">Bo'lim haqida</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    maqsadimiz</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    vazifamiz</button>
                            </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h3>Bo'lim haqida</h3>
                                <p>Innovasion markazi (IM), 2010 yilda TKTI qoshidagi ilmiy-tadqiqot bo’limi negizida  tashkil etilgan.
                                    <br />
                                    Asosiy maqsadi –  Istiqbol ilmiy-tadqiqot ishlanmalarni   yaratish, sinovdan o’tkazish, joriy qilish, o’zlashtirish va kommersializatsiyalash bo’yicha ishlarini muvofiqlashtirish.
                                    <br />
                                    Innovatsion markaz o’zini o’zi mablag’ bilan ta’minlash orqali o’z faoliyatini olib boradi. IMga quyidagi manbalardan mablag’ kelib tushadi:
                                    <br />
                                </p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h3>Bizning maqsadimiz</h3>
                                <p> Budjet mablag’lariga fundamental, amaliy va innovatsion loyiahalardan olingan  Moliya vazirligi tasdiqlagan xarajatlar smetasiga kiritilgan ustama xarajatlari kiradi.
                                    <br />
                                    IM rejasi - institutning innovatsion faoliyatini rivojlanishiga yordam ko’rsatib, sanoat korxonalari bilan samarali xamkorlik qilishiga sharoit yaratib beradi, TKTI xodimlarining ilmiy-tadqiqot ishlari natijalarini litsenziya shartnomalarini tuzib transfer qilish va kichik innovatsion korxonalar yaratish ishlari bo’yicha faoliyat olib boradi, xamda grant va kontraktlarni jalb qilishni ta’minlaydi.</p>
                            </div>

                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>Bizning vazifamiz</h3>
                                {/* <p> - budjet mablag’lari;
                                    <br />
                                    - nobudjet mablag’lar.
                                    <br />
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="teachers">
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Innovatsion markazi</span>
                                                <span className="info">Mkrtchyan Ripsime Vachaganovna

                                                    Direktor o’rinbosari, texnika fanlari nomzodi

                                                    e-mail: mk_hripsime@mail.ru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Mkrtchyan Ripsime Vachaganovna</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image2} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Ilmiy kotib</span>
                                                <span className="info">Kadirova Dilorom Salixovna,

                                                    Ilmiy kotib, texnika fanlari nomzodi</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Kadirova Dilorom Salixovna</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image3} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Каttа ilmiy xodim</span>
                                                <span className="info">Aripova Barno Xamitovna,

                                                    Каttа ilmiy xodim, patentshunos.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Aripova Barno Xamitovna</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image4} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Каttа ilmiy xodim</span>
                                                <span className="info">Tyutkov Vladimir Nikolayevich,

                                                    Каttа ilmiy xodim, patentshunos</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Tyutkov Vladimir Nikolayevich</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image5} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Kichik ilmiy xodim</span>
                                                <span className="info">Xusnidinova Farida Ilyasovna,

                                                    Kichik ilmiy xodim.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Xusnidinova Farida Ilyasovna</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image6} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Yetakci iqtisodchi</span>
                                                <span className="info">Atamatova Surayyo Gayratovna,

                                                    Yetakci iqtisodchi.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Atamatova Surayyo Gayratovna</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image7} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Xisobchi</span>
                                                <span className="info">Tashpulatova Dilobar Xamitovna,

                                                    Xisobchi.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Tashpulatova Dilobar Xamitovna</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                        <li className="nav-ul-li"><a href="kafedra">Sirtqi bo'lim</a></li>
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
                        <Link to={'/page/static/get/7'}>
                        <li className="nav-ul-li"><a href="kafedra">Magistratura bo‘limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/4'}>
                        <li className="nav-ul-li"><a href="kafedra">Ilmiy innovatsion ishlanmalarni tijoratlashtirish bo’limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/6'}>
                        <li className="nav-ul-li"><a href="kafedra">Kadrlar bo`limi</a></li>
                        </Link>
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Markazlar</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">Innovasion markazi</a></li>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="kafedra">Raqamli ta'lim texnologiyalari markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/14'}>
                        <li className="nav-ul-li"><a href="kafedra">TKTI huzuridagi “Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish” tarmoq markazi</a></li>
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
