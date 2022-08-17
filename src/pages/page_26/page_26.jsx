import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/kafedra/organik.jpg'
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
                  <h3>{context[lang].kafedra.nineth}</h3>
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
                      Kafedraning o'quv-uslubiy ishlari
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
                      Kafedra hamkorlik qilayotgan korxonalar
                    </button>
                  </div>
                  <div id="About" ref={tabOne} className="tabcontent opened">
                    <h4>Kafedra haqida</h4>
                    <p>
                      Organik kimyo va og’ir organik sintez texnologiyasi
                      kafedrasi ilgari faoliyat olib borgan organik kimyo va
                      asosiy organik sintez texnologiyasi kafedralarni
                      birlashtirilishi natijasida 2005 yilda tashkil topdi.
                      Kafedra bakalavriaturani 5320400- Kimyoviy texnologiya
                      (organik moddalar) hamda magistraturani 5A320400-Organik
                      moddalar kimyoviy texnologiyasi (Asosiy organik sintez
                      mahsulotlari kimyoviy texnologiyasi) va 5A320400 - Organik
                      moddalar kimyoviy texnologiyasi (nozik organik sintez
                      mahsulotlari kimyoviy texnologiyasi) mutaxassisliklari
                      bo’yicha kadrlar tayyorlaydi. Kafedrada yuqori malakali,
                      tajribali professor va dotsentlar faoliyat ko’rsatmoqda,
                      ular har bir bitiruvchining yaxshi mutaxassis bo’lishi
                      uchun alohida yondashib ishlaydilar. 5A320402 –
                      Adsorbentlar va katalizatorlar texnologiyasi
                      mutaxassisliklari bo‘yicha kadrlar tayyorlaydi. Kafedrada
                      yuqori malakali, tajribali professor va dotsentlar
                      faoliyat ko‘rsatmoqda, ular har bir bitiruvchining yaxshi
                      mutaxassis bo‘lishi uchun alohida yondashib ishlaydilar.
                    </p>
                    <p>
                      Hozirgi vaqtda kafedrada 2-ta professor, 7-ta dotsent,
                      7-ta katta o’qituvchi va 4-ta assistent ishlaydi.
                      Kafedraning professor-o’qituvchilari tarkibi quyidagicha:
                      kafedra mudiri t.f.n., dots. S.J.Xoliqova, t.f.d., prof.
                      Maksumova O.S., t.f.n., prof. Ikramov A., k.f.n., dots.
                      L.A. Ismailova, t.f.n., dots. X.E. Qodirov., t.f.n, dots.
                      O.A. Salixova, k.f.n, dots. Abduraimov B.M., t.f.n., dots.
                      Ergasheva D.A., k.f.n., dots. Xandamov D.A., k.f.d., dots.
                      Beknazarov X.S., katta o’qituvchi Abdurazakova G.T.,
                      Turobjonova S.Sh., Matkarimova N.S., Maxmudova F.A.,
                      Sadullaeva O.B., assistentlar Xakimova G.R., Nigmatova
                      K.X., Gazixodjayeva N.M., Xoliqulov B.N. Islomova Yu.U.,
                      Latipova I.I. va yordamchi xodimlar tarkibi: xona mudirasi
                      Xamdamova F.A., katta laborant Mirzaxmedova N.N. va
                      boshqalar.
                    </p>
                    <p>
                      Kafedra o’qituvchilari fan va texnika sohasidagi yangi
                      yutuqlarni muntazam o’rganib borishadi. Buning natijasida
                      o’qitiladigan mutaxassislik fanlari bo’yicha o’quv reja
                      qaytadan ishlandi. Talabalarni o’qitish va ilmiy tadqiqot
                      ishlarini bajarishda yangi zamonaviy jixozlar bilan
                      ta’mirlangan organik kimyo va asosiy organik sintez
                      laboratoriyalaridan foydalaniladi. Keyingi vaqtlarda
                      kafedraning organik sintez mahsulotlari ishlab chiqarish
                      bakalavr yo’nalishi bitiruvchilariga bo’lgan talab ortib
                      bormoqda. Bu esa, yosh mutaxassislarni oliy ta’lim
                      dargohida yuqori malakaga ega bo’lishliklarini
                      ko’rsatmoqda. Buni har yildagi abiturientlarni yuqori
                      konkursi orqali ham kuzatish mumkin. Har yili ushbu
                      mutaxassislikni tugatayotganlar 2-3 dan 5-6 gacha
                      imtiyozli diplom olishga muvaffaq bo’lishmoqda.
                      Bakalavrlarni tayyorlashda malakaviy ishlab chiqarish
                      amaliyotlari ham muhim ahamiyatga ega bo’lib, talabalar
                      amaliyotlarni neft va gazni qayta ishlash etakchi
                      korxonalaridan bo’lgan Sho’rtan gaz-kimyo majmuasi,
                      Muborak gazni qayta ishlash zavodi, Navoiazot OAJ,
                      Chirchiq Maksam OAJ va boshqa korxonalarda o’tkazmoqdalar.
                    </p>
                  </div>

                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h4>Kafedraning o'quv-uslubiy ishlari</h4>
                    <p>
                      Oxirgi 3 yil mobaynida kafedra xodimlari tomonidan
                      intellectual muk agentligidan 4ta patent, 5 ta darslik,
                      5ta monografiya, yakuniy nazorat ishlari uchun test
                      savollari (800 dan ortiq), oraliq va yakuniy nazorat
                      ishlari uchun yozma ish variantlari, organik kimyo va
                      mutaxasislik fanlaridan mustaqil ishlash uchun savollar
                      to’plami tayyorlandi. 5320400-Kimyoviy texnologiya
                      (organik moddalar) hamda magistraturani 5A320400-Organik
                      moddalar kimyoviy texnologiyasi (Asosiy organik sintez
                      mahsulotlari kimyoviy texnologiyasi) va 5A320400 - Organik
                      moddalar kimyoviy texnologiyasi (nozik organik sintez
                      mahsulotlari kimyoviy texnologiyasi) mutaxasisligi
                      bo’yicha davlat ta’lim standartlari yaratildi. Barcha
                      mutaxasislik fanlaridan ishchi reja tuzilgan bo’lib, unda
                      o’tiladigan ma’ruza, laboratoriya va seminar
                      mashg’ulotlarini kalendar rejalari, reyting jadvallari o’z
                      aksini topgan. Organik kimyo va mutaxasislik fanlaridan
                      laboratoriya va seminar mashg’ulotlarini o’tkazish uchun
                      lotin va ingliz grafikasida metodik qo’llanmalar
                      tayyorlangan.
                    </p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h4>Kafedra hamkorlik qilayotgan korxonalar</h4>
                    <p>
                      {" "}
                      Kafedra quyidagi ishlab chiqarish korxonalari,
                      ilmiy-tadqiqot institutlari va oliy ta’lim muassalari
                      bilan o’zaro ilmiy-pedagogik hamkorlikda
                      ishlaydi:O’zKimyosanoat DAK. A.Sultonov nomidagi
                      O’zbekiston kimyo-farmatsevtika ilmiy tadqiqot instituti.
                      S.Yunusov nomli “O’simlik moddalar kimyosi instituti”.
                      Navoiazot OAJ. Chirchiq Maksam OAJ. Sho’rton Gaz-kimyo
                      majmuasi. O’zbek neft-gaz MXK. Buxoro neftni qayta ishlash
                      zavodi. O’zLITINeftGaz. Toshkent davlat texnika
                      universiteti. Toshkent to’qimachilik va engil sanoati
                      instituti. Gubkin nomli Moskva neft va gaz instituti.
                      M.V.Lomonosov nomli Moskva nozik kimyoviy texnologiya
                      akademiyasi. Toshkent farmatsevtika instituti. O’zbekiston
                      Milliy universiteti.{" "}
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
                              Qabul vaqti: Dushanba-Juma (1400-1600 gacha)
                              <br />
                              telefonlar: 71 244-36-85
                              <br />
                              E-mail: dxandamov@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Xandamov Davron Abdikodirovic
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
                <Link to={"/page/static/get/26"}>
                  <li className="nav-ul-li active">
                    <a href="kafedra">{context[lang].kaf3.p43}</a>
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
