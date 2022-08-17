import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import ParticlesBg from 'particles-bg'
import Image1 from '../../images/kafedra/oziq-1.jpg'
import Image2 from '../../images/kafedra/oziq-2.jpg'
import Image3 from '../../images/kafedra/oziq-3.jpg'
import Image4 from '../../images/kafedra/oziq-4.jpg'
import Image5 from '../../images/kafedra/oziq-5.jpg'
import Image6 from '../../images/kafedra/oziq-6.jpg'
import Image7 from '../../images/kafedra/oziq-7.jpg'
import Image8 from '../../images/kafedra/oziq-8.jpg'
import Image9 from '../../images/kafedra/oziq-9.jpg'
import Image10 from '../../images/kafedra/oziq-10.jpg'
import Image11 from '../../images/kafedra/oziq-11.jpg'
// import Image12 from '../../images/kafedra/oziq-12.jpg'
import Image13 from '../../images/kafedra/oziq-13.jpg'
import Image14 from '../../images/kafedra/oziq-14.jpg'
import Image15 from '../../images/kafedra/oziq-15.jpg'
import Image16 from '../../images/kafedra/oziq-16.jpg'
import Image17 from '../../images/kafedra/oziq-17.jpg'
import Image18 from '../../images/kafedra/oziq-18.jpg'
import Image19 from '../../images/kafedra/oziq-19.jpg'
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
                  <h3>{context[lang].kafedra.eighth}</h3>
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
                      {context[lang].kaf1.p10}
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
                      Kadrlar tayyorlash
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
                    <h4>{context[lang].kaf1.p10}</h4>
                    <p>
                      {" "}
                      “Oziq-ovqat mahsulotlari texnologiyasi” kafedrasi o’zining
                      ta’lim va fan sohasidagi faoliyatini dunyodagi yetakchi
                      oliy ta’lim muassasalari va ilmiy guruhlari tomonidan
                      foydalanib kelinayotgan samarador usullar asosida olib
                      boradi. Bu esa o’z navbatida, dunyoning yetakchi oliy
                      ta’lim muassasalari (OTM), ilmiy tadqiqot institutlari
                      (ITI) va ishlab chiqarish korporasiyalari bilan uzviy
                      munosabatda bo’lishini ta’minlaydi. Kafedrada bakalavr,
                      magistratura, tayanch doktorantura (PhD) va doktorantura
                      (DSc) bosqichlarida kadrlar tayyorlanadi. Innovatsion
                      ta’lim va fan texnologiyalari qo’llanilib va doimiy
                      ravishda yangilanib, shuning bilan birgalikda kafedrada
                      mavjud ilmiy yo’nalishlar muntazam rivojlantirilib
                      kelinmoqda. Ishlab chiqarish va tegishli sanoat
                      korxonalari bilan doimiy hamkorlik yuqori ilmiy
                      salohiyatga ega bo’lgan yosh kadrlarni yetishtirishda
                      muhim omillardan biri hisoblanib, hozirgi kunda kafedra
                      Respublikamizdagi barcha hududlardagi zamonaviy korxonalar
                      bilan bir qatorda xorijiy OTMlar bilan ham aloqalarni
                      yo’lga qo’ygan.
                    </p>
                  </div>

                  <div id="Functions" ref={tabTwo} className="tabcontent">
                    <h4>Kadrelar tayyorlash</h4>
                    <p>
                      {" "}
                      Ushbu bakalavr yo’nalishi va magistratura mutaxassisligi
                      zamon bilan hamnafas, ilg’or rivojlanayotgan
                      yo’nalishlardan biri bo’lib, bu sohani tamomlagan kadrlar
                      O’simlik moylarini ishalab chiqarish, yog’larni qayta
                      ishalsh , don va don mahsulotlarini ilmlari kabi zarur
                      bilim va ko’nikmalarga ega bo’ladilar hamda sanoatning
                      oziq-ovqat, ilmiy muamolarni xal qilishdagi ko’nikmalar va
                      shu kabi ko’plab boshqa sektorlarida o’z faoliyatlarini
                      davom ettira oladilar. Bizning talabalarimiz ishlab
                      chiqarish jarayonlarida mavjud jarayonlarni o'rganish
                      uchun eng zamonaviy sharoitlarga ega ta’lim va fan
                      uyg’unlashgan laboratoriya xonalarida mashg’ulotlar olib
                      boradilar. Tegishli mutaxassislik fanlaridan a’lo
                      baholarga o’qiydigan haqiqiy iqtidorli va bilimli
                      talabalar muntazam ravishda rag’batlantirilib boriladi.
                    </p>
                  </div>

                  <div id="Management" ref={tabThree} className="tabcontent">
                    <h4>Ilmiy yo'nalishlar</h4>
                    <p>
                      {" "}
                      Kafedra professor-oʼqituvchilari malakali
                      muhandis-texnologlar tayyorlash bilan bir qatorda keng
                      koʼlamli ilmiy tadqiqot ishlarini olib bormoqdalar.
                    </p>
                    <p>
                      Yogʼ-moy texnologiyasi yoʼnalishi: Paxta, soya va raps
                      moylarini gidrogenlash, paxta chigitini qayta ishlash
                      jarayonida gossipolni zararsizlantirish, paxta moyini
                      tozalash texnologiyalarini takomillashtirish boʼyicha
                      bajarilgan ilmiy tadqiqot ishlari natijalari Toshkent
                      yogʼ-moy kombinatida va Qarshi, Koson moy-ekstraktsiya
                      zavodlarida sanoatga tadbiq etilgan.
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
                              Ilmiy nashrlari *: 2 ta monografiya 3 ta darslik,
                              2-o’quv qo’llanma 40 ta ilmiy maqolalar
                              <br />
                              Qabul kunlari *: Har kuni 1400-1600
                              <br />
                              Elektron manzil *: Akbar216@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Ro‘ziboev Akbarali Tursunboevich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image2}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              kafedrasi dotsenti, t.f.n., dotsent
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: 15 ta uslubiy ko‘rsatma, 2 ta
                              darslik, 150 ta ortiq ilmiy maqolalar
                              <br />
                              Qabul kunlari *: dushanba ,chorshanba, juma
                              1400-1600
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Ilxomjonov Po‘lat Ilxomjonovich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image3}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              kafedrasi t.f.d. dotsenti
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: 6 ta uslubiy ko‘rsatma, 50 ta
                              ilmiy maqolalar
                              <br />
                              Qabul kunlari *: Shanba
                              <br />
                              Elektron manzil *: Axror_86_249@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Абдурахимов Ахрор Анварович
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image4}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree"> kafedrasi dotsent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 5 ta uslubiy ko‘rsatma, 40 ta
                              ilmiy maqolalar, 1 monografiya
                              <br />
                              Qabul kunlari *: xar kun 1400-1600
                              <br />
                              Elektron manzil *: Rano-akr-1976@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Akramova Ra’no Ramziddinovna
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image5}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi PhD, dotsent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 45 ta
                              ilmiy maqolalar,
                              <br />
                              Qabul kunlari *: xar kun 1400-1600
                              <br />
                              Elektron manzil *: Abbos.x@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Hasanov Abbos Hasanovich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image6}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi assistent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 35 ta
                              ilmiy maqolalar, 1 ta monografiya
                              <br />
                              Qabul kunlari *: xar kun 1400-1600
                              <br />
                              Elektron manzil *: vip.asliddin@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Fayzullayev Asliddin Zuvaydulloyevich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image7}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi PhD kat.o’q</span>
                            <span className="info">
                              Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 43 ta
                              ilmiy maqolalar, 3 ta monografiya
                              <br />
                              Qabul kunlari *: xar kun 1400-1600
                              <br />
                              Elektron manzil *: dakn3s_93@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Xodjayev Sarvar Faxriddinovich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image8}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              {" "}
                              kafedrasi PhD, v.b.dots.
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: 22 ta ilmiy maqolalar, 1 ta
                              monografiya
                              <br />
                              Qabul kunlari *: xar kun 1400-1600
                              <br />
                              Elektron manzil *: Rahimov1984@list.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Raximov Dilshod Pulatovich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image9}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi PhD , kat.o'q</span>
                            <span className="info">
                              Ilmiy nashrlari *: 22 ta ilmiy maqolalar, 1 ta
                              monografiya
                              <br />
                              Qabul kunlari *: dushanbadan jumagacha 1400-1600
                              <br />
                              Elektron manzil *: avliyoxonova@bk.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        Salijonova Shaxnozaxon Dilmurodovna
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image10}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              kafedrasi katta o’qituvchi
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: 10 ilmiy maqolalar
                              <br />
                              Qabul kunlari *: dushanba, chorshanba, juma
                              1400-1600
                              <br />
                              Elektron manzil *: muslimgul@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Ashurmatova Gulchexra Isamidinovna
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image11}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              kafedrasi dotsenti, t.f.n., dotsent
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: 35 ta uslubiy ko‘rsatma, 100 ta
                              ilmiy maqolalar,
                              <br />
                              Qabul kunlari *: Dushanba, chorshanba va
                              juma1400-1600
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Ayxodjaeva Nodira Karimullaevna
                      </h6>
                    </div>
                    {/* <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image12} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">kafedrasi dotsenti, t.f.n., dotsent</span>
                                                <span className="info">
                                                    Ilmiy nashrlari *: , 25 та ilmiy maqolalar
                                                    <br />
                                                    Qabul kunlari *:   seshanba 1400-1600
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal"> Agzamov Xurshid  Kazimovich</h6>
                                </div> */}
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image13}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi PhD dostent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 30 ta uslubiy qo’llanmalar, 6
                              ta darslik, 80 ta ilmiy maqolalar, 2 ta
                              monografiya, 2 ta patent ,
                              <br />
                              Elektron manzil *: Djaxongirova. 77@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        Djaxangirova Gulnoza Zinatullayevna
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image14}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi PhD dostent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 10 ta uslubiy ko‘rsatma, 50 ta
                              ilmiy maqolalar, 3ta patent
                              <br />
                              Qabul kunlari *: har kuni 1400-1600
                              <br />
                              Elektron manzil *: ulug85bek77@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Baltaboev Ulug’bek Norboyevich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image15}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree"> kafedrasi PhD dostent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 2 ta uslubiy ko‘rsatma, 55 ta
                              ilmiy maqolalar, 1ta patent
                              <br />
                              Qabul kunlari *: shanba 1400-1600
                              <br />
                              Elektron manzil *: Anvar8184@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Normatov Anvar Mirzayevich
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image16}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              kafedrasi katta o’qiruvchi
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: 10 ta uslubiy ko‘rsatma, 16 ta
                              ilmiy maqolalar, 1 ta darslik, 1ta monografiya
                              <br />
                              Qabul kunlari *: shanba 1400-1600
                              <br />
                              Elektron manzil *: Tkti.dildora@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Махмудова Дилдора Хасановна
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image17}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">kafedrasi assistent</span>
                            <span className="info">
                              Ilmiy nashrlari *: 7 ta uslubiy ko‘rsatma, 10 ta
                              ilmiy maqolalar,
                              <br />
                              Qabul kunlari *: har kuni 1400-1600
                              <br />
                              Elektron manzil *: miralimovaaziza@gmail.com
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Mirolimova Aziza Isamutdinovna
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image18}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree">
                              kafedrasi katta o’qiruvchi
                            </span>
                            <span className="info">
                              Ilmiy nashrlari *: , 33 ta ilmiy maqolalar,
                              <br />
                              Qabul kunlari *: har kuni1400-1600
                              <br />
                              Elektron manzil *: sarbolayev_f@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Сарбалаев Фаррух Набиевич
                      </h6>
                    </div>
                    <div className="wrapper-personal">
                      <div className="photo-personal">
                        <img
                          className="images-personal"
                          src={Image19}
                          alt="About us"
                        />
                        <div className="photo__large">
                          <div className="bg-text">
                            <span className="degree"> PhD,v.b.dotsent</span>
                            <span className="info">
                              Qabul kunlari *: har kuni 1400-1600
                              <br />
                              Elektron manzil *: Soypro.uz@mail.ru
                            </span>
                          </div>
                        </div>
                      </div>
                      <h6 className="fullname-personal">
                        {" "}
                        Санаев Эрмат Шерматович
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
                <Link to={"/page/static/get/25"}>
                  <li className="nav-ul-li active">
                    <a href="kafedra">{context[lang].kaf3.p42}</a>
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
