import { useState, useEffect, useContext, useRef } from 'react';

import "./filter.css"

import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import {data, render_select_data} from '../../select_data/select_data'

function Filter() {
    const select_2_home = useRef()
    const select_3_home = useRef()
    const {lang} = useContext(LanguageContext);
  return (
    <>
        <div className="header_rask_studijas">
            <div className="header_rask_studijas_p">
                <p>{context[lang].search.second}</p>
            </div>
            <div className="header_pasirinkite">
                <p></p>
                <select className="select_1_home" name="" id="" onChange={(e) => {
                    e.preventDefault()
                    select_2_home.current.disabled = false
                }}>
                    <option value="" selected hidden>{context[lang].search.third}</option>
                    <option value="bakalavr">{context[lang].search.fourth}</option>
                    <option value="magister">{context[lang].search.fivth}</option>
                </select>
            </div>
            <div className="header_pasirinkite2 ">
                <select ref={select_2_home} disabled name="" id="" className="select_2_home" onChange={(e) => {
                    e.preventDefault()
                    select_3_home.current.disabled = false
                    render_select_data(data[lang][e.target.value], select_3_home.current)
                }}>
                    <option value="" selected hidden>{context[lang].select_content.first}</option>
                    <option value="kimyo_fakuteti">{context[lang].select_content.second}</option>
                    <option value="noorganik_fakutet">{context[lang].select_content.third}</option>
                    <option value="oziq_ovaqt_fakuteti">{context[lang].select_content.fourth}</option>
                    <option value="kasb_talim_fakuteti">
                    {context[lang].select_content.fivth}
                    </option>
                    <option value="uzumchlik_fakuteti">
                    {context[lang].select_content.sixth}
                    </option>
                </select>
            </div>
            <div className="header_pasirinkite3">
                <select ref={select_3_home} disabled name="" id="" className="select_3_home">
                    <option selected disabled>{context[lang].select_content.seventh}</option>
                </select>
            </div>
            <div className="header_surasti">
                <a className="button_search_linl" onClick={(e) => {
                    e.preventDefault()
                    window.location = `/search-facultet/${select_3_home.current.value}`
                }}>
                {context[lang].search.first}
                </a>
            </div>
        </div>
    </>
  );
}

export default Filter;
