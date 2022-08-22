import React from "react";
import './select.css'

const Select = () => {
   const [block, setBlock] = React.useState({
     bakalavr: false,
     magistr: false,
     doktorant: false,
     sirtqi: false,
     qoshma: false,
   });
  return (
    <>
      <div className="study__on__tktu">
        <ol className="dropdown__menu">
          <li
            onClick={() => setBlock({ bakalavr: !block.bakalavr })}
            className="dropdown__item"
          >
            {" "}
            <span
              className={block.bakalavr ? "dropdown-bottom" : "dropdown-top"}
            ></span>{" "}
            stipendiyalar
          </li>

          <div className={block.bakalavr ? "dropdown__secret__item" : "d-none"}>
            <p className="accardion__info">
              <span>
                {" "}
                Universitetning iqtidorli stipendiyalari eng faol talabalarga
                beriladi, ular o'qishlarida, tadqiqotlarida yoki badiiy
                loyihalarida ajoyib natijalarga erishadilar, KTU nomini targ'ib
                qiluvchi biznes, innovatsiyalar va ijtimoiy faoliyat sohalarida
                darsdan tashqari mashg'ulotlarda faol ishtirok etadilar.
              </span>
              <span>
                Iste’dod stipendiyasi tanlovida bakalavr va magistratura
                bosqichining barcha talabalari, shuningdek, integratsiyalashgan
                va ta’lim bo‘lmagan talabalar ishtirok etishlari mumkin,
                birinchi kursning birinchi semestridagi bakalavr talabalari
                bundan mustasno.
              </span>
              <span>
                Universitetning Talent stipendiyasi miqdori oyiga 250 EUR. Bir
                semestr uchun ajratilgan yordamning umumiy miqdori 1000 evro.
              </span>
              <span> 2022-2023 yilgi iste'dod stipendiyasi tanlovi:</span>
              <span>
                {" "}
                Kuzgi semestr | 2022 yil 9 sentyabr - 2022 yil 22 sentyabr
              </span>
              <span>
                Bahorgi semestr | 2023 yil 10 fevral - 2023 yil 23 fevral
              </span>
              <span>2021-2022 yil bahorgi semestr yakunlari. </span>
              <span>
                Barcha kerakli hujjatlar va ko'rsatmalar AISda joylashtirilishi
                kerak. Qo'shimcha ma'lumot va muhim hujjatlar Batafsil ma'lumot:
              </span>
              <span>tel. +370 37 300 327; +3706 14 200 55</span>
              <span>el. p. klausk@ktu.lt</span>
            </p>
          </div>

          <li
            onClick={() => setBlock({ magistr: !block.magistr })}
            className="dropdown__item"
          >
            {" "}
            <span
              className={block.magistr ? "dropdown-bottom" : "dropdown-top"}
            ></span>{" "}
            stipendiyalar
          </li>

          <div className={block.magistr ? "dropdown__secret__item" : "d-none"}>
            <p className="accardion__info">
              <span>
                {" "}
                Universitetning iqtidorli stipendiyalari eng faol talabalarga
                beriladi, ular o'qishlarida, tadqiqotlarida yoki badiiy
                loyihalarida ajoyib natijalarga erishadilar, KTU nomini targ'ib
                qiluvchi biznes, innovatsiyalar va ijtimoiy faoliyat sohalarida
                darsdan tashqari mashg'ulotlarda faol ishtirok etadilar.
              </span>
              <span>
                Iste’dod stipendiyasi tanlovida bakalavr va magistratura
                bosqichining barcha talabalari, shuningdek, integratsiyalashgan
                va ta’lim bo‘lmagan talabalar ishtirok etishlari mumkin,
                birinchi kursning birinchi semestridagi bakalavr talabalari
                bundan mustasno.
              </span>
              <span>
                Universitetning Talent stipendiyasi miqdori oyiga 250 EUR. Bir
                semestr uchun ajratilgan yordamning umumiy miqdori 1000 evro.
              </span>
              <span> 2022-2023 yilgi iste'dod stipendiyasi tanlovi:</span>
              <span>
                {" "}
                Kuzgi semestr | 2022 yil 9 sentyabr - 2022 yil 22 sentyabr
              </span>
              <span>
                Bahorgi semestr | 2023 yil 10 fevral - 2023 yil 23 fevral
              </span>
              <span>2021-2022 yil bahorgi semestr yakunlari. </span>
              <span>
                Barcha kerakli hujjatlar va ko'rsatmalar AISda joylashtirilishi
                kerak. Qo'shimcha ma'lumot va muhim hujjatlar Batafsil ma'lumot:
              </span>
              <span>tel. +370 37 300 327; +3706 14 200 55</span>
              <span>el. p. klausk@ktu.lt</span>
            </p>
          </div>

          <li
            onClick={() => setBlock({ doktorant: !block.doktorant })}
            className="dropdown__item"
          >
            {" "}
            <span
              className={block.doktorant ? "dropdown-bottom" : "dropdown-top"}
            ></span>{" "}
            Doktorantura ta'lim
          </li>

          <div
            className={block.doktorant ? "dropdown__secret__item" : "d-none"}
          >
            Doktorantura ilmiy tadqiqot va tajriba-konstruktorlik ishlarini
            mustaqil olib borishga, ilmiy muammolarni hal qilishga qodir,
            akademik va akademik boʻlmagan muhitda ishlay oladigan olimlarni
            tayyorlashga moʻljallangan. Doktoranturada oʻqish muddati 4 yil
            (kunduzgi taʼlim boʻyicha) boʻlib, ularga magistratura yoki unga
            tenglashtirilgan malakaga ega boʻlgan shaxslar hujjat topshirishlari
            mumkin. Doktorantura dasturiga tadqiqotlar (30 AKTS), tadqiqot,
            doktorlik dissertatsiyasini tayyorlash va himoya qilish kiradi.
            Doktoranturani tamomlagandan va doktorlik dissertatsiyasini himoya
            qilgandan keyin fan doktori ilmiy darajasi beriladi.
          </div>

          <li
            onClick={() => setBlock({ sirtqi: !block.sirtqi })}
            className="dropdown__item"
          >
            {" "}
            <span
              className={block.sirtqi ? "dropdown-bottom" : "dropdown-top"}
            ></span>{" "}
            Sirtqi ta'lim
          </li>

          <div className={block.sirtqi ? "dropdown__secret__item" : "d-none"}>
            Kasbiy ta'lim - bu kasbiy malakani ta'minlaydigan fanlar. Ularga
            bakalavriat ( birinchi bosqich ) taʼlimini tamomlagan va Universitet
            tomonidan belgilangan boshqa talablarga javob beradigan shaxslar
            qabul qilinadi. Universitetda bitta kasbiy ta'lim dasturi mavjud -
            Pedagogika fanlari , uning hajmi 60 ta o'quv krediti bo'lib, o'qish
            muddati 1 yil. O'qishlar kasbiy ta'limning yakuniy loyihasi bilan
            yakunlanadi, bitiruvchilarga ta'lim muassasalarida ishlash huquqini
            beruvchi pedagog malakasi beriladi.
          </div>

          <li
            onClick={() => setBlock({ qoshma: !block.qoshma })}
            className="dropdown__item"
          >
            {" "}
            <span
              className={block.qoshma ? "dropdown-bottom" : "dropdown-top"}
            ></span>{" "}
            Qo'shma ta'lim
          </li>

          <div className={block.qoshma ? "dropdown__secret__item" : "d-none"}>
            Kasbiy ta'lim - bu kasbiy malakani ta'minlaydigan fanlar. Ularga
            bakalavriat ( birinchi bosqich ) taʼlimini tamomlagan va Universitet
            tomonidan belgilangan boshqa talablarga javob beradigan shaxslar
            qabul qilinadi. Universitetda bitta kasbiy ta'lim dasturi mavjud -
            Pedagogika fanlari , uning hajmi 60 ta o'quv krediti bo'lib, o'qish
            muddati 1 yil. O'qishlar kasbiy ta'limning yakuniy loyihasi bilan
            yakunlanadi, bitiruvchilarga ta'lim muassasalarida ishlash huquqini
            beruvchi pedagog malakasi beriladi.
          </div>
        </ol>
      </div>
   
    </>
  );
};

export default Select;
