import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg'
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'

function UtishBallar() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
         
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <h3>{context[lang].UtishBallar.fivth}</h3>
                        <h4>{context[lang].UtishBallar.t3}</h4>
                        <div className="wrapper">
                            <div className="parent-tab tab-3">
                                <input type="radio" name="tab" id="tab-3" />
                                <label for="tab-3" className="tab-3">
                                    <span>{context[lang].UtishBallar.fourth}</span>
                                    <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                                </label>
                                <h3>{context[lang].UtishBallar.t4}</h3>
                                <div className="content">
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
                                                    <div><strong>{context[lang].UtishBallar.t1}</strong></div>
                                                </td>
                                                <td>
                                                    <div><strong>{context[lang].UtishBallar.t2}</strong></div>
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
                                                    <div>149,10</div>
                                                </td>
                                                <td>
                                                    <div>123,90</div>
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
                                                    <div>102,90</div>
                                                </td>
                                                <td>
                                                    <div>70,35</div>
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
                                                    <div>123,90</div>
                                                </td>
                                                <td>
                                                    <div>71,40</div>
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
                                                    <div>{context[lang].TestFanlar.t12} {context[lang].UtishBallar.t6}</div>
                                                </td>
                                                <td>
                                                    <div>108,15</div>
                                                </td>
                                                <td>
                                                    <div>69,30</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>5.</div>
                                                </td>
                                                <td>
                                                    <div><span>60720700</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t12} {context[lang].UtishBallar.t7}</div>
                                                </td>
                                                <td>
                                                    <div>85,05</div>
                                                </td>
                                                <td>
                                                    <div>67,20</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>6.</div>
                                                </td>
                                                <td>
                                                    <div><span>60710100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t13} {context[lang].UtishBallar.t6}</div>
                                                </td>
                                                <td>
                                                    <div>111,30</div>
                                                </td>
                                                <td>
                                                    <div>73,50</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>7.</div>
                                                </td>
                                                <td>
                                                    <div><span>60710100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t13} {context[lang].UtishBallar.t7}</div>
                                                </td>
                                                <td>
                                                    <div>78,75</div>
                                                </td>
                                                <td>
                                                    <div>61,95</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>8.</div>
                                                </td>
                                                <td>
                                                    <div><span>60710200</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t14}</div>
                                                </td>
                                                <td>
                                                    <div>123.90</div>
                                                </td>
                                                <td>
                                                    <div>113.40</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>9.</div>
                                                </td>
                                                <td>
                                                    <div><span>60720100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t15} {context[lang].UtishBallar.t6}</div>
                                                </td>
                                                <td>
                                                    <div>118.65</div>
                                                </td>
                                                <td>
                                                    <div>101.85</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>10.</div>
                                                </td>
                                                <td>
                                                    <div><span>60720100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t15} {context[lang].UtishBallar.t7}</div>
                                                </td>
                                                <td>
                                                    <div>97.65</div>
                                                </td>
                                                <td>
                                                    <div>81.90</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>11.</div>
                                                </td>
                                                <td>
                                                    <div><span>60721100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t16} {context[lang].UtishBallar.t6}</div>
                                                </td>
                                                <td>
                                                    <div>118.65</div>
                                                </td>
                                                <td>
                                                    <div>73.50</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>12.</div>
                                                </td>
                                                <td>
                                                    <div><span>60721100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t16} {context[lang].UtishBallar.t7}</div>
                                                </td>
                                                <td>
                                                    <div>80.85</div>
                                                </td>
                                                <td>
                                                    <div>67.20</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>13.</div>
                                                </td>
                                                <td>
                                                    <div><span>60720900</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t17}</div>
                                                </td>
                                                <td>
                                                    <div>106.05</div>
                                                </td>
                                                <td>
                                                    <div>69.30</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>14.</div>
                                                </td>
                                                <td>
                                                    <div><span>60710400</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t18}</div>
                                                </td>
                                                <td>
                                                    <div>116.55</div>
                                                </td>
                                                <td>
                                                    <div>98.70</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>15.</div>
                                                </td>
                                                <td>
                                                    <div>61020200</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t19}</div>
                                                </td>
                                                <td>
                                                    <div>100.80</div>
                                                </td>
                                                <td>
                                                    <div>68.25</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>16.</div>
                                                </td>
                                                <td>
                                                    <div>60710500</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t20}</div>
                                                </td>
                                                <td>
                                                    <div>117.60</div>
                                                </td>
                                                <td>
                                                    <div>77.70</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>17.</div>
                                                </td>
                                                <td>
                                                    <div>60720300</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t21} {context[lang].UtishBallar.t6}</div>
                                                </td>
                                                <td>
                                                    <div>90.30</div>
                                                </td>
                                                <td>
                                                    <div>73.50</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>18.</div>
                                                </td>
                                                <td>
                                                    <div>60720300</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t21} {context[lang].UtishBallar.t7}</div>
                                                </td>
                                                <td>
                                                    <div>89.25</div>
                                                </td>
                                                <td>
                                                    <div>71.40</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>19.</div>
                                                </td>
                                                <td>
                                                    <div>60720500</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t22}</div>
                                                </td>
                                                <td>
                                                    <div>115.50</div>
                                                </td>
                                                <td>
                                                    <div>92.40</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>20.</div>
                                                </td>
                                                <td>
                                                    <div>60720400</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t23}</div>
                                                </td>
                                                <td>
                                                    <div>105</div>
                                                </td>
                                                <td>
                                                    <div>80.85</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>21.</div>
                                                </td>
                                                <td>
                                                    <div>60721000</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t24}</div>
                                                </td>
                                                <td>
                                                    <div>92.40</div>
                                                </td>
                                                <td>
                                                    <div>66.15</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>22.</div>
                                                </td>
                                                <td>
                                                    <div>60720200</div>
                                                </td>
                                                <td>
                                                    <div><span>{context[lang].TestFanlar.t25}</span></div>
                                                </td>
                                                <td>
                                                    <div>119.70</div>
                                                </td>
                                                <td>
                                                    <div>101.85</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="parent-tab">
                                <input type="radio" name="tab" id="tab-6" />
                                <label for="tab-6">
                                    <span>{context[lang].UtishBallar.fourth}</span>
                                    <div className="icon"><i className="fa-solid fa-chevron-down"></i></div>
                                </label>
                                <h3>{context[lang].UtishBallar.t5}</h3>
                                <div className="content">
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
                                                    <div><strong>{context[lang].UtishBallar.t2}</strong></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>1.</div>
                                                </td>
                                                <td>
                                                    <div>60711300</div>
                                                </td>
                                                <td>
                                                    <span>{context[lang].TestFanlar.t10}</span>
                                                </td>

                                                <td>
                                                    <div>80.85</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>2.</div>
                                                </td>
                                                <td>
                                                    <div>60720700</div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t12}</div>
                                                </td>

                                                <td>
                                                    <div>80.85</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>3.</div>
                                                </td>
                                                <td>
                                                    <div><span>60710100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t13} {context[lang].UtishBallar.t6}</div>
                                                </td>

                                                <td>
                                                    <div>79.80</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>4.</div>
                                                </td>
                                                <td>
                                                    <div><span>60710100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t13} {context[lang].UtishBallar.t7}</div>
                                                </td>

                                                <td>
                                                    <div>72.45</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>5.</div>
                                                </td>
                                                <td>
                                                    <div><span>60720100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t15} {context[lang].UtishBallar.t6}</div>
                                                </td>

                                                <td>
                                                    <div>84</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>6.</div>
                                                </td>
                                                <td>
                                                    <div><span>60720100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t15} {context[lang].UtishBallar.t7}</div>
                                                </td>

                                                <td>
                                                    <div>76.65</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>7.</div>
                                                </td>
                                                <td>
                                                    <div><span>60721100</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t16}</div>
                                                </td>

                                                <td>
                                                    <div>78.75</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>8.</div>
                                                </td>
                                                <td>
                                                    <div><span>61010200</span></div>
                                                </td>
                                                <td>
                                                    <div>{context[lang].TestFanlar.t27}</div>
                                                </td>

                                                <td>
                                                    <div>56.70</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p><img src={`${Logo}`} alt="" />{context[lang].header.third}</p></li>
                            <li className="nav-ul-li active"><a href=" ">{context[lang].entrantLinks.second}</a></li>
                            <Link to={'/page/static/get/TestFanlari'}>
                                <li className="nav-ul-li"><a href=" ">{context[lang].entrantLinks.sixth}</a></li>
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

export default UtishBallar;
