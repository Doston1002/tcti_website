import React from "react";
import './select.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
const Select = () => {
  return (
    <Accordion>
      <AccordionItem className="my-5">
        <AccordionItemHeading>
          <AccordionItemButton>stipendiyalar</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
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
              bosqichining barcha talabalari, shuningdek, integratsiyalashgan va
              ta’lim bo‘lmagan talabalar ishtirok etishlari mumkin, birinchi
              kursning birinchi semestridagi bakalavr talabalari bundan
              mustasno.
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
        </AccordionItemPanel>
      </AccordionItem>  
      <AccordionItem className="my-5">
        <AccordionItemHeading>
          <AccordionItemButton>stipendiyalar</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
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
              bosqichining barcha talabalari, shuningdek, integratsiyalashgan va
              ta’lim bo‘lmagan talabalar ishtirok etishlari mumkin, birinchi
              kursning birinchi semestridagi bakalavr talabalari bundan
              mustasno.
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
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem className="my-5">
        <AccordionItemHeading>
          <AccordionItemButton>stipendiyalar</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
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
              bosqichining barcha talabalari, shuningdek, integratsiyalashgan va
              ta’lim bo‘lmagan talabalar ishtirok etishlari mumkin, birinchi
              kursning birinchi semestridagi bakalavr talabalari bundan
              mustasno.
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
        </AccordionItemPanel>
      </AccordionItem> 
    </Accordion>
  );
};

export default Select;
