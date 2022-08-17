import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/kafedra/sanoat.jpg'
// import Image00 from '../../images/kafedra/sanoat-xaq.jpg'
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
                  <h3>{context[lang].kafedra.eighteenth}</h3>
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
                      O'quv uslubiy ishlar
                    </button>
                  </div>
                  <div id="About" ref={tabOne} className="tabcontent opened">
                    <h3>Kafedra haqida</h3>
                    <p>
                      «Atrof-muhitni muhofaza qilish va oqova suvlarni tozalash»
                      kafedrasi 1980 yil О‘zbekistan Respublikasi Fanlar
                      Akademiyasining akademigi Axmedov K.S. tashabbusi bilan
                      Toshkent Politexnika Institutining “Kimyo-texnologiyasi”
                      fakulteti qoshida tashkil etilgan.
                    </p>
                    <p>
                      1980 yildan 1991 yilgacha dots.Abduganiyev B.M. ushbu
                      kafedraga mudirlik qilgan. Kafedrada yukori malakali
                      о‘qituvchilar va ilmiy xodimlar k.f.n. dots. Shin L.D.,
                      t.f.n., kat.о‘q. Xidoyatov K., kat.о‘q. Kelginbayeva S.
                      V., k.f.n. ass.Niyazova M.M., k.f.n. ass. Aronova N.,
                      k.f.n. ass.Adilova K.M., k.f.n. k.i.x. Satayev I.K.,
                      k.f.n. k.i.x. Beysenbayev O.K., ilmiy xodimlar Xabibullina
                      N., Muxamedov K.G., Xasanova M.S., Mavlyankariyeva M.A.,
                      Usmanxodjayeva I.T. faoliyat kо‘rsatib kelgan.
                    </p>
                    <p>
                      1988 yildan boshlab esa kafedrada 2513 «Atrof-muhitni
                      muhofaza qilish va tabiiy resurslardan oqilona
                      foydalanish» sohasida malakali mutaxassislar tayyorlana
                      boshlandi.
                    </p>
                  </div>

                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h3>Kafedra tarixi</h3>
                    <p>
                      Kafedrada 1993-1997 yilgacha quyidagi sohalar bо‘yicha
                      mutaxassislar tayyorlandi:
                    </p>
                    <p>
                      – Suv resurslaridan oqilona foydalanish va sanoat oqova
                      suvlarini tozalash;
                    </p>
                    <p>– Sanoat chikindilarini rekuperatsiya qilish.</p>
                    <p>
                      Kafedra 1993 yilda akad. Mirkomilov T.M. boshchiligida
                      «Sanoat ekologiyasi» nomi bilan yuritila boshlandi. 1996
                      yil 1 sentabrdan boshlab kafedraga k.f.n., dots.Tursunov
                      T.T. raxbarlik qila boshlagan. 1997 yildan boshlab 5850100
                      «Atrof muhit muhofazasi» yо‘nalishi bо‘yicha bakalavrlar
                      tayyorlanayapti. 1999 yildan boshlab 5A850101 “Atrof-muhit
                      muxofazasi” mutaxassisligi bо‘yicha magistrlar qabul
                      qilina boshlandi.
                    </p>
                    <p>
                      2020 yildan boshlab Phd dotsent Igitov Farrux
                      Baxtiyorovich raxbarlik qilib kelmoqda.
                    </p>
                    <p>
                      Toshkent kimyo-texnologiya instituti “Sanoat ekologiyasi”
                      kafedrasida chiqindisiz texnologik jarayonlarni
                      takomillashtirish, sanoat oqova suvlarini tozalash,
                      atmosfera havosini zaharli gazlardan tozalashga qaratilgan
                      bir qator ilmiy tadqiqot ishlari olib borilmoqda.
                      Professor R.А. Nazirova, professor T.T.Tursunovlar ilmiy
                      rahbarliklarida furan birikmalari asosida
                      ion-almashtirgich polimerlarni sintez qilish va ularni
                      qoʼllashning aniq obʼektlarini izlash borasida ilmiy
                      izlanishlar olib borilmoqda. Kimyo fanlari doktori
                      X.L.Pulatov, kimyo fanlari doktori, professor
                      Sh.А.Mutalovlar ilmiy rahbarliklarida “Mahalliy
                      xom-ashyolar asosida ion almashinuvchi polimerlar olish va
                      uni atrof muhitni-muhofaza qilish sohasida qoʼllash”
                      mavzusida ilmiy tadqiqot ishlari amalga oshirilmoqda.
                      Sanoat oqova suvlarini tozalashga moʼljallangan
                      ion-almashinuvchi polimerlarning asosiy qismi
                      respublikamizga chet davlatlaridan keltiriladi. Bu esa
                      ishlab chiqarilayotgan mahsulotning tannarhiga salbiy
                      taʼsir koʼrsatadi. “Sanoat ekologiyasi” kafedrasida olib
                      borilgan ilmiy izlanishlar natijasida, mahalliy
                      xom-ashyolar asosida ion-almashinuvchi polimerlar olindi.
                      Hozirgi kunda bu polimerlar, chet davlatlaridan
                      keltirilayotgan ion-almashinuvchi polimerlar oʼrniga
                      sanoat oqova suvlarini tozalashda qoʼllanilib, iqtisodiy
                      samaradorlikka erishilmoqda. Kafedrada sintez qilingan
                      polimerlarni “Suvsoz” Davlat unitar korxonasiga qarashli
                      Salar aeratsiya stantsiyasi oqova suvlarini tozalashda
                      qoʼllanilishi natijasida bu korxonaga yillik 106 mln. soʼm
                      iqtisodiy foyda keltirilgan. Ilmiy tadqiqotlar natijasida
                      kafedrada 8 ta fan nomzodi, 4 nafar fan doktorlari oʼz
                      dissertatsiya ishlarini muvaffaqqiyatli himoya qildilar va
                      hozirgi kunda Oʼzbekiston Respublikasi Oliy va Oʼrta
                      maxsus taʼlim vazirligi tizimida rahbar lavozimlarida
                      samarali mehnat qilmoqdalar. 2017-2020 yillar davomida
                      kafedra olimlari jamoasining ilmiy izlanishlari natijasida
                      Oʼzbekiston Respublikasi Intellektual mulk agentligi
                      tomonidan 5 ta ixtiroga davlat patenti olindi. Аtrof
                      muhit-muhofazasiga oid 10 ta darslik, 8 ta oʼquv
                      qoʼllanma, 5 ta monografiyalar chop ettirildi. Kafedrada
                      professor S.R.Sayfutdinov ilmiy rahbarligida “Tsellyuloza
                      sanoatida hosil boʼlayotgan oqova suvlarni tozalash”
                      mavzusida ham ilmiy izlanishlar olib borilmoqda.
                      Yurtimizda barcha sohalar rivoji uchun yaratib
                      berilayotgan keng imkoniyatlardan foydalanib, kafedra
                      jamoasi kelajakda oʼz oldiga katta maqsadlar qoʼygan.
                      Talabalarga bilim berish jarayonida hozirgi kundagi
                      ilm-fan yutuqlaridan foydalanish, fan bilan ishlab
                      chiqarish oʼrtasidagi integratsiyani rivojlantirish,
                      yurtimizda atrof muhit-muhofazasiga doir amalga
                      oshirilayotgan ishlarda oʼz hissamizni qoʼshish eng oliy
                      maqsadimizdir.
                    </p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h3>O'quv uslubiy ishlar</h3>
                    <p>
                      Kafedrada 5850100 –“Atrof muhit muhofazasi” bakalavriat
                      yо‘nalishi va 5A850101 – “Atrof muhit muhofazasi”
                      magistratura mutahassisligi bо‘yicha Dalvat ta’lim
                      standartlari yaratildi, “Ekologiya”, “Mexnatni muhofaza
                      qilish”, “Fuqaro muhofazasi” kabi umumkasbiy fanlar va
                      bakalavriatura va magistratura barcha mutahassislik
                      fanlaridan namunaviy dasturlar, о‘quv-uslubiy majmualar
                      yaratildi. Oxirgi yillarda kafedra
                      professor-о‘qituvchilari tomonidan 4 ta darslik, 50 dan
                      ortiq о‘quv-uslubiy qо‘llanmalar chop etildi.
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
                              PhD Dotsent <br />
                              Qabul kunlari: seshanba va payshanba kunlari soat
                              14:00-15:00
                              <br />
                              Elektron adres: farruhigitov@gmail.com <br />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        Igitov Farruh Baxtiyarovich
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

                     <Link to={"/page/static/get/35"}>
                  <li className="nav-ul-li active">
                    <a href="kafedra">{context[lang].kaf3.p52}</a>
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
