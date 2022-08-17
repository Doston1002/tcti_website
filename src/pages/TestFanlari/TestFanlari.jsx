import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'

function TestFanlari() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <div className="page-static_titles">
                            <h3>{context[lang].entrantLinks.eleventh}</h3>
                            <h4>{context[lang].entrantLinks.twelveth}</h4>
                        </div>
                        <table className=" table-striped test-fan-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div><strong>T/r  </strong></div>
                                    </td>
                                    <td>
                                        <div><strong>{context[lang].TestFanlar.t2}</strong></div>
                                    </td>
                                    <td>
                                        <div><strong>{context[lang].TestFanlar.t1}</strong></div>
                                    </td>
                                    <td>
                                        <div><strong>{context[lang].TestFanlar.t3}</strong></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>1.</div>
                                    </td>
                                    <td>
                                        <div>60411200</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t4}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                        <div>{context[lang].TestFanlar.t6}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>2.</div>
                                    </td>
                                    <td>
                                        <div>60711300</div>
                                    </td>
                                    <td>
                                        <span>{context[lang].TestFanlar.t10}</span>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t7}</div>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>3.</div>
                                    </td>
                                    <td>
                                        <div>60711400</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t11}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t7}</div>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>4.</div>
                                    </td>
                                    <td>
                                        <div><span>60720700</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t12}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                        <div>{context[lang].TestFanlar.t7}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>5.</div>
                                    </td>
                                    <td>
                                        <div><span>60710100</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t13}</div>
                                    </td>
                                    <td>
                                        <div> {context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>6.</div>
                                    </td>
                                    <td>
                                        <div><span>60710200</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t14}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>7.</div>
                                    </td>
                                    <td>
                                        <div><span>60720100</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t15}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>8.</div>
                                    </td>
                                    <td>
                                        <div><span>60721100</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t16}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>9.</div>
                                    </td>
                                    <td>
                                        <div><span>60720900</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t17}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>10.</div>
                                    </td>
                                    <td>
                                        <div><span>60710400</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t18}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>11.</div>
                                    </td>
                                    <td>
                                        <div>61020200</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t19}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                        <div>{context[lang].TestFanlar.t7}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>12.</div>
                                    </td>
                                    <td>
                                        <div>5310100</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t20}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t5} </div>
                                        <div>{context[lang].TestFanlar.t7}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>13.</div>
                                    </td>
                                    <td>
                                        <div>60720300</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t21}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>14.</div>
                                    </td>
                                    <td>
                                        <div>60720500</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t22}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>15.</div>
                                    </td>
                                    <td>
                                        <div>60720400</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t23}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>16.</div>
                                    </td>
                                    <td>
                                        <div>60721000</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t24}</div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>17.</div>
                                    </td>
                                    <td>
                                        <div>60720200</div>
                                    </td>
                                    <td>
                                        <div><span>{context[lang].TestFanlar.t25}</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t9}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>18.</div>
                                    </td>
                                    <td>
                                        <div>60412500</div>
                                    </td>
                                    <td>
                                        <div><span>{context[lang].TestFanlar.t26}</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t5}</div>
                                        <div>{context[lang].TestFanlar.t6}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>19.</div>
                                    </td>
                                    <td>
                                        <div>61010200</div>
                                    </td>
                                    <td>
                                        <div><span>{context[lang].TestFanlar.t27}</span></div>
                                    </td>
                                    <td>
                                        <div>{context[lang].TestFanlar.t8}</div>
                                        <div>{context[lang].TestFanlar.t6}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].header.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].entrantLinks.sixth}</a></li>
                            <Link to={'/page/static/get/utishBall'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.second}</a></li>
                            </Link>
                            <Link to={'/page/static/get/NotFound'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.nineth}</a></li>
                            </Link>
                            <Link to={'/page/get/79'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.fourth}</a></li>
                            </Link>
                            <Link to={'/page/get/80'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.fivth}</a></li>
                            </Link>
                            <Link to={'/page/static/get/xorijAbitur'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.first}</a></li>
                            </Link>
                            <Link to={'/page/get/83'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.seventh}</a></li>
                            </Link>
                            <Link to={'/page/get/84'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.eighth}</a></li>
                            </Link>
                            <Link to={'/page/get/85'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.tenth}</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TestFanlari;
