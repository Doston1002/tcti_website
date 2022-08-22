import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";
import { Context as LanguageContext } from "../../../Context/Language";
import context from "../../../lang/lang";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

import '../bedroom/Bedroom.css'
const Bedroom = () => {
    const [open, setOpen] = useState(true)
    const [openPlace, setOpenPlace] = useState(false);
         const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className="container-pages">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="badroom__header">
                <h1>TURAR JOY VA DAM OLISH</h1>
                <p>
                  Universitetda oʻqish davrida <br /> KTU yotoqxonalarida
                  koʻrsatilgan turar joy xizmatlaridan foydalanishingizni, boʻsh
                  vaqtingizda <br />
                  esa universitetning dam olish maskanlarida dam olishingizni
                  tavsiya qilamiz.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="bedroom__info">
                <button onClick={() => setOpen(true)}>Yotoqxonalar</button>
                <button onClick={() => setOpenPlace(true)}>
                  turar joy haqida
                </button>
              </div>
            </div>
            {/* {open && (
              <div className="col-9">
                <div className="bedroom__titte">
                  <h4>Yotoqxonalar</h4>

                  <p>
                    KTUda 12 ta yotoqxona mavjud. Talabalarga uch kishilik, ikki
                    kishilik va bir kishilik xonalarda joylashish taklif
                    etiladi. KTU yotoqxonasini bron qilish tizimida yotoqxonada
                    joy bron qilishingiz mumkin . Ro'yxatdan o'ting va ajoyib
                    yotoqxona hamjamiyatiga qo'shiling.
                  </p>
                  <p>
                    Og‘ir ijtimoiy va moddiy ahvol tufayli yotoqxonadan ustuvor
                    tartibda joy olishni va/yoki yotoqxona narxining
                    kompensatsiyasini olishni xohlovchi talabalar tasdiqlovchi
                    hujjatlar bilan ariza topshirishlari shart.
                  </p>

                  <h3>Talabalarni joylashtirish markazi</h3>
                  <h4>Konsultatsiya vaqti:</h4>
                  <p>
                    I - IV: 9:00 - 17:00 <br /> V: 9:00 - 15:45 <br /> Tushlik
                    tanaffusi: 11:45 - 12:30
                  </p>
                  <p>
                    tel. +370 (696) 73 277 (turar joy) <br /> tel. +370 (696) 52
                    253 (to'lovlar)
                  </p>
                  <p>
                    Talabalarni joylashtirish markazi menejeri <br /> tel. +370
                    (601) 73 031
                  </p>
                </div>
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11984.900307199561!2d69.23442929282095!3d41.325718815889005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b737f1f4161%3A0xab6842dfd7a53fdf!2sToshkent%20kimyo-texnologiya%20instituti!5e0!3m2!1suz!2s!4v1652868919695!5m2!1suz!2s"
                    allowFullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            )} */}
            {openPlace && (
              <div className="col-9">
                <div className="bedroom__titte">
                  <h4>Yotoqxona haqida ma'lumot</h4>
                  <table className="statistic__table">
                    <tr>
                      <td rowspan="1">Bino turi</td>
                      <td>– 4 qavatli remontsiz bino</td>
                    </tr>

                    {/* 2 */}
                    <tr>
                      <td rowspan="2">Xonalar va joylar soni</td>
                      <td>- 94 xona</td>
                    </tr>
                    <tr>
                      <td>- 201 o'rin</td>
                    </tr>
                    {/* 3 */}
                    <tr>
                      <td rowspan="3">Xona turlari</td>
                      <td>3 kishilik xona</td>
                    </tr>
                    <td>4 kishilik xona</td>
                    <tr>
                      <td>5 kishilik xona</td>
                    </tr>

                    {/* 4 */}
                    <tr>
                      <td rowspan="1">Mebel va boshqa inventar</td>
                      <td>
                        - barcha xonalarda ko'rpa-to'shak, stol, stullar, shkaf
                        va shkaflar bor - mebellarning bir qismi eski turdagi,
                        ba'zilari ta'mirlangan - oshxonalarda gaz plitasi va
                        stollar, shkaflar - oshxonalardagi mebel va jihozlar
                        nisbatan yangi
                      </td>
                    </tr>

                    {/* 5 */}
                    <tr>
                      <td rowspan="2">Dushlar, hojatxonalar va oshxonalar</td>
                      <td>
                        - har bir qavatda ikkita yuvinish va hojatxona bor
                      </td>
                    </tr>
                    <tr>
                      <td>- har bir qavatda ikkita oshxona bor</td>
                    </tr>

                    {/* 7 */}
                    <tr>
                      <td rowspan="3">Dam olish joylari</td>
                      <td>
                        - sport anjomlari va stol tennisi bilan jihozlangan
                        sport zali
                      </td>
                    </tr>
                    <tr>
                      <td>- dam olish xonasi</td>
                    </tr>
                    <tr>
                      <td>
                        - televizorli yotoqxona foyesida dam olish maskani
                      </td>
                    </tr>

                    <tr>
                      <td rowspan="2">boshqa ma'lumotlar</td>
                      <td>- yotoqxonada internet (tezligi 100 mb/s)</td>
                    </tr>
                    <tr>
                      <td>
                        - o'z-o'ziga xizmat ko'rsatadigan kir yuvish (kir yuvish
                        mashinalari) va quritgich bilan jihozlangan -
                        velosipedlar uchun xona jihozlangan
                      </td>
                    </tr>
                  
              
                 
                  
                  </table>

                
                 
             
              
              </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Bedroom;
