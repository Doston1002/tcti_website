import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Image from '../../images/8.jpg'
import Image2 from '../../images/9.jpg'
import Image3 from '../../images/10.jpg'
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
                                <h3>{context[lang].centre.sixth}</h3>
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
                                    }} id="defaultOpen">Bizning maqsadimiz</button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">Bizning vazifamiz</button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h3>Bo'lim haqida</h3>
                                    <p>Hurmatli foydalanuvchilar, agarda sizda ta'lim sifatini oshirish yuzasidan takliflar va shikoyatlar mavjud bo'lsa ushbu manzil orqali o'z fikringizni yuborishingiz mumkin.
                                        <br />
                                        Toshkent kimyo-texnologiya instituti tarkibidagi Ta’lim sifatini nazorat qilish bo‘limi O‘zbekiston Respublikasi Vazirlar Mahkamasining 2017 yil 18 iyuldagi “O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat inspeksiyasi faoliyatini tashkil etish to‘g‘risida”gi 515-son qarorining 14-bandiga muvofiq tashkil etilgan bo‘lib, bevosita oliy ta’lim muassasasi tarkibiga kiradi.
                                        <br />
                                        Bo‘limning asosiy maqsadi TKTI talabalari bilimlarining davlat ta’lim standartlariga muvofiqligini o‘rganib borish, tahlil qilish, kadrlar tayyorlash sifati monitoringini yuritish, TKTIni ichki attestatsiyadan o‘tkazishni tashkil etish va uning natijalari bo‘yicha ta’lim sifatiga salbiy ta’sir etuvchi omillarni aniqlash hamda ularni bartaraf etish va oldini olish choralarini ko‘rishdan iborat.
                                        <br />
                                        Bo‘lim o‘z faoliyatini O‘zbekiston Respublikasi Konstitutsiyasi, O‘zbekiston Respublikasining “Ta’lim to‘g‘risida”gi qonuni, Kadrlar tayyorlash milliy dasturi, O‘zbekiston Respublikasi Oliy Majlisining palatalari qarorlari, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari, O‘zbekiston Respublikasi Vazirlar Mahkamasi qarorlari va farmoyishlari, Davlat inspeksiyasi hamda TKTI rektorining buyruqlari va qonuniy ko‘rsatmalariga, shuningdek bo‘lim to‘g‘risidagi Nizomga muvofiq olib boradi.</p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    <h3>Bizning maqsadimiz</h3>
                                    <p>Bo‘lim quyidagi huquqlarga ega:
                                        <br />
                                        Bo‘lim zimmasiga yuklatilgan vazifalar va funksiyalarni bajarish uchun TKTI tarkibiy tuzilmalaridan zarur ma’lumotlar va materiallarni olish;

                                        TKTIda talabalar, tinglovchilar va o‘quvchilarni o‘qitish sifatini, ta’limning tegishli turlari bo‘yicha ishchi o‘quv rejalari va fanlarning ishchi dasturlarini DTSlariga, davlat talablariga, malaka talablariga va o‘quv reja hamda fanlarning namunaviy dasturlariga muvofiqligini belgilangan tartibda o‘rganish;
                                        <br />
                                        TKTIda attestatsiya jarayonida aniqlangan kamchiliklarni bartaraf etish bo‘yicha chora-tadbirlar rejasini ishlab chiqishda ishtirok etish va uning o‘z vaqtida bajarilishini nazoratga olish;

                                        TKTIda ta’lim sifatiga oid qabul qilingan buyruqlar, farmoyishlar va boshqa qarorlarning yetarli darajada ijrosi ta’minlanmaganligi aniqlanganda, mas’ullarga nisbatan tegishli choralar ko‘rish uchun rahbariyatga takliflar kiritish;

                                        institutda ijtimoiy muhitni, kadrlar tayyorlash va ta’lim sifatini o‘rganish maqsadida doimiy ravishda talaba, ota-ona, professor-o‘qituvchi va kadrlar iste’molchilari o‘rtasida ijtimoiy so‘rovlar o‘tkazilishini tashkil qilish;
                                        <br />
                                        ta’lim va kadrlar tayyorlash sifati muammolari bo‘yicha xalqaro konferensiyalar, anjumanlar, simpoziumlar, seminar va o‘quvlarda ishtirok etish;

                                        belgilangan tartibda OTM Kengashiga saylash va saylanish;

                                        O‘zbekiston Respublikasi qonunchiligida belgilangan boshqa huquqlardan foydalanish.

                                        Bo‘lim quyidagi majburiyatlarga ega:

                                        xizmat vazifalarini vijdonan bajaradi va o‘z sha’niga dog‘ tushirmaydi;</p>
                                </div>


                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h3>Bizning vazifamiz</h3>
                                    <p>Davlat inspeksiyasiga taqdim qilinayotgan ma’lumotlarning haqqoniyligiga hamda TKTIning ishchi o‘quv rejalari va fanlarning ishchi dasturlarini tayyorlash sifati, bitiruvchilarning yakuniy attestatsiya va reyting baholari xolisligini belgilangan tartibda nazoratini tashkil etishga javob beradi.

                                        O‘zbekiston Respublikasi Vazirlar Mahkamasining 1999 yil 12 yanvardagi 12-sonli «Ijro intizomini mustahkamlash chora-tadbirlari to‘g‘risida»gi qaroriga muvofiq ijro intizomiga, o‘quv va mehnat intizomiga, mehnatni muhofaza qilish, xavfsizlik texnikasi va ishlab chiqarish sanitariyasiga doir qoidalar, TKTIning Ustavi, Ichki tartib hamda Odob-ahloq qoidalariga rioya etadi.

                                        Bo‘lim boshlig‘i va bosh mutaxassis lavozimlariga nomzodlar institut rektori buyrug‘i bilan Davlat inspeksiyasi boshlig‘i tavsiyasiga asosan tayinlanadi va Davlat inspeksiyasi boshlig‘i ruxsati bilan lavozimlaridan ozod etiladi.
                                        <br />
                                        Bo‘lim o‘z faoliyatini yuritishda Davlat inspeksiyasiga va institut rektoriga bo‘ysunadi.

                                        Тошкент кимё-технология институти таълим сифатини назорат қилиш бўлимининг 2018 йил I - чорак иш режасида белгиланган вазифалар ижроси юзасидан ҲИСОБОТИ

                                        Hamkorlik aloqalari doirasida o‘tkazilgan mahorat darsi

                                        Qo‘shma ta’lim dasturlari  “2+2” (“double degree”): tahlil, muammolar, afzalliklari
                                    </p>
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
                                                    <span className="degree">Bo'lim boshlig'i</span>
                                                    <span className="info">To‘raev Tolib Bozorovich

                                                        Texnika fanlari nomzodi, dotsent

                                                        E-mail: t_tolibbek@mail.ru

                                                        Tel.:+99871-244-35-72.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">To‘raev Tolib Bozorovich</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image2} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree"> Bosh mutaxassis</span>
                                                    <span className="info">Saparov Bobur Jumaboy o'g'li

                                                        E-mail: Saparov.boburbek@mail.ru.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal">Saparov Bobur Jumaboy o'g'li</h6>
                                    </div>
                                    <div className="wrapper-personal">
                                        <div className="photo-personal">
                                            <img className="images-personal" src={Image3} alt="About us" />
                                            <div className="photo__large">
                                                <div className="bg-text">
                                                    <span className="degree"> Bosh mutaxassis</span>
                                                    <span className="info"> To‘xtamushova Anisaxon Ubaevna

                                                        E-mail: anisakhon@inbox.ru.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="fullname-personal"> To‘xtamushova Anisaxon Ubaevna</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                            <li className="nav-ul-li active"><a href="kafedra">Ta’lim sifatini nazorat qilish bo‘limi</a></li>
                            <Link to={'/page/static/get/8'}>
                                <li className="nav-ul-li"><a href="kafedra">Marketing va talabalar amaliyoti boʻlimi</a></li>
                            </Link>
                            <Link to={'/page/static/get/9'}>
                                <li className="nav-ul-li"><a href="kafedra">Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo'limi</a></li>
                            </Link>
                            <Link to={'/page/static/get/15'}>
                                <li className="nav-ul-li"><a href="kafedra">Xalqaro aloqalar bo`limi</a></li>
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
