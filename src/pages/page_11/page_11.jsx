import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/rttm.png'
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
                            <h3>{context[lang].centre.twelveth}</h3>
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
                                <p>Markaz faoliyati haqida ma’lumot : Markaz o’zining faoliyatini va rivojlanishini yaratilayotgan dasturiy va multimediya mahsulotlari va boshqa mahsulotlar, ko’rsatilayotgan xizmat va ish turlari bo’yicha rivojlanish istiqbollarni rejalashtiradi, hamda markazning ishlab-chiqarish, ijtimoiy va material-texnik bazasini kengaytirishni belgilaydi.
                                    <br />
                                    Ko’rsatiladigan xizmat va ish turlari bo’yicha buyurtmachilar, hamda texnikaviy resurslarni va qurilmalarni yetkazib beruvchilar bilan munosabatlarni shartnoma asosida olib boradi.
                                    <br />
                                    Markaz xo’jalik sub’ektlari va fizik shaxslar buyurtmalarini O’zbekiston Respublikasi qonunlarida va TKTI Nizomida ko’rsatilgan tartibda shartnoma asosida bajarishi mumkin.
                                    <br />
                                    Markazning boshqa tashkilotlar, korxonalar, fizik va yuridik shaxslar bilan xo’jalik faoliyati barcha sohalar bo’yicha shartnoma asosidagi o’zaro munosabatlar yordamida o’rnatiladi. Markaz O’zbekiston Respublikasi qonuniga va TKTI Nizomiga zid bo’lmasa, shartnoma predmetini, majburiyatlarni va xo’jalik munosabatlarini boshqa shartlarini aniqlashda erkin tanlash huquqiga ega.
                                    <br />
                                    Axborotlashtirish va texnikaviy ta’minot bo`limi universitetda o`quv jarayoniga yangi axborot kommunikatsiya texnologiyalarini joriy qilish bo`yicha asosiy bo`linma hisoblanadi va ilmiy ishlar prorektoriga bo`ysunadi.
                                    <br />
                                    Axborotlashtirish va texnikaviy ta’minot bo`limining faoliyati «Ta’lim to`g`risidagi» qonunga, Oliy va o`rta maxsus ta’lim vazirligining me’yoriy hujjatlari va buyruqlariga, institut ustaviga va mazkur nizomga muvofiq ravishda o`quv ishlari prorektori tomonidan tasdiqlangan reja asosida tashkil qilinadi.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h3>Bizning maqsadimiz</h3>
                                <p>Axborotlashtirish va texnikaviy ta’minot bo`limining boshlig`i ilmiy ishlar prorektori taklifiga binoan, o`rnatilgan tartibda, rektor tomonidan lavozimiga tayinlanadi va undan ozod qilinadi.
                                    <br />
                                    Axborotlashtirish va texnikaviy ta’minot bo`limi o`z faoliyati yuzasidan institut rektoriga, o’quv ishlar prorektoriga, shuningdek, institut ilmiy kengashiga yilda bir marta hisobot beradi.
                                    <br />
                                    Axborotlashtirish va texnikaviy ta’minot bo`limi strukturasi va shtatlari ilmiy ishlar prorektorining taklifiga binoan va OO`MTV bilan Moliya vazirligi tomonidan tasdiqlangan «O`zbekiston Respublikasi oliy ta’lim muasassalarining boshqaruv, xizmatchi va texnik xodimlarining namunaviy shtatlari»ga muvofiq rektor tomonidan tasdiqlanadi.
                                    <br />
                                    Axborotlashtirish va texnikaviy ta’minot bo`limi xodimlari orasida vazifalar bo`lim boshlig`i tomonidan taqsimlanadi. Axborotlashtirish va texnikaviy ta’minot bo`limi xodimlarining huquq va vazifalari bo`lim maqsadlari va vazifalariga, shuningdek amaldagi qonuniyatga muvofiq ishlab chiqilgan va o’quv ishlar prorektori tomonidan tasdiqlangan xizmat instruktsiyalari bilan belgilanadi.</p>
                            </div>


                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>Bizning vazifamiz</h3>
                                <p>axborot marketingni tashkil etish;
                                    <br />  axborot texnologiyalar va multimedia tizimlari sohasidagi ishlarni oliy ta’lim va fani sohalariga tadbiq qilish;
                                    <br />  masofaviy ta’lim va o‘qitishni rivojlantirish, uning didaktik va metodik ta’minotini tashkil etish, ma’ruzalarning elektron versiyalarini yaratish;
                                    <br />  horijiy mamlakatlar va respublikadagi tashkilotlar, kutubxonalar, ilmiy tadqiqot institutlari, korxonalar va oliy o‘quv yurtlari bilan o‘zaro axborot aloqalarni ta’minlash;
                                    <br />  internet tarmog‘i va elektron pochta xizmatlarini ko‘rsatish, aniq mavzular bo‘yicha ma’lumotlarni qidirish va ular joylashgan adreslarni taklif etish;
                                    <br />  hisoblash texnikasi vositalariga, kompyuterlarga servis xizmatini tashkil etish, ularni ta’mirlash va modernizatsiyalash;
                                    <br /> axborot-kompyuter tarmoqlari va tizimlarini loyihalashtirish, ishga tushirish va sozlash.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="teachers justify-content-between">
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal images-personal_rttm" src={Image} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Bo'lim boshlig'i</span>
                                                <span className="info">Shuhratov Ma'murjon Shuhrat o'g'li

                                                    Raqamli ta'lim texnologiyalari markazi rahbari

                                                    Telefon: +99871 244-79-32
                                                    <br />
                                                    E-mail: shm494@mail.ru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Shuhratov Ma'murjon Shuhrat o'g'li</h6>
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
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li active"><a href="kafedra">Raqamli ta'lim texnologiyalari markazi</a></li>
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
