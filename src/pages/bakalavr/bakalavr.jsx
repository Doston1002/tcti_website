import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'



function PageStaticAkademikBakalavr() {
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
                                <h3>{context[lang].Talabalar.first}</h3>
                                <div className="tab">
                                    <button className="tablinks" onClick={() => {
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabOne.current.classList.add("opened")
                                    }} id="defaultOpen">{context[lang].Bakalavr.b1}
                                    </button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabThree.current.classList.remove("opened")
                                        tabTwo.current.classList.add("opened")
                                    }} id="defaultOpen"> </button>
                                    <button className="tablinks" onClick={() => {
                                        tabOne.current.classList.remove("opened")
                                        tabTwo.current.classList.remove("opened")
                                        tabThree.current.classList.add("opened")
                                    }} id="defaultOpen">   </button>
                                </div>
                                <div id="About" ref={tabOne} className="tabcontent opened">
                                    <h3>{context[lang].Bakalavr.b1}</h3>
                                    <p>{context[lang].Bakalavr.b2}</p>
                                    <p>{context[lang].Bakalavr.b3}</p>
                                    <p>{context[lang].Bakalavr.b4}</p>
                                    <p>{context[lang].Bakalavr.b5}</p>
                                </div>

                                <div id="Functions" ref={tabTwo} className="tabcontent">
                                    {/* <h3></h3> */}
                                    <p></p>
                                </div>
                                <div id="Management" ref={tabThree} className="tabcontent">
                                    <h3> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-10 col-md-12">
                                <table border="1" background-color="#91e1ff59;" cellspacing="1" className="MsoTableLightGridAccent5">
                                    <tbody>
                                        <tr border-width="1">
                                            <td>
                                                <p><strong>1.</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>5111019</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>{context[lang].Bakalavr.b6}</strong></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>1.1.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5111019</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b7}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>1.2.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5111030</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b8}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>2.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5230200</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b9}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>3.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5320300</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b10}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>3.1.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320300</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b11}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>3.2.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320300</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b12}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>3.3.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320300</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b13}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>3.4.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320300</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b14}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>4.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5311000</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b15}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5320400</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b16}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.1.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320400</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b17}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.2.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320400</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b18}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.3.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320400</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b19}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.4.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320400</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b20}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.5.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320400</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b21}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>5.6.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5320400</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b22}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>6.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5321300</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>{context[lang].Bakalavr.b23}</strong></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>7.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5320500</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>{context[lang].Bakalavr.b24}</strong></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>8.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5310900</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b25}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>9.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5321000</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>{context[lang].Bakalavr.b26}:</strong></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>9.1.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5321000</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b27}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>9.2.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span>5321000</span></p>
                                            </td>
                                            <td>
                                                <p><span>{context[lang].Bakalavr.b28}</span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>10.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5640100</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>{context[lang].Bakalavr.b29}</strong></span></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p><span><strong>11.</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>5630100</strong></span></p>
                                            </td>
                                            <td>
                                                <p><span><strong>{context[lang].Bakalavr.b30}</strong></span></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Talabalarga</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].Talabalar.third}</a></li>
                            <Link to={'/page/static/get/utishBall'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].Talabalar.first}</a></li>
                            </Link>
                            {/* <Link to={'/page/static/get/Kontrakt'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.third}</a></li>
                            </Link>
                            <Link to={'/page/static/get/Kontrakt'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.fourth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/Kontrakt'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.fivth}</a></li>
                            </Link> */}
                            {/* <Link to={'/page/static/get/xorijAbitur'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.first}</a></li>
                            </Link> */}
                            {/* <Link to={'/page/static/get/Kontrakt'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.seventh}</a></li>
                            </Link>
                            <Link to={'/page/static/get/Kontrakt'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.eighth}</a></li>
                            </Link> */}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticAkademikBakalavr;
