import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image1 from '../../images/gosh-sut.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'





function PageStaticOne() {
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
                            <h3>{context[lang].kafedra.seventh}</h3>
                            <div className="tab">
                                <button className="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kafedraIfoSelect.first}
                                </button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kafedraIfoSelect.second}</button>
                                <button className="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">{context[lang].kafedraIfoSelect.third}</button>
                            </div>
                            <div id="About" ref={tabOne} className="tabcontent opened">
                                <h4>{context[lang].kafedraIfo.first}</h4>
                               <p>{context[lang].kafedraIfo24.first}</p>
                               <p>{context[lang].kafedraIfo24.second}</p>
                               <p>{context[lang].kafedraIfo24.first}</p>
                               <p>{context[lang].kafedraIfo24.third}</p>
                               <p>{context[lang].kafedraIfo24.fivth}</p>
                               <p>{context[lang].kafedraIfo24.sixth}</p>
                               <p>{context[lang].kafedraIfo24.seventh}</p>
                               <p>{context[lang].kafedraIfo24.eighth}</p>
                               <p>{context[lang].kafedraIfo24.nineth}</p>
                               <p>{context[lang].kafedraIfo24.tenth}</p>
                               <p>{context[lang].kafedraIfo24.eleventh}</p>
                               <p>{context[lang].kafedraIfo24.twelveth}</p>
                            </div>

                            <div id="Functions" ref={tabTwo} className="tabcontent">
                                <h4>{context[lang].kafedraIfoSelect.first}</h4>
                                <p>{context[lang].kafedraIfo24Third.first}</p>
                                <p>{context[lang].kafedraIfo24Third.second}</p>
                                <p>{context[lang].kafedraIfo24Third.third}</p>
                                <p>{context[lang].kafedraIfo24Third.fourtht}</p>
                                
                                
                            </div>

                            <div id="Management" ref={tabThree} className="tabcontent">
                                <h3>{context[lang].kafedraIfoSelect.thirdt}</h3>
                                <p>{context[lang].kafedraIfoSelectFirst.first}</p>
                                <p>{context[lang].kafedraIfoSelectFirst.second}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="teachers">
                                <div className="wrapper-personal">
                                    <div className="photo-personal">
                                        <img className="images-personal" src={Image1} alt="About us" />
                                        <div className="photo__large">
                                            <div className="bg-text">
                                                <span className="degree">{context[lang].kafedradegreeInfo24.first}</span>
                                                <span className="info">
                                                {context[lang].kafedradegree24.first} <br />
                                                {context[lang].kafedradegree24.second}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="fullname-personal"> {context[lang].kafedradegreeInfo24.first} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> {context[lang].kaf1.p31}</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">{context[lang].kafedra.seventh}</a></li>
                        <Link to={'/page/static/get/18'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.first}</a></li>
                        </Link>
                        <Link to={'/page/static/get/19'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.second}</a></li>
                        </Link>
                        
                        <Link to={'/page/static/get/21'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.fourth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/22'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.fivth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/23'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.sixth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/25'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.eighth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/26'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twentyfifth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/27'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.nineth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/28'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.tenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/29'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.eleventh}</a></li>
                        </Link>
                        <Link to={'/page/static/get/30'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twelveth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/31'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.thirteenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/32'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.fourteenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/33'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.fifteenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/34'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.sixteenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/35'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.seventeenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/36'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.eighteenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/37'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.nineteenth}</a></li>
                        </Link>
                        <Link to={'/page/static/get/38'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twenty}</a></li>
                        </Link>
                        <Link to={'/page/static/get/39'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twentyfirst}</a></li>
                        </Link>
                        <Link to={'/page/static/get/40'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twentysecond}</a></li>
                        </Link>
                        <Link to={'/page/static/get/41'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twentythird}</a></li>
                        </Link>
                        <Link to={'/page/static/get/42'}>
                        <li className="nav-ul-li"><a href="kafedra">{context[lang].kafedra.twentyfourth}</a></li>
                        </Link>
                    </ul>
                    </div>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticOne;
