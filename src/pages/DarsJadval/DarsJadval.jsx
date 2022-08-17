import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Logo from '../../images/logo-circle.png'

function DarsJadval() {
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                    <div className='page_main'>
                        <div className="page-static_titles">
                            <h3>{context[lang].Talabalar.third}</h3>
                        </div>
                        <div className="table-responsive-md table-wrapp">
                            <table className="table align-middle table-hover table-striped">
                                <thead className="text-center">
                                    <th>{context[lang].underCategory.third}</th>
                                    <th colspan="4">Kurslar</th>
                                </thead>
                                <tr>
                                    <td>{context[lang].faculty_names.third}</td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t4}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t5}</a></td>
                                </tr>
                                <tr>
                                    <td>{context[lang].faculty_names.first}</td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t4}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t5}</a></td>
                                </tr>
                                <tr>
                                    <td>{context[lang].faculty_names.fourth}</td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t4}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t5}</a></td>
                                </tr>
                                <tr>
                                    <td>{context[lang].faculty_names.second}</td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t4}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t5}</a></td>
                                </tr>
                                <tr>
                                    <td>{context[lang].faculty_names.fivth}</td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t4}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t5}</a></td>
                                </tr>
                                <tr>
                                    <td>{context[lang].DarsJadval.t6}</td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t4}</a></td>
                                    <td><a href=" " className="table-button">{context[lang].DarsJadval.t5}</a></td>
                                </tr>
                                <tr>
                                    <td>{context[lang].DarsJadval.t7}</td>
                                    <td colspan="2"><a href=" " className="table-button">{context[lang].DarsJadval.t2}</a></td>
                                    <td colspan="2"><a href=" " className="table-button">{context[lang].DarsJadval.t3}</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="navbar-side">
                        <ul className="nav-ull">
                            <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].header.third}</p></li>
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

export default DarsJadval;
