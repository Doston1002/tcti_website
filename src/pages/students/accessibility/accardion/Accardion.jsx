import React from "react";
import { useContext } from "react";
import { Context as LanguageContext } from "../../../../Context/Language";
import context from "../../../../lang/lang";
import "../accardion/Accardion.css";

const Accardion = () => {
      const { lang } = useContext(LanguageContext);
      const [block, setBlock] = React.useState({
        bakalavr: false,
        magistr: false,
        doktorant: false,
        sirtqi: false,
        qoshma: false,
      });

  return (
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
          Bakalavr ta'lim
        </li>

        <div className={block.bakalavr ? "dropdown__secret__item" : "d-none"}>
          Bakalavriat ta'limi birinchi bosqichdagi ta'limdir. Ularga o'rta
          ma'lumotli va Universitet tomonidan belgilangan boshqa talablarga
          javob beradigan shaxslar qabul qilinadi. O'quv dasturlari hajmi 180
          yoki 240 ta o'quv kreditini, kunduzgi o'qish muddati 3 yoki 4 yilni
          tashkil qiladi. O'qishlar bakalavrning yakuniy loyihasi bilan
          yakunlanadi, bitiruvchilargaLitva malaka tuzilmasining oltinchi
          darajasiga mos keladigan bakalavr darajasi beriladi va kasbiy faoliyat
          bilan shug'ullanish va / yoki magistraturada ( ikkinchi bosqich
          )o'rganish. Universitetda taqdim etiladigan bakalavriat dasturlari
          roʻyxati bilan bu yerda tanishishingiz mumkin. <br />{" "}
          Integratsiyalashgan tadqiqotlar birinchi va ikkinchi davrli
          tadqiqotlarni o'z ichiga oladi. Ularga kirish imtihonlarini topshirgan
          va Universitet tomonidan belgilangan boshqa talablarga javob beradigan
          o'rta ma'lumotli shaxslar qabul qilinadi. Universitetda300 ta o'quv
          krediti, o'qish muddati 5 yil bo'lgan "Arxitektura"integratsiyalashgan
          o'quv dasturi mavjud. O'qishlar magistratura yakuniy loyihasi bilan
          yakunlanadi, bitiruvchilargaLitva malaka tuzilmasining ettinchi
          darajasiga mos keladigan va kasbiy faoliyat bilan shug'ullanish
          va/yoki doktoranturada (uchinchi bosqich) o'qishni davom ettirish
          huquqini beruvchi magistrlik darajasi beriladi..
        </div>

        <li
          onClick={() => setBlock({ magistr: !block.magistr })}
          className="dropdown__item"
        >
          {" "}
          <span
            className={block.magistr ? "dropdown-bottom" : "dropdown-top"}
          ></span>{" "}
          Magistratura ta'lim
        </li>

        <div className={block.magistr ? "dropdown__secret__item" : "d-none"}>
          Magistratura aspirantura hisoblanadi. Ular bakalavriat (birinchi
          bosqich) yoki integral (bakalavr va magistratura) taʼlimini tamomlagan
          hamda Universitet tomonidan belgilangan boshqatalablarga javob
          beradigan shaxslarni qabul qiladi . O'quv dasturlari hajmi 90 yoki 120
          ta o'quv kreditini, kunduzgi ta'lim bo'yicha o'qish muddati - 1,5 yoki
          2 yil. O'qishlar magistratura yakuniy loyihasi bilan yakunlanadi,
          bitiruvchilarga Litva malakaviy tuzilmasining ettinchi darajasiga mos
          keladigan va kasbiy faoliyat bilan shug'ullanish va/yoki
          doktoranturada o'qishni davom ettirish huquqini beruvchi magistr
          darajasi beriladi.(uchinchi davr) o'rganish. Universitetda taklif
          qilinadigan aspirantura dasturlari ro'yxati bu erda
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

        <div className={block.doktorant ? "dropdown__secret__item" : "d-none"}>
          Doktorantura ilmiy tadqiqot va tajriba-konstruktorlik ishlarini
          mustaqil olib borishga, ilmiy muammolarni hal qilishga qodir, akademik
          va akademik boʻlmagan muhitda ishlay oladigan olimlarni tayyorlashga
          moʻljallangan. Doktoranturada oʻqish muddati 4 yil (kunduzgi taʼlim
          boʻyicha) boʻlib, ularga magistratura yoki unga tenglashtirilgan
          malakaga ega boʻlgan shaxslar hujjat topshirishlari mumkin.
          Doktorantura dasturiga tadqiqotlar (30 AKTS), tadqiqot, doktorlik
          dissertatsiyasini tayyorlash va himoya qilish kiradi. Doktoranturani
          tamomlagandan va doktorlik dissertatsiyasini himoya qilgandan keyin
          fan doktori ilmiy darajasi beriladi.
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
          tomonidan belgilangan boshqa talablarga javob beradigan shaxslar qabul
          qilinadi. Universitetda bitta kasbiy ta'lim dasturi mavjud -
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
          tomonidan belgilangan boshqa talablarga javob beradigan shaxslar qabul
          qilinadi. Universitetda bitta kasbiy ta'lim dasturi mavjud -
          Pedagogika fanlari , uning hajmi 60 ta o'quv krediti bo'lib, o'qish
          muddati 1 yil. O'qishlar kasbiy ta'limning yakuniy loyihasi bilan
          yakunlanadi, bitiruvchilarga ta'lim muassasalarida ishlash huquqini
          beruvchi pedagog malakasi beriladi.
        </div>
      </ol>
    </div>
  );
};

export default Accardion;
