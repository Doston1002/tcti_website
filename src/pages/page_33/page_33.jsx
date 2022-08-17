import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/kafedra/noorganik.jpg'

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
                  <h3>{context[lang].kafedra.sixteenth}</h3>
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
                      Ilmiy yo’nalishlar
                    </button>
                  </div>
                  <div id="About" ref={tabOne} className="tabcontent opened">
                    <h3>Kafedra haqida</h3>
                    <p>
                      Toshkent kimyo-texnologiya institutining yetakchi
                      kafedralaridan xisoblanadigan «Noorganik moddalar kimyoviy
                      texnologiyasi» kafedrasi juda qadim va boy tarixga ega.
                      Butunittifoq oliy ta’lim Qo‘mitasi raisining 1937 yildagi
                      qaroriga binoan O‘rta Osiyo Davlat universitetining kimyo
                      fakulteti tarkibida 1939 yili “Noorganik moddalar
                      texnologiyasi” kafedrasi tashkil etildi. O‘sha davrda
                      O‘rta Osiyo Davlat universitetining rektori bo‘lib
                      ishlayotgan M.S. Elgortning shogirdi dotsent S.A. Sigov
                      mudirlik qila boshladi. Shu yili kafedrada noorganik
                      moddalar texnologiyasi yo‘nalishida 13 ta mutaxassis
                      kimyogar-muxandislar tayyorlandi va ular O‘zbekiston
                      Respublikasining turli kimyo korxonalariga yo‘llanma
                      oldilar.
                    </p>
                    <p>
                      {" "}
                      1940 yilning yozida kimyo fakulteti tarkibida kafedralar,
                      shu jumladan “Noorganik moddalar texnologiyasi” kafedrasi
                      bilan birgalikda O‘rta Osiyo Davlat Universitetida O‘rta
                      Osiyo sanoat instituti tassarufiga o‘tkazildi.Lekin
                      kafedra xodimlari va talabalari shu yil boshlangan urush
                      tufayli o‘quv yilini oxirlay olmadilar. Ulug‘ Vatan urushi
                      yillarida kafedra mudiri S.A. Sigov va assistent Z.M.
                      Leykin Vatan himoyasiga safarbar etilganliklari tufayli
                      kafedraga qisqa vaqt kimyo fanlari nomzodi, dos.
                      A.B.Kuchqarov va O‘zR Davlat rejalashtirish Qo‘mitasi
                      raisining birinchi o‘rinbosari M.N.Nabievlar mudirlik
                      qilganlar.
                    </p>
                    <p>
                      Urishdan qaytganidan keyin 1946-1967 yilgacha kafedra
                      mudirligi faoliyatini dos. S.A.Sigov davom ettirgan, 1968
                      yildan 1990 yilgacha texnika fanlari doktori, professor
                      F.M.Mirzaev mudirlik qilgan davrlarda O‘zRFA kimyo
                      institutidagi o‘g‘itlar kimyosi va texnologiyasi bo‘limi
                      bilan yaqin ilmiy hamkorlik yo‘lga qo‘yildi, ilm Fan
                      gurkirab rivojlandi va buning oqibatida noorganik
                      moddalar, shu jumladan mineral va organomineral o‘g‘itlar
                      kimyosi va texnologiyasi borasida olib boriladigan keng
                      qamrovli ilmiy-tadqiqot ishlari natijalari bo‘yicha
                      Respublikaning kimyo korxonalariga amaliy tavsiyalar
                      berildi va ular Qo‘qon va Samarqand superfosfat
                      korxonalari, Navoiy va Olmaliq kimyo korxonalari, Farg‘ona
                      azotli o‘g‘itlar ishlab chiqarish korxonasida joriy
                      etildi.
                    </p>
                  </div>

                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h3>Kafedra tarixi</h3>
                    <p>
                      {" "}
                      Kafedraga 1990-1992 yillarda texnika fanlari nomzodi,
                      dotsent Sh.A.Yakubov, 1992-1994 yillarda texnika fanlari
                      doktori P.X. Mansurov, 1994-2000 yillarda texnika fanlari
                      doktori professor T.A.Atakuziev, 2000-2001 yy., 2006-2009
                      yillarda t.f.n., dotsent Z.K.Toirov, 2001-2005 yy,
                      2009-2011 yillarda texnika fanlari doktori prof.
                      A.U.Erkaev, 2005-2006 yilarda t.f.d. Iskandarova M.I.
                      mudirlik qilganlar. 2011-2015 yillarda texnika fanlari
                      nomzodi, dotsent Iskenderov A.M., 2016 yilning yanvar
                      oyidan boshlab hozirgi kungacha texnika fanlari nomzodi,
                      dotsent Adilova M.Sh. kafedraga rahbarlik qilib kelmoqda.
                    </p>
                    <p>
                      Kafedra xodimlari o‘z faoliyati davrida shu kunga qadar
                      Respublikamizning kimyo korxonalari, Oliy ta’lim va ilmiy
                      tadqiqot hamda loyihalash institutlari uchun 3500 dan
                      ziyod muxandis-texnolog tayyorlab mamlakatimiz iqtisodi
                      yuksalishiga o‘z munosib xissalarini qo‘shib kelmoqdalar.
                      Kafedra bitiruvchilarining ko‘pchiligi bugungi kunda
                      tarmoq korxonalari, ilmiy tekshirish institutlari va
                      Davlat rahbarlik organlarida ma’sul lavozimlarda faoliyat
                      ko‘rsatmoqdalar. Shu jumladan, O‘zbekiston Respublikasi
                      Vazirlar Maxkamasining bosh vazir o‘rinbosari texnika
                      fanlari nomzodi G.I.Ibragimov, texnika fanlari doktori,
                      professor R.Ya.Yakubov “O‘zkimyosanoat”-DAKning boshqaruv
                      raisi muovini lavozimida, erishgan yutuqlari bilan nafaqat
                      respublika, balki chet ellarda ham tanilgan. O‘zbekiston
                      Respublikasi FA Umumiy va noorganik kimyo institutining
                      yetakchi olimlaridan O‘zR FA akademigi S.To‘xtaev, texnika
                      fanlari doktori, professor Sh.S.Nomozovlar,
                      “Maksam-Chirchiq” AJ boshqaruv raisi muovini, texnika
                      fanlari doktori professor A.D.Dadaxodjaevlar ham
                      ishlamoqdalar.
                    </p>
                    <p>
                      Kafedrada yuqori malakali professor-o‘qituvchilar va ilmiy
                      xodimlar prof. Mirzaev F.M., prof. Mansurov P.X., dos.
                      Yakubov Sh.A., dos. Linkevich V.A., dos. Mannanova R.A. ,
                      k.o‘q. Terexin Ye.L., dos. Mirzaev I., dos. Toirov Z.K.,
                      los. Sharapov A.T., ilmiy xodim Sayfullin R.Z. faoliyat
                      ko‘rsatib kelgan.
                    </p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h3>Ilmiy yo’nalishlar</h3>
                    <p>
                      1. Ilmiy-tadqiqot faoliyatining ustuvor yo‘nalishlari.
                      Kafedrada olib borilayotgan ilmiy-tadqiqot ishlari bir
                      qator noorganik maxsulotlar ishlab chiqarish muammolarini
                      xal qilishga bag‘ishlangan bo‘lib, ular asosan, maxaliy
                      xomashyolar asosida mineral o‘g‘itlar va tuzlarning yangi
                      turlarini, soda maxsulotlarini, sintetik yuvish
                      vositalarini ishlab chiqarishdan, xamda kimyo sanoatining
                      chiqindilarini utilizatsiya qilishdan iborat.
                    </p>
                    <p>
                      2. Iqtisodiyotning tegishli soxalariga oid korxona va
                      tashkilotlar bilan xamkorlikda bajarilayotgan ilmiy
                      ishlarni natijalariga ko‘ra kafedra yuqori ilmiy
                      potensialga egadir. Kafedrada 4 ta fan doktori va 7 ta fan
                      nomzodlari faoliyat ko‘rsatmoqdalar.
                    </p>
                    <p>
                      O‘zR FA umumiy va noorganik kimyo institutidan kafedrani
                      ilmiy-pedagogik faoliyatiga o‘rindosh sifatida 2 ta
                      akademik (Tuxtaev S., Beglov B.M.), fan doktorlari
                      (Nomozov Sh.S., Reymov A.M.) va fan nomzodlari (Kucharov
                      B.X., Usanboev N.X., Alimov U.) jalb etilgan.
                    </p>
                    <p>
                      2014 yilda kafedra jamoasi davlat ilmiy grantlari bo‘yicha
                      200mln.sumdan oshiq mablag‘ga ilmiy-tadqiqot ishlarini
                      bajargan. 2015 yilda esa kafedra olimlari 210 mln.sum
                      xajmdagi ilmiy davlat grantlarini yutganlar.
                    </p>
                    <p>
                      Qo‘yidagi bir qator ishlab chiqarish korxonalari bilan 100
                      mln.sumdan oshiq xajmda xo‘jalik shartnomalar asosida
                      ilmiy-tadqiqot ishlari bajarib kelinmoqda: “Navoiyazot”,
                      “Samarqandkimyo”, AJ lari, Dehqonobod kaliyli o‘g‘itlar
                      zavodi, Qo‘qond superfosfat zavodi. Barcha bajaralayotgan
                      ilmiy ishlarning mavzulari “Uzkimyosanoat” DAK bilan
                      kelishilgan holda amalga oshmoqda.
                    </p>
                    <p>
                      Ilmiy-tadqiqot ishlar bajarilishi natijasida yangi
                      fosforli, murakkab va suyuq o‘g‘itlar olishning
                      texnologiyalari ishlab chiqildi, hamda kalsinatsiyalangan
                      soda, oddiy superfosfat va sintetik yuvish moddalar ishlab
                      chiqish texnologiyalari jadallashtirildi.
                    </p>
                    <p>
                      3. Nomzodlik va doktorlik dissertatsiyalari himoyasi. 2009
                      yili dotsent X.Ch. Mirzakulov doktorlik dissertatsiyasini
                      himoya qildi va xozirgi kunda u fan doktori, professor
                      sifatida kafedrada faoliyatini olib bormoqda. X.Ch.
                      Mirzakulov muallifligida yangi o‘g‘itlar olish
                      texnologiyalari “Ammofos-Maksam” va “Samarqandkimyo” AJ
                      larida joriy qilingan.
                    </p>
                    <p>
                      Oxirgi uch yil mobaynida kafedrada 6 ta nomzodlik
                      dissertatsiya yoqlandi. N.V. Volыnskova va O.K.
                      Rambergenov nomzodlik dissertatsiyalarini natijalari
                      “Ammofos-Maksam” AJ va “Qo‘ng‘irot soda zavodi” UK larida
                      joriy etilgan.
                    </p>
                    <p>
                      4. Iqtidorli talabalar bilan ishlash. Kafedra 2-4 kurs bir
                      qator bakalavriat talabalari va 1-2 kurs magistrantlari
                      orasida bir qator talabalari kafedrada tashkil etilgan
                      “Texnolog” to‘garagiga a’zo bo‘lishgan. Ularga ilmiy
                      mavzular va ilmiy rahbarlar tayinlanib, kafedradagi
                      laboratoriyalarda o‘z ilmiy ishlarini olib borishmoqda.
                      Olib borgan ilmiy-tadqiqot ishlari yuzasidan bir qator
                      ilmiy-texnikaviy anjumanlarda faol qatnashib, maqolalari
                      to‘plamlarda chop etildi.
                    </p>
                    <p>
                      Bundan tashqari kafedraning 20 ta talabasi ilmiy grantlar
                      va xo‘jalik shartnoma asosidagi ilmiy-tadqiqot ishlariga
                      qatnashib kelmoqdalar
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
                              falsafa doktori (PhD), dotsent <br />
                              Qabul kunlari: Dushanba, Chorshanba, Juma 900-1200{" "}
                              <br />
                              E-mail: djandullaeva@mail.ru <br />
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        Djandullaeva Munavara Saparbaevna
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
                <Link to={"/page/static/get/33"}>
                  <li className="nav-ul-li active">
                    <a href="kafedra">{context[lang].kaf3.p50}</a>
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
