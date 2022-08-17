import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/umimiy-mudr.png'

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
                <div className="col-lg-10 col-md-12">
                  <h3>{context[lang].kafedra.nineteenth}</h3>
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
                      Kafedra tarixi
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
                      Ilmiy yo'nalishlar
                    </button>
                  </div>
                  <div id="About" ref={tabOne} className="tabcontent opened">
                    <h3>Kafedra haqida</h3>
                    <p>
                      “Umumiy va noorganik kimyo” kafedrasi О‘rta Osiyo
                      jumxuriyatlarida kimyo fanining dastlabki
                      targ‘ibotchilaridan biri bо‘lgan professor A.M. Rostovskiy
                      tashabbusi bilan Toshkent Politexnika Institutining
                      “Kimyo-texnologiyasi” fakulteti qoshida tashkil etilgan.
                    </p>
                  </div>

                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h3>Kafedra tarixi</h3>
                    <p>
                      Kafedra tashkil qilinganda unga mudirlik qilish dastlab
                      V.A. Novikovga (1935), sо‘ngra professorlardan N.L.
                      Karavayev, X.R. Raximov, X.R. Rustamov, dotsentlardan X.B.
                      Medinskiy, Y.I. Ibroximov, K.A. Azamov, prof.F.Q.Qurbonov,
                      prof. A.X. Ismoilov, prof. Q.A. Axmerov, dots.
                      A.Jalilovlarga topshirilgan. 2011 yildan boshlab kafedraga
                      dots. Qodirov Orifjon Sharifovich, Abduraximov Anvar
                      Abdurahmonovich mudirlik qilgan. Hozirgi kunda kafedra
                      mudiri lavozimida prof. Sidikov A.S. faoliyat yuritmoqda.
                      Kafedrada 9 nafar о‘qituvchi, shu jumladan 2 nafar fan
                      doktori, 2 nafar fan nomzodi, 2 nafar katta о‘qituvchi, 3
                      nafar assistent ishlaydi. Kafedra institutning barcha
                      fakultetlari talabalariga “Umumiy va noorganik kimyo”
                      fanining asoslarini о‘rgatmoqda.
                    </p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h3>Ilmiy yo'nalishlar</h3>
                    <p>
                      Axmerov Qudrat N6-062 sonli “Mahalliy xom-ashyolar asosida
                      yangi ion almashtiruvchi smolalalar sintez qilish,
                      xossalarini о‘rganish va texnologiyasini yaratish”
                      mavzusidagi grant ishida ishtirok etdi.
                    </p>
                    <p>
                      {" "}
                      “Umumiy va noorganik kimyo” kafedrasida 2012/2014 yillarga
                      mо‘ljallangan Davlat granti asosida ITD-12-18 “Sanoat
                      chiqindilari asosida olovbardosh (1000-1400°C) yelimlarni
                      sintez qilish va ishlab chiqarish texnologiyasini
                      yaratish” mavzusi bо‘yicha amaliy ITI olib borildi, ilmiy
                      rahbar dots. A.Jalilov.
                    </p>
                    <p>
                      Badalbayeva Iltifot - ITD-6 Respublikaning mineral xom
                      ashyo resurslarini, kimyo, oziq-ovqat, yengil sanoat va
                      qishloq xо‘jalik mahsulotlari hamda chiqindilarini ishlab
                      chiqarish, qayta ishlash, saqlash va ulardan
                      foydalanishning resurstejamkor, ekologik xavfsiz
                      inovatsion texnologiyalarini ishlab chiqish. Razrabotka
                      resurso- i energosberegayushey texnologii
                      proizvodstvarasshiryayushegosya i napryagayushego sementov
                      na osnove alitovix sulfoklinkerov s ispolzovaniyem v
                      kachestve sirya texnogennix otxodov promishlennosti
                      (zoloshlakov, fosfogipsa) i alunita. 2012/2014 yillarga
                      mо‘ljallangan Davlat granti asosida ITD-13-18 “Olmaliq
                      tog` metallurgiya kombinatining qo`rg`oshin va sink
                      boyitish fabrikalarining chiqindilarini qayta ishlab
                      ulardan ikkilamchi qimmatli metallar sanoat mahsulotini
                      hamda portlandsement olish texnologiyasi majmuasini
                      yaratish” mavzusi bо‘yicha amaliy ITI olib borildi.
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
                            <span className="info">
                              Kimyo fanlari doktori <br />
                              Qabul kunlari: Dushanba, Chorshanba, Juma
                              1400-1600
                              <br />
                              Elektron manzil: sidikov_a@mail.ru <br />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        Sidikov Abdujalol Sidikovich
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
                <Link to={"/page/static/get/36"}>
                  <li className="nav-ul-li active">
                    <a href="kafedra">{context[lang].kaf3.p53}</a>
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
                <Link to={"/page/static/get/30"}>
                  <li className="nav-ul-li">
                    <a href="kafedra">{context[lang].kaf3.p47}</a>
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
