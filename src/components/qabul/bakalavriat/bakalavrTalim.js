import React from 'react';
import {  useContext } from 'react';
import { Context as LanguageContext } from '../../../Context/Language';
// import context from '../../../lang/lang';
import './bakalavrtalim.css';

function Bakalavr() {
    const { lang } = useContext(LanguageContext);
    const [block, setBlock] = React.useState({
      umumiy: true
    })

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 bakalavr__container">
                          <h1>Bakalavriat va integratsiyalashgan tadqiqotlar</h1>

                         <p className='mt-3'> <strong>Bakalavriat ta'limi</strong> birinchi bosqichdagi ta'limdir. Ularga o'rta ma'lumotli va Universitet tomonidan belgilangan boshqa talablarga javob beradigan shaxslar qabul qilinadi. O'quv dasturlari hajmi 180 yoki 240 ta o'quv kreditini, kunduzgi o'qish muddati 3 yoki 4 yilni tashkil qiladi. Bakalavr bosqichi bakalavrning yakuniy loyihasi bilan yakunlanadi, bitiruvchilarga Litva malaka tuzilmasining oltinchi darajasiga mos keladigan bakalavr darajasi beriladi va ularga kasbiy faoliyat bilan shug‘ullanish va/yoki magistraturada (ikkinchi bosqich) o‘qishni davom ettirish huquqini beradi. Universitetda taqdim etiladigan bakalavriat ta'lim dasturlari ro'yxati bu yerda mavjud.  <br /> <br /> <strong>Integratsiyalashgan tadqiqotlar</strong> birinchi va ikkinchi davrli tadqiqotlarni o'z ichiga oladi. Ularga kirish imtihonlarini topshirgan va Universitet tomonidan belgilangan boshqa talablarga javob beradigan o‘rta ma’lumotli shaxslar qabul qilinadi. Universitet bitta integratsiyalashgan o'quv dasturini amalga oshiradi - Arxitektura , uning hajmi 300 ta o'quv krediti, o'qish muddati 5 yil. O'qishlar magistratura yakuniy loyihasi bilan yakunlanadi, bitiruvchilarga Litva malakaviy tuzilmasining ettinchi darajasiga mos keladigan va kasbiy faoliyat bilan shug'ullanish va/yoki doktoranturada (uchinchi bosqich) o'qishni davom ettirish huquqini beruvchi magistrlik darajasi beriladi.</p>
                    </div> 

                    <div className='study__on__tktu'>
                        <h1 id='qabul_shartlari'>Qabul qilish shartlari</h1>

                        <ol className='accept__condition__menu'>
                              <li>
                                    <li onClick={() => setBlock({umumiy: !block.umumiy})} className={`accept__condition ${block.umumiy ? 'active__condition' : ''}`}> Umumiy qoidalar</li>

                                    <div  className={block.umumiy ? 'accept__condition__item' : 'd-none'}>
                                          <h3>Umumiy qoidalar</h3>
                                          <p>Universitetda birinchi bosqichga (bakalavr) va integratsiyalashgan o'qishning birinchi semestriga qabul umumiy qabul va institutsional qabul orqali amalga oshiriladi , Kaunas Texnologiya Universitetiga 2022 yilgi talabalarni qabul qilish. qoidalarning II va VII boblarida (keyingi o'rinlarda - Qabul qilish qoidalari ) tasvirlangan tartib (1, 2 va 7-ilovalar).</p>
                                          <br />
                                          <a className='accept__condition__link' href="#">Qabul qilish qoidalari</a>
                                          <br />
                                          <p>Abituriyentlar o‘quv dasturining minimal talablariga muvofiqligi va tanlov balli asosida tanlov orqali qabul qilinadi </p>
                                          <br />
                                          <p>Minimal talablar shaxs tanlangan o'quv dasturi bo'yicha tanlovda qatnasha oladimi yoki yo'qligini belgilaydi. Amaldagi minimal talablar shaxsning ta'lim yillari, moliyalashtirish xususiyati yoki boshqa mezonlarga qarab farq qilishi mumkin . Birinchi bosqich va integral o'quv joylariga ariza topshirgan shaxslarning ta'lim natijalarining minimal ko'rsatkichlari Litva Respublikasi Ta'lim, fan va sport vazirining buyrug'i bilan tasdiqlanadi . Minimal talablar har bir o'quv dasturi uchun "Ro'yxatga olish shartlari" bo'limida, shuningdek, Qabul qilish qoidalarida va ushbu veb-saytning chap menyusidagi boshqa bo'limlarda keltirilgan.</p>
                                          <br />
                                          <p>O'qishga kiruvchi shaxslarning tanlov tartibi ularning tanlov baliga ko'ra shakllantiriladi . Abituriyentlar har bir taʼlim dasturi (taʼlim yoʻnalishi yoki yoʻnalishlar guruhi) boʻyicha tanlov balining kamayish tartibida tanlov navbatiga joylashtiriladi</p>
                                          <br />
                                          <p>Ta'limning istalgan shaklidagi (kunduzgi, sirtqi) yoki o'qishni moliyalashtirish turidagi (davlat tomonidan moliyalashtiriladigan, moliyalashtirilmaydigan) o'quv dasturlariga kirish uchun tanlov ballari xuddi shu tamoyillarga muvofiq tuziladi . Birinchi bosqich va integratsiyalashgan o'quv dasturlariga kirish uchun tanlov ballari tarkibi Qabul qilish qoidalarining 2 va 5-ilovalarida va har bir o'quv dasturi uchun "Kirish shartlari" bo'limida keltirilgan . Raqobat ball kalkulyatorida raqobatbardosh balingizni hisoblashingiz mumkin </p>
                                          <br />
                                          <p>Tanlov balini tuzish uchun ma'lumotlar tegishli ta'lim hujjatlari va boshqa hujjatlar yoki tarkibiy qismlardan olinadi. Agar hujjatlar xorijiy davlatlarning muassasalari tomonidan berilgan bo'lsa, ular Litva Respublikasida tegishli tartibda tan olinishi kerak </p>
                                          <br />
                                          <p>O'qishni tugatgandan so'ng universitetga qaytish istagida bo'lgan yoki kollej ma'lumotiga ega bo'lgan va oliy ta'lim (bakalavr malaka darajasi) olishni xohlovchi shaxslar qabulning V bobida ko'rsatilgan tartibda yuqori semestrga qabul qilinadi . Qoidalar (1 va 7-ilovalar tegishli).</p> 
                                          <br />
                                          <p>Universitetning oʻquv dasturlarida oʻqitiladigan individual modullarni oʻrganishni xohlovchi shaxslar tinglovchi boʻlishga va belgilangan toʻlov evaziga individual oʻquv modullarini oʻrganishga taklif etiladi. Talabalarni qabul qilish Qabul qilish qoidalarining VIII bobida ko'rsatilgan tartibda amalga oshiriladi</p>
                                    </div>

                                    <li onClick={() => setBlock({vfsimple: !block.vfsimple,vf: !block.vf})} className={`accept__condition`}>  Davlat tomonidan moliyalashtiriladigan (vf) o'qish joylariga mininmal ta'lablar</li>

                                    <div  className={block.vf ? 'accept__condition__item' : 'd-none'}>
                                          <h3>Davlat tomonidan moliyalashtiriladigan (VF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>Minimal talablar birinchi semestrda ro'yxatdan o'tgan shaxslarga nisbatan qo'llaniladi va shaxs tanlangan o'quv dasturi bo'yicha tanlovda ishtirok etishi mumkinligini aniqlaydi. Birinchi bosqich (bakalavr) va kunduzgi o'qish joylariga hujjat topshirgan shaxslarning ta'lim natijalarining minimal ko'rsatkichlari Litva Respublikasi Ta'lim, fan va sport vazirining buyrug'i bilan tasdiqlanadi . Minimal talablar har bir o'quv dasturi uchun "Kirish shartlari" bo'limida, shuningdek , Qabul qilish qoidalarining II bobining to'rtinchi bo'limida va VII bobining uchinchi qismida keltirilgan .</p>
                                    </div>

                                    <li onClick={() => setBlock({vfsimple: true, vf1: !block.vf1 })} className={block.vfsimple ? 'accept__condition' : block.vf1 == false ? 'accept__condition' : 'd-none'}> <span className={block.vf1 ? 'dropdown-right' : 'dropdown-top'}></span> 2021-2022 yillar</li>

                                    <div  className={block.vf1 ? 'accept__condition__item' : 'd-none'}>
                                          <h3>Davlat tomonidan moliyalashtiriladigan (VF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>2021-2022 yillarda Litvada oʻrta taʼlim olganlar uchun</p>
                                    </div>

                                    <li onClick={() => setBlock({vfsimple: true,vf2: !block.vf2 })} className={block.vfsimple ? 'accept__condition' : block.vf2 == false ? 'accept__condition' : 'd-none'}> <span className={block.vf2 ? 'dropdown-right' : 'dropdown-top'}></span> 2019-2020 yillar</li>

                                    <div  className={block.vf2 ? 'accept__condition__item' : 'd-none'}>
                                          <h3>Davlat tomonidan moliyalashtiriladigan (VF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>2019-2020 yillarda Litvada oʻrta taʼlim olganlar uchun</p>
                                    </div>

                                    <li onClick={() => setBlock({vnf: !block.vnf})} className={`accept__condition ${block.vnf ? 'active__condition' : null}`}> Davlat tomonidan moliyalashtiriladigan (vnf) o'qish joylariga mininmal ta'lablar</li>

                                    <div  className={block.vnf ? 'accept__condition__item' : 'd-none'}>
                                          <h3>Nodavlat moliyalashtirilgan (VNF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>Minimal talablar birinchi semestrda ro'yxatdan o'tgan shaxslarga nisbatan qo'llaniladi va shaxs tanlangan o'quv dasturi bo'yicha tanlovda ishtirok etishi mumkinligini aniqlaydi. Birinchi bosqich va integral o'quv joylariga ariza topshirgan shaxslarning ta'lim natijalarining minimal ko'rsatkichlari Litva Respublikasi Ta'lim, fan va sport vazirining buyrug'i bilan tasdiqlanadi . Minimal talablar har bir o'quv dasturi uchun "Kirish shartlari" bo'limida, shuningdek , Qabul qilish qoidalarining II bobining to'rtinchi bo'limida va VII bobining uchinchi qismida keltirilgan .</p>
                                    </div>

                                    <li onClick={() => setBlock({condt: !block.condt})} className={`accept__condition ${block.condt ? 'active__condition' : null}`}>  Raqobat ballining tuzilishi</li>

                                    <div  className={block.condt ? 'accept__condition__item' : 'd-none'}>
                                          <h3>Raqobat ballining tuzilishi</h3>
                                          <br />
                                          <p>Davlat byudjetidan moliyalashtiriladigan va moliyalashtirilmaydigan ta’lim yo‘nalishlariga abituriyentlar uchun tanlov ballari tarkibi bir xil bo‘ladi. Raqobat ballini hisoblash uchun Litva Respublikasi Ta'lim, fan va sport vaziri tomonidan tasdiqlangan tartib qo'llaniladi va o'n balllik shkala qo'llaniladi. Tanlov ballari o‘n balli tizimda qayta hisoblangan o‘qishga kirish imtihonlari yoki ta’lim fanlari bo‘yicha yillik baholarning o‘n ballik tizimga ko‘paytirilgan yig‘indisidan iborat bo‘ladi. .</p>
                                    </div>
                              </li>

                              <div  className={block.umumiy ? 'accept__condition__item__desk' : 'd-none'}>
                                          <h3>Umumiy qoidalar</h3>
                                          <p>Universitetda birinchi bosqichga (bakalavr) va integratsiyalashgan o'qishning birinchi semestriga qabul umumiy qabul va institutsional qabul orqali amalga oshiriladi , Kaunas Texnologiya Universitetiga 2022 yilgi talabalarni qabul qilish. qoidalarning II va VII boblarida (keyingi o'rinlarda - Qabul qilish qoidalari ) tasvirlangan tartib (1, 2 va 7-ilovalar).</p>
                                          <br />
                                          <a className='accept__condition__link' href="#">Qabul qilish qoidalari</a>
                                          <br />
                                          <p>Abituriyentlar o‘quv dasturining minimal talablariga muvofiqligi va tanlov balli asosida tanlov orqali qabul qilinadi </p>
                                          <br />
                                          <p>Minimal talablar shaxs tanlangan o'quv dasturi bo'yicha tanlovda qatnasha oladimi yoki yo'qligini belgilaydi. Amaldagi minimal talablar shaxsning ta'lim yillari, moliyalashtirish xususiyati yoki boshqa mezonlarga qarab farq qilishi mumkin . Birinchi bosqich va integral o'quv joylariga ariza topshirgan shaxslarning ta'lim natijalarining minimal ko'rsatkichlari Litva Respublikasi Ta'lim, fan va sport vazirining buyrug'i bilan tasdiqlanadi . Minimal talablar har bir o'quv dasturi uchun "Ro'yxatga olish shartlari" bo'limida, shuningdek, Qabul qilish qoidalarida va ushbu veb-saytning chap menyusidagi boshqa bo'limlarda keltirilgan.</p>
                                          <br />
                                          <p>O'qishga kiruvchi shaxslarning tanlov tartibi ularning tanlov baliga ko'ra shakllantiriladi . Abituriyentlar har bir taʼlim dasturi (taʼlim yoʻnalishi yoki yoʻnalishlar guruhi) boʻyicha tanlov balining kamayish tartibida tanlov navbatiga joylashtiriladi</p>
                                          <br />
                                          <p>Ta'limning istalgan shaklidagi (kunduzgi, sirtqi) yoki o'qishni moliyalashtirish turidagi (davlat tomonidan moliyalashtiriladigan, moliyalashtirilmaydigan) o'quv dasturlariga kirish uchun tanlov ballari xuddi shu tamoyillarga muvofiq tuziladi . Birinchi bosqich va integratsiyalashgan o'quv dasturlariga kirish uchun tanlov ballari tarkibi Qabul qilish qoidalarining 2 va 5-ilovalarida va har bir o'quv dasturi uchun "Kirish shartlari" bo'limida keltirilgan . Raqobat ball kalkulyatorida raqobatbardosh balingizni hisoblashingiz mumkin </p>
                                          <br />
                                          <p>Tanlov balini tuzish uchun ma'lumotlar tegishli ta'lim hujjatlari va boshqa hujjatlar yoki tarkibiy qismlardan olinadi. Agar hujjatlar xorijiy davlatlarning muassasalari tomonidan berilgan bo'lsa, ular Litva Respublikasida tegishli tartibda tan olinishi kerak </p>
                                          <br />
                                          <p>O'qishni tugatgandan so'ng universitetga qaytish istagida bo'lgan yoki kollej ma'lumotiga ega bo'lgan va oliy ta'lim (bakalavr malaka darajasi) olishni xohlovchi shaxslar qabulning V bobida ko'rsatilgan tartibda yuqori semestrga qabul qilinadi . Qoidalar (1 va 7-ilovalar tegishli).</p> 
                                          <br />
                                          <p>Universitetning oʻquv dasturlarida oʻqitiladigan individual modullarni oʻrganishni xohlovchi shaxslar tinglovchi boʻlishga va belgilangan toʻlov evaziga individual oʻquv modullarini oʻrganishga taklif etiladi. Talabalarni qabul qilish Qabul qilish qoidalarining VIII bobida ko'rsatilgan tartibda amalga oshiriladi</p>
                              </div>

                              <div  className={block.vf ? 'accept__condition__item__desk' : 'd-none'}>
                                          <h3>Davlat tomonidan moliyalashtiriladigan (VF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>Minimal talablar birinchi semestrda ro'yxatdan o'tgan shaxslarga nisbatan qo'llaniladi va shaxs tanlangan o'quv dasturi bo'yicha tanlovda ishtirok etishi mumkinligini aniqlaydi. Birinchi bosqich (bakalavr) va kunduzgi o'qish joylariga hujjat topshirgan shaxslarning ta'lim natijalarining minimal ko'rsatkichlari Litva Respublikasi Ta'lim, fan va sport vazirining buyrug'i bilan tasdiqlanadi . Minimal talablar har bir o'quv dasturi uchun "Kirish shartlari" bo'limida, shuningdek , Qabul qilish qoidalarining II bobining to'rtinchi bo'limida va VII bobining uchinchi qismida keltirilgan .</p>
                              </div>

                              <div  className={block.vf1 ? 'accept__condition__item__desk' : 'd-none'}>
                                          <h3>Davlat tomonidan moliyalashtiriladigan (VF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>2021-2022 yillarda Litvada oʻrta taʼlim olganlar uchun</p>
                              </div>

                              <div  className={block.vf2 ? 'accept__condition__item__desk' : 'd-none'}>
                                          <h3>Davlat tomonidan moliyalashtiriladigan (VF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>2019-2020 yillarda Litvada oʻrta taʼlim olganlar uchun</p>
                              </div>

                              <div  className={block.vnf ? 'accept__condition__item__desk' : 'd-none'}>
                                          <h3>Nodavlat moliyalashtirilgan (VNF) o'qish joylariga qabul qilish uchun minimal talablar</h3>
                                          <br />
                                          <p>Minimal talablar birinchi semestrda ro'yxatdan o'tgan shaxslarga nisbatan qo'llaniladi va shaxs tanlangan o'quv dasturi bo'yicha tanlovda ishtirok etishi mumkinligini aniqlaydi. Birinchi bosqich va integral o'quv joylariga ariza topshirgan shaxslarning ta'lim natijalarining minimal ko'rsatkichlari Litva Respublikasi Ta'lim, fan va sport vazirining buyrug'i bilan tasdiqlanadi . Minimal talablar har bir o'quv dasturi uchun "Kirish shartlari" bo'limida, shuningdek , Qabul qilish qoidalarining II bobining to'rtinchi bo'limida va VII bobining uchinchi qismida keltirilgan .</p>
                               </div>

                               <div  className={block.condt ? 'accept__condition__item__desk' : 'd-none'}>
                                     <h3>Raqobat ballining tuzilishi</h3>
                                     <br />
                                     <p>Davlat byudjetidan moliyalashtiriladigan va moliyalashtirilmaydigan ta’lim yo‘nalishlariga abituriyentlar uchun tanlov ballari tarkibi bir xil bo‘ladi. Raqobat ballini hisoblash uchun Litva Respublikasi Ta'lim, fan va sport vaziri tomonidan tasdiqlangan tartib qo'llaniladi va o'n balllik shkala qo'llaniladi. Tanlov ballari o‘n balli tizimda qayta hisoblangan o‘qishga kirish imtihonlari yoki ta’lim fanlari bo‘yicha yillik baholarning o‘n ballik tizimga ko‘paytirilgan yig‘indisidan iborat bo‘ladi. .</p>
                               </div>

                        </ol>
                  </div> 

                  <div className='study__on__tktu'>
                        <h1>Tez-tez so'raladigan savollar....</h1>

                        <ol className='dropdown__menu'>
                              <li onClick={() => setBlock({tktu: !block.tktu})} className='dropdown__item'> <span className={block.tktu ? 'dropdown-bottom' : 'dropdown-top'}></span> Nega TKTUda o'qish kerak ?</li>

                              <div  className={block.tktu ? 'dropdown__secret__item' : 'd-none'}>
                                    TKTU  faqat texnologiya bilan bog'liq, deb ishoniladi, ammo har bir texnologiya ortida inson bor - bu nafaqat o'z mutaxassisligi bo'yicha olingan bilimlarga, balki atrofdagi hamma narsaga ham yaxlit yondoshadigan ambitsiyali, jasur mutaxassis. uni. Tanlangan KTU bakalavriat dasturini o'rganish orqali talaba nafaqat mehnat bozori uchun zarur bo'lgan barcha bilimlarni, balki boshqa qo'shimcha qadriyatlarni ham to'playdi: hamfikr jamoalarga qo'shilish imkoniyati ( Birlashgan ), sevimli badiiy faoliyat bilan shug'ullanish ( Ilhomlantirilgan ), shaxsiy kompetensiyalarni chuqurlashtirish ( Iqtidorli , Malakali Fintech ), amaliyotga ega bo'lish va xorijiy universitetlarda o'qish ( Kashf etilgan )), ishga joylashish masalalari bo'yicha maslahatlar oling yoki martaba maqsadlaringizga erishish va izlanayotgan mutaxassis bo'lishga yordam beradigan shaxsiy kompetentsiyalarni rivojlantiring ( Istalgan ), hatto besh xil turdagi murabbiylar xizmatlaridan foydalaning ( Hududli ) yoki sport bilan shug'ullanish imkoniyati. butun Boltiqbo'yi mintaqasidagi eng zamonaviy talabalar sport klublaridan biri ( faollashtirilgan ). KTU ni tanlab, ishlash va o'qishga bo'lgan motivatsiyangiz nafaqat ma'naviy, balki moliyaviy jihatdan ham doimo qadrlanishiga amin bo'lishingiz mumkin - KTU o'z talabalariga mamlakatdagi barcha universitetlar orasida eng katta stipendiyalardan birini taqdim etadi . Moliyaviy yordamga qo'shimcha ravishda, Universitet o'rganish va yashash uchun zamonaviy va xavfsiz joylar, hissiy va ma'naviy qo'llab-quvvatlash, o'z maqsadlariga erishish va yaxshilash uchun barcha imkoniyatlarni taqdim etadi. <br /> Ish beruvchilar KTU bitiruvchilarini yuqori baholaydilar va buning ajablanarli joyi yo'q, chunki hozirgi kompaniya menejerlari va mutaxassislarining o'zlari KTUni bitirgan. KTUning zamonaviyligi va taraqqiyoti ish beruvchilarda ham katta taassurot qoldirdi – biz nafaqat Kaunas, balki butun mamlakat bo‘ylab infratuzilmamiz, jihozlarimiz va bazamiz bilan ajralib turamiz. Biznes va ishlab chiqarish bilan hamkorlik KTU talabalarining tadbirkorligini rivojlantirishga yordam beradi va tadbirkorlik ko‘nikmalarini chuqurlashtiradi. Universitet Yevropa Komissiyasining Yevropa oliy taʼlim muassasalari oʻrtasidagi hamkorlikni rivojlantirish boʻyicha loyihasida ishtirok etish uchun tanlanganidan ham faxrlanadi. ECIU konsorsiumi a'zolari bilan birgalikda KTU kelajakdagi Evropa universitetini yaratishga e'tibor qaratadi.
                              </div>

                              <li onClick={() => setBlock({raqobat: !block.raqobat})} className='dropdown__item'> <span className={block.raqobat ? 'dropdown-bottom' : 'dropdown-top'}></span> Raqobat ballari tarkibida ko'rsatilgan fanlardan birortasi bo'lmasa ariza topshirishim mumkinmi ?</li>

                              <div  className={block.raqobat ? 'dropdown__secret__item' : 'd-none'}>
                                    Agar sizda tanlov balining ko'rsatilgan tarkibiy qismlaridan birortasi bo'lmasa, siz bakalavriatga hujjat topshirishingiz mumkin, ammo tanlov ballining etishmayotgan komponenti o'rniga nol hisoblanadi. Istisno faqat san'at yo'nalishidagi o'quv dasturlariga hujjat topshirganlarga tegishli, chunki joriy yilda kirish imtihonidan o'tmagan yoki topshirmasangiz, qabul tanlovida qatnashmaysiz. Har holda, raqobatbardosh ball 5,4 dan past bo'lishi mumkin emas. Raqobat ballingizni LAMA BPO raqobatbardosh bal kalkulyatorida hisoblashingiz mumkin
                              </div>

                              <li onClick={() => setBlock({tanlov: !block.tanlov})} className='dropdown__item'> <span className={block.tanlov ? 'dropdown-bottom' : 'dropdown-top'}></span> Tanlov ballinin hisoblashda qaysi fanlar kiritilishini tanlash mumkinmi</li>

                              <div  className={block.tanlov ? 'dropdown__secret__item' : 'd-none'}>
                                          Tanlashning iloji yo'q, lekin tizim siz qabul qilish uchun taqdim etgan ta'lim hujjatlari asosida siz uchun eng qulay variantni avtomatik ravishda hisoblab chiqadi. Ikkinchi va/yoki uchinchi fanning yillik baholari faqat joriy yilda davlat imtihonlari tashkil etilgan fanlardan olinadi.
                              </div>

                              <li onClick={() => setBlock({kollej: !block.kollej})} className='dropdown__item'> <span className={block.kollej ? 'dropdown-bottom' : 'dropdown-top'}></span> Kollejda o'qigan fanlarni universitetda kreditlash mumkinmi ?</li>

                              <div  className={block.kollej ? 'dropdown__secret__item' : 'd-none'}>
                                           Ha, kollejda olingan o'quv kreditlari olingan o'quv natijalarini Universitet o'quv dasturi natijalari bilan taqqoslagandan so'ng universitet tadqiqotlarida hisoblanishi mumkin. Siz o'qiyotgan fakultetning o'quv markazi sizga o'rganilgan kreditlarni kreditlash haqida batafsil ma'lumot beradi 
                              </div>

                              <li onClick={() => setBlock({stipendiya: !block.stipendiya})} className='dropdown__item'> <span className={block.stipendiya ? 'dropdown-bottom' : 'dropdown-top'}></span> O'qish paytida stipendiya olish haqiqatmi </li>

                              <div  className={block.stipendiya ? 'dropdown__secret__item' : 'd-none'}>
                              Ha, barcha talabalar, hatto davlat tomonidan moliyalashtirilmaydigan o'quv joyida o'qiyotganda ham stipendiya olishlari mumkin. Universitet uchta turdagi stipendiyalarni taqdim etadi: Universitet iste'dodi stipendiyasi, homiylik stipendiyasi va bir martalik rag'batlantiruvchi stipendiya. <br /> Siz talabalar uchun moliyaviy ma'lumotlar bo'limida stipendiya miqdori, tanlov mezonlari va boshqa moliyaviy yordam haqida ma'lumot olishingiz mumkin
                              </div>
                        </ol>
                  </div>

                  <div className='study__on__tktu'>
                        <h1>O'qish masalalari bo'yicha savollar</h1>

                        <div className='bakalavr__contact__container' >
                               <form className='bakalavr__contact__form'>
                                    <div className='input__box mb-5'>
                                          <input type="text"  required/>   
                                          <span>Ismingizni kiriting</span>   
                                    </div>    

                                    <div className='input__box mb-5'>
                                          <input type="email"  required/>   
                                          <span>elektron pochtangizni kiriting</span>   
                                    </div>  

                                    <label className='mb-1' >Savolingiz...</label> 
                                    <textarea className='mb-5' name="question"  cols="30" rows="4"></textarea>

                                    <input type='checkbox' />

                                    <button className='btn btn-primary' type='submit'>Yuborish</button>
                              </form>  

                              <div className='bakalavr__contact__menu' >
                                    <h2>Kontaktlar</h2>
                                    <br />
                                    <p>mobil tel. +370 (679) 44 555</p>
                                    <p>ep  studijos@ktu.lt</p>
                                    <br />
                                    <p>PK: 8:00 dan 17:00 gacha.</p>
                                    <p>Dushanba: 8:00 dan 15:45 gacha</p>
                                    <p>Tushlik tanaffusi 12 dan 12.45 gacha.</p>

                                    <div>
                                          <h2>Talabadan so'rang</h2>
                                          <p>KTU haqida ko'proq bilishni xohlaysizmi? <br /> Bu yerda o‘qiyotgan talabadan so‘rang!</p>
                                          <a className='accept__condition__link' href="#">Ko'proq ma'lumot olish</a>
                                    </div>
                              </div>   
                        </div>
                  </div>


                 
                </div>
            </div>
        </>
    );
}

export default Bakalavr;
