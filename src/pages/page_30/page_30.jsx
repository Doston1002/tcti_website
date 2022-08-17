import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/matem.png'

import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'




function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
      <>
        <ParticlesBg color="#307ec7" type="cobweb" num={50} bg={true} />
        <div className="container-pages">
          <Header />
          <div className="mainsss">
            <div className="page_main">
              <div className="row">
                <div className="col-lg-10 col-md-12">
                  <h3>{context[lang].kafedra.thirteenth}</h3>
                  <div className="tab">
                    <button
                      className="tablinks"
                      onClick={() => {
                        tabTwo.current.classList.remove("opened");
                        tabThree.current.classList.remove("opened");
                        tabOne.current.classList.add("opened");
                      }}
                      id="defaultOpen"
                    >
                      Kafedra haqida
                    </button>
                    <button
                      className="tablinks"
                      onClick={() => {
                        tabOne.current.classList.remove("opened");
                        tabThree.current.classList.remove("opened");
                        tabTwo.current.classList.add("opened");
                      }}
                      id="defaultOpen"
                    >
                      O'quv-uslubiy ishlar
                    </button>
                    <button
                      className="tablinks"
                      onClick={() => {
                        tabOne.current.classList.remove("opened");
                        tabTwo.current.classList.remove("opened");
                        tabThree.current.classList.add("opened");
                      }}
                      id="defaultOpen"
                    >
                      Kafedra ilmiy ishlari
                    </button>
                  </div>
                  <div id="About" ref={tabOne} className="tabcontent opened">
                    <h3>Kafedra haqida</h3>
                    <p>
                      {" "}
                      Toshkent kimyo texnologiya instituti «Oliy matematika»
                      kafedrasi 1991 yilda 6 may 1991 yildagi O‘zbekiston
                      Respublikasi Prezidentining UP-203 raqamli farmoniga ko‘ra
                      Toshkent kimyo-texnologiya instituti tashkil etilgan
                      kundan boshlab faoliyat ko‘rsatib kelmoqda. Keyingi
                      yillarda kafedraga bir kator respublikamizdagi saloxiyatli
                      matematiklar raxbarlik kilishgan: 1991-1992 yillarda
                      prof.Sh.Narimov, 1992-1993 yillarda dos.N.Raximova,
                      1993-1995 yillarda dos.J.Ibodov, 1995-1996 yillarda
                      dos.S.Abdunazarov, 1996-2001 yillarda dos.U.Raxmonov,
                      2001-2002 yillarda dos.O.Matchonov, 2002-2004 yillarda
                      dos.D.Raximov, 2004-2007 yillarda dos.R.Maksudov,
                      2007-2011 yillarda yana prof.Sh.Narimov. 2011-2017 yil
                      iyulgacha dos.I.Iskanadjiev, 2017 yil iyuldan hozirgi
                      kungacha prof I.I. Safarov mudirlik kilmokda. Hozirgi
                      kunda kafedrada 1 nafar fizika-matematika fanlari doktori,
                      professorlar, 5 nafar fizika-matematika fanlari nomzodi, 2
                      nafar katta o‘qituvchi va 5 nafar assistentlar faoliyat
                      ko‘rsatmoqda. Kafedra jamoasi talabalarga “Matematika” ,
                      “Iqtisodchilar uchun matematika ” va “Iqtisodiy matematika
                      ” fanlaridan ma’ruza, amaliy va mustakil ta’lim
                      mashg‘ulotlarini olib bormokdalar.
                    </p>
                  </div>
                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h3>O'quv-uslubiy ishlar</h3>
                    <p>
                      {" "}
                      Kafedrada o‘qitiladigan fanlar: “Matematika” va
                      “Iktisodchilar uchun matematika”, “Iktisodiy matematika”
                      bo‘yicha barcha yo‘nalishlardagi talabalar uchun namunaviy
                      dasturlar ishlab chiqilgan, o‘quv-uslubiy majmualar
                      yaratilgan. Oxirgi yillarda kafedra
                      professor-o‘qituvchilari tomonidan 2 ta darslik, 3ta o‘quv
                      qo‘llanmalar chop etildi. 2016-2017 o‘quv yilida kafedrada
                      chet el adabiyotlariga asoslangan o‘quv qo‘lanma
                      tayorlandi. Chop etish uchun muvoffiqlashtirish va
                      rejalashtirish qo‘mitasiga topshirildi. Matematika
                      fanining barcha mavzulari bo‘yicha testlar banki
                      yaratilgan. Kafedramiz o‘z ilmiy salohiyati bilan oliy
                      o‘quv yurtlarining turdosh kafedralariga ilmiy va uslubiy
                      yordam ko‘rsatib kelmokda.
                    </p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h4>O'qitiladigan fanlar</h4>
                    <p>Bakalavriatura bo‘yicha o‘qitiladigan fanlar:</p>
                    <p>
                      Matematika 2. Iktisodchilar uchun matematika 3.Iktisodiy
                      matematika
                    </p>
                    <p> KAFEDRANING TASHQI ILMIY VA AMALIY ALOQALARI</p>
                    <p>
                      Kafedra O‘zbekiston Respublikasi Fanlar Akademiyasining
                      Matematika va Mexanika institutlari, O‘zbekiston Milliy
                      Universiteti, Toshkent Davlat Texnika Universiteti, Buxoro
                      muxandislik texnologiya inistituti bilan ilmiy aloqalar
                      o‘rnatgan. Shu bilan birga kafedra Moskva davlat
                      universiteti, Moskva aviatsiya inistituti , AQShning
                      Nyu-Yorkdagi Buffalo Davlat Universiteti hamda Kornell
                      Universitetlari bilan ilmiy alokalar o‘rnatgan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="teachers">
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image1}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">Kafedra boshlig'i</span>
                            <span className="info"></span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Safarov Ismoil Ibroximovich
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-side">
              <ul className="nav-ull">
                <li className="nav-ull-header">
                  <p>
                    {" "}
                    <img src={`${Logo}`} alt="" /> {context[lang].kaf3.p34}
                  </p>
                </li>
                <Link to={"/page/static/get/30"}>
                  <li className="nav-ul-li active">
                    <a href="kafedra">{context[lang].kaf3.p47}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/20"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p35}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/18"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p36}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/19"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p37}</a>
                  </li>
                </Link>

                <Link to={"/page/static/get/22"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p39}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/13"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p40}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/24"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p41}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/25"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p42}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/26"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p43}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/27"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p44}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/28"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p45}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/29"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p46}</a>
                  </li>
                </Link>

                <Link to={"/page/static/get/31"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p48}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/32"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p49}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/33"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p50}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/34"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p51}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/35"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p52}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/36"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p53}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/37"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p54}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/38"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p55}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/39"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p56}</a>
                  </li>
                </Link>

                <Link to={"/page/static/get/41"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p58}</a>
                  </li>
                </Link>
                <Link to={"/page/static/get/42"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p59}</a>
                  </li>
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
