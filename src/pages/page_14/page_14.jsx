import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image from '../../images/356a192b79_1617447562.jpg'
import Image2 from '../../images/da4b9237ba_1617447572.jpg'
import Image3 from '../../images/77de68daec_1617447579.jpg'
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
                            <h3>{context[lang].centre.thirteenth}</h3>
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
                                <p>Toshkent kimyo-texnologiya instituti huzuridagi “Pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish” tarmoq markazi dastlab Oʼzbekiston Respublikasi Oliy va oʼrta maxsus taʼlim vazirligining 1999 yil 19 fevraldagi 57-sonli buyrugʼiga asosan “Malaka oshirish fakulteti” sifatida tashkil etilgan. Fakultet tomonidan 2012 yilgacha respublikamizdagi oliy taʼlim muassasalarining mutaxassislik fanlari oʼqituvchilari oʼz bilim va koʼnikmalarini oshirishlari uchun malaka oshirish kurslari tashkil etilgan boʼlsa, 2012 yildan Oʼzbekiston Respublikasi Prezidentining 2012 yil 28 maydagi “Malakali pedagog kadrlar tayyorlash hamda oʼrta maxsus, kasb-hunar taʼlimi muassasalarini shunday kadrlar bilan taʼminlash tizimini yanada takomillashtirishga oid chora-tadbirlar toʼgʼrisida”gi PQ-1761-sonli qarori asosida fakultetda oʼrta maxsus, kasb-hunar taʼlimi tizimi pedagog kadrlari malakasini oshirish kurslari ham yoʼlga qoʼyilgan. 2015 yildan boshlab esa Oʼzbekiston Respublikasi Prezidentining 2015 yil 12-iyundagi “Oliy taʼlim muassasalarining rahbar va pedagog kadrlarini qayta tayyorlash va ularning malakasini oshirish tizimini yanada takomillashtirish chora-tadbirlari toʼgʼrisida”gi PF-4732–sonli farmoniga muvofiq, Vazirlar Mahkamasining 2015 yil 20-avgustdagi “Oliy taʼlim muassasalarining rahbar va pedagog kadrlarini qayta tayyorlash va malakasini oshirishni tashkil etish chora-tadbirlari toʼgʼrisida”gi 242–sonli qarori, Oʼzbekiston Respublikasi Vazirlar Mahkamasining 2014 yil 27-martdagi “Davlat va xoʼjalik boshqaruvi, mahalliy davlat hokimiyati organlari xodimlarini axborot–kommunikatsiya texnologiyalari sohasida malakalarini oshirish boʼyicha qoʼshimcha chora-tadbirlar toʼgʼrisida”gi 73-sonli qarori hamda Vazirlar Mahkamasining 2015 yil 21-sentyabrdagi “Oliy taʼlim muassasalari pedagog kadrlarini qayta tayyorlash va ularning malakasini oshirish tizimini yanada takomillashtirish chora-tadbirlari toʼgʼrisida”gi 273-sonli qarori asosida “Pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish” tarmoq markazi” sifatida oʼz faoliyatini davom ettirib kelmoqda. Tarmoq markazida Qayta tayyorlash va malaka oshirish taʼlim jarayonini tashkil etish va sifatini oʼrganish boʼlimi, Qayta tayyorlash va malaka oshirish taʼlim dasturlari va ilgʼor tajribani joriy etish boʼlimi, Xalqaro hamkorlik boʼlimi mavjud.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h3>Bizning maqsadimiz</h3>
                                <p>Oʼzbekiston Respublikasi Prezidentining 2019 yil 27 avgustdagi PF-5789-sonli qaroriga muvofiq oliy taʼlim muassasalari pedagog kadrlarining uzluksiz malakasini oshirish tizimini joriy etish maqsadida tarmoq markazida kunduzgi (bevosita) oʼqitish bilan bir qatorda masofaviy oʼqitish tizimi ham tashkil etilgan. “Pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish” tarmoq markazida oʼqitish jarayonini yanada takomillashtirish va sifatini oshirish maqsadida oliy taʼlim muassasalari professor-oʼqituvchilari uchun quyidagi 5 ta yoʼnalish boʼyicha qayta tayyorlash va malaka oshirish kurslari tashkil etilgan</p>
                            </div>


                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>Bizning vazifamiz</h3>
                                <p>Shuningdek, tarmoq markazi tinglovchilarining amaliy koʼnikmalarini oshirish maqsadida zamonaviy moddiy-texnika bazasi va yuqori texnologiyalarga ega korxona va tashkilotlarda koʼchma va amaliy mashgʼulotlari tashkil etilmoqda. Hozirda tarmoq markazi respublikamizning 30 dan ortiq yirik ishlab chiqarish korxona va tashkilotlari, vazirlik hamda qoʼmitalar, Oʼzbekiston Respublikasi Fanlar Аkademiyasi huzuridagi ilmiy tadqiqot institutlari hamda xorijning yetakchi universitetlari bilan shartnomalar imzolagan.
                                    <br />
                                    Shuningdek, markaz tinglovchilarining xorijiy professor-oʼqituvchilar bilan xorijiy tajriba va fikr almashishlari uchun har yili markazga xorijiy davlat universitetlari hamda xalqaro uyushmalar va agentliklardan, jumladan, АQShning Chikago Ekolab laboratoriyasi, Buyuk Britaniyaning Xalqaro oziq-ovqat xavfsizligi agentligi, Janubiy Koreyaning Ulsan texnoparki, Belarussiyaning Mogilyov davlat oziq-ovqat universiteti, Rossiyaning Tambov davlat universiteti kabilarning yetakchi professor-oʼqituvchilar va xalqaro ekspertlari jalb etib kelinmoqda.
                                    <br />
                                    2019 yil davomida Janubiy Koreya, Daniya, АQSh, Belarussiya, Xitoy xalq Respublikasi, Rossiya Federatsiyasi va Ukrainadan jami 12 nafar xorijiy mutaxassislar taklif etilgan. 2020 yil davomida Janubiy Koreya, Belarussiya, АQSh, Rossiya Federatsiyasi, Buyuk Britaniyadan 22 nafar xorijiy mutaxassislar jalb etilgan. 2021 yilda esa jami 14 nafar yetakchi mutaxassislar tarmoq markazi tinglovchilariga oʼz tajribalarini almashishlari rejalashtirilgan.
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
                                                <span className="info">Mirzaqulov Xoltura Chorievich

                                                    Аloqalar: Tel.: +998712447928

                                                    E-mail: tkti.tm@mail.ru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Mirzaqulov Xoltura Chorievich</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image2} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Bosh hisobchi</span>
                                                <span className="info">Rabbimov Аʼzam Surʼatovich
                                                    <br />
                                                    Аloqalar: Tel.: +998712447928
                                                    <br />
                                                    E-mail: tkti.tm@mail.ru.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Rabbimov Аʼzam Surʼatovich</h6>
                                </div>
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image3} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">Mutaxassisi</span>
                                                <span className="info">Аshurova Shahina Burxonjon qizi
                                                    <br />
                                                    Аloqalar: Tel.: +998712447928
                                                    <br />
                                                    E-mail: tkti.tm@mail.ru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal">Аshurova Shahina Burxonjon qizi</h6>
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
                        <li className="nav-ul-li active"><a href="kafedra">TKTI huzuridagi “Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish” tarmoq markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="kafedra">Raqamli ta'lim texnologiyalari markazi</a></li>
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
