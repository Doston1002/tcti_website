import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'
import GerbSymbol from '../../images/symbol-gerb.png'
import TopSymbols from '../../images/top-sym.png'


function Symbols() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">

                <Header />
                <div className="mainsss">
                    <div className="page_main">
                        <div className="clearfix" id="content">
                            <div className="symbols">
                                <img src={TopSymbols} className='top-sym' alt="Davlat ramzlari" />
                                <br />
                                <p><img alt="gerb" src={GerbSymbol} /></p>
                                <br />
                                <h4>DAVLAT GERBI</h4>

                                <p>O'zbekiston Respublikasi Davlat gerbi to'g'risidagi Qonun 1992 yil 2 iyulda O'zbekiston Respublikasi Oliy Kengashining X sessiyasida qabul qilingan.</p>

                                <p>O'zbekiston Respublikasining Davlat gerbi gullagan vodiy uzra charaqlab turgan quyosh tasviridan hamda so'l tomonida bug'doy boshoqlari, o'ng tomonida ochilgan paxta chanoqlari suvrati tushirilgan chambardan iborat.</p>

                                <p>Gerbning yuqori qismida respublika jipsligining ramzi sifatida sakkiz qirrali yulduz tasvirlangan: sakkiz qirra ichida joylashgan yarim oy va yulduz musulmonlarning qutlug' ramzidir.</p>

                                <p>Gerbning markazida himmat, olijanoblik va fidoyilik timsoli bo'lgan afsonaviy Humo qushi qanotlarini yozib turibdi. Ushbu ramz va timsollar xalqimizning tinchlik, yaxshilik, baxt-saodat, farovonlik yo'lidagi orzu-umidlarini&nbsp;ifodalaydi.</p>

                                <p>Gerbning pastki qismida respublika Davlat bayrog'ini ifoda etuvchi chambar lentasining bandiga O'zbekiston deb yozib qo'yilgan.</p>
                                <br />

                                <h4>DAVLAT BAYROG'I</h4>
                                <br />
                                <img alt="bayroq" className="alignright size-full wp-image-2328" src="http://tkti.uz/uploads/2016/01/bayroq.png" />
                                <br />
                                <p>O'zbekiston Respublikasi Davlat bayrog'i to'g'risidagi qonun 1991 yil 18 noyabrda O'zbekiston Respublikasi Oliy Kengashining navbatdan tashqari o'tkazilgan VII sessiyasida qabul qilingan.</p>

                                <p>Davlat bayrog'i va uning ramzi bugungi O'zbekiston sarhadida qadimda mavjud bo'lgan davlatlar bilan tarixan bog'liqligini anglatadi hamda respublikaning milliy-madaniy an'analarini o'zida mujassamlashtiradi.</p>



                                <p>1. Bayroqdagi moviy rang tiriklik mazmuni aks etgan mangu osmon va obihayot ramzi. Timsollar tilida bu yaxshilikni, donishmandlikni, halollikni, shon-shuhrat va sadoqatni bildiradi. Binobarin, Amir Temur davlati bayrog'ining rangi ham moviy rangda edi.</p>

                                <p>2. Bayroqdagi oq rang muqaddas tinchlik ramzi bo'lib, u kun charog'onligi va koinot yoritqichlari bilan uyg'unlashib ketadi. Oq rang poklik, beg'uborlik, soflikni, orzu va hayollar tozaligi, ichki go'zallikka intilishning timsoli.</p>

                                <p>3. Yashil rang tabiatning yangilanish ramzi. U ko'pgina xalqlarda navqironlik, umid va shodumonlik timsoli hisoblanadi.</p>

                                <p>4. Qizil chiziqlar vujudimizda jo'shib oqayotgan hayotiy qudrat irmoqlarini anglatadi.</p>

                                <p>5. Navqiron yarim oy tasviri bizning tarixiy an'analarimiz bilan bog'liq. Ayni paytda u qo'lga kiritilgan mustaqilligimiz ramzi ham.</p>

                                <p>6. Yulduzlar barcha uchun ruhoniy, ilohiy tismol sanalgan. O'zbekiston Respublikasi Davlat bayrog'idagi 12 yulduz tasviri ham tarixiy an'analarimiz, qadimgi yilnomamizga bevosita aloqador. Bizning o'n ikki yulduzga bo'lgan e'tiborimiz O'zbekiston sarhadidagi qadimgi davlatlar ilmiy tafakkurida nujum ilmi taraqqiy etganligi bilan ham izohlanadi.</p>

                                <p>Davlat bayrog'imizdagi 12 yulduz tasvirini o'zbek xalqi madaniyatining qadimiyligi, uning komillikka, o'z tuprog'ida saodatga intilishi ramzi sifatida tushunish lozim.</p>
                                <br />
                                <h4>DAVLAT MADHIYASI</h4>
                                <br />
                                <p>O'zbekiston Respublikasi Davlat gimni to'g'risidagi Qonun 1992 yil 10 dekabrda O'zbekiston Respublikasi Oliy Kengashining XI Sessiyasida qabul qilingan.</p>

                                <p>Davlat madhiyasining so'zi O'zbekiston xalq shoiri Abdulla Oripov qalamiga mansub, musiqasini esa bastakor Mutal (Mutavakkil) Burhonov yozgan.</p>

                                <p><a target="_blank" href="https://www.gov.uz/uploads/madhiya.mp3" rel="noopener noreferrer">Audio</a></p>

                                <p>Abdulla Oripov so'zi, Mutal Burhonov musiqasi</p>

                                <p>Serquyosh hur o'lkam, elga baxt, najot,</p>

                                <p>Sen o'zing do'stlarga yo'ldosh, mehribon!</p>

                                <p>Yashnagay to abad ilmu fan, ijod,</p>

                                <div>Shuhrating porlasin toki bor jahon!</div>

                                <p>Naqorat:<br />
                                    Oltin bu vodiylar jon O'zbekiston,<br />
                                    Ajdodlar mardona ruhi senga yor!<br />
                                    Ulug' xalq qudrati jo'sh urgan zamon<br />
                                    Olamni mahliyo aylagan diyor!</p>

                                <p>Bag'ri keng o'zbekning o'chmas iymoni,<br />
                                    Erkin, yosh avlodlar senga zo'r qanot!<br />
                                    Istiqlol mash'ali, tinchlik posboni,<br />
                                    Haqsevar ona yurt, mangu bo'l obod!</p>

                                <p>Naqorat:<br />
                                    Oltin bu vodiylar jon O'zbekiston,<br />
                                    Ajdodlar mardona ruhi senga yor!<br />
                                    Ulug' xalq qudrati jo'sh urgan zamon<br />
                                    Olamni mahliyo aylagan diyor!</p>
                            </div>
                        </div>

                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" />{context[lang].header.first}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].generalInformation.first}</a></li>
                            <Link to={'/page/static/get/otm_ish_reja'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/biz_bn_aloqa'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.fifth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/bizning_manzil'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/aloqa'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/otm_ustavi'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].generalInformation.sixth}</a></li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Symbols;