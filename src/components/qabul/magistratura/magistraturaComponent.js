import React from 'react';
import {  useContext } from 'react';
import { Context as LanguageContext } from '../../../Context/Language';
// import context from '../../../lang/lang';
import './magistratura.css';

function MagistraturaComponent() {
    const { lang } = useContext(LanguageContext);
    const [block, setBlock] = React.useState({
      umumiy: true
    })

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 magistratura__container">
                        <p> <strong className='fw-bold'>Magistratura</strong> aspirantura hisoblanadi. Ular bakalavriat (birinchi bosqich) yoki integral (bakalavr va magistratura) ta’limini tamomlagan hamda Universitet tomonidan belgilangan boshqa talablarga javob beradigan shaxslarni qabul qiladi. O'quv dasturlari hajmi 90 yoki 120 ta o'quv kreditini, kunduzgi ta'lim bo'yicha o'qish muddati - 1,5 yoki 2 yil. Magistratura bosqichi magistratura yakuniy loyihasi bilan yakunlanadi, bitiruvchilarga Litva malakaviy tuzilmasining yettinchi darajasiga mos keladigan va kasbiy faoliyat bilan shug‘ullanish va/yoki doktoranturada (uchinchi bosqich) o‘qishni davom ettirish huquqini beruvchi magistrlik darajasi beriladi. Universitetda taklif qilinadigan aspirantura dasturlari ro'yxati bu erda .</p>


                        <div className='study__on__tktu'>
                            <h1 className='text-center'>Magistraturada o'qish</h1>

                            <div className='study__types__list'>
                                    <a href='#' className='study__type'>
                                        <h3>O'quv dasturlari</h3>
                                    </a>

                                    <a href='#' className='study__type'>
                                        <h3>Qabul qilish talablari</h3>
                                    </a>

                                    <a href='#' className='study__type'>
                                        <h3>Qabul qilish bosqichlari</h3>
                                    </a>

                                    <a href='#' className='study__type'>
                                        <h3>Moliyaviy ma'lumotlar</h3>
                                    </a>

                                    <a href='#' className='study__type'>
                                        <h3>Turar joy</h3>
                                    </a>
                            </div> 
                        </div>
                    </div> 
               
                </div>
            </div>
        </>
    );
}

export default MagistraturaComponent;
