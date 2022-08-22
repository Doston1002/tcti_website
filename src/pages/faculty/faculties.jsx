import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import fakultetImg1 from '../../images/yoq.organ.png'
import fakultetImg2 from '../../images/vino.png'
import fakultetImg3 from '../../images/oziq.png'
import fakultetImg4 from '../../images/noorgan.png'
import fakultetImg5 from '../../images/menej.png'
import Logo from '../../images/logo-circle.png'
import Facultet from '../../images/Fakultetai.jpg'
import fakultetImg6 from '../../images/global-education.png'

function PageStaticFaculty() {
    const { lang } = useContext(LanguageContext);
    return (
      <>
        <div className="container-pages">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12">
                
              </div>
            </div>
          </div>
          <div className="mainsss">
            <div className="page_main">
              <div className="fakultetlar">
                <div className="fakultet">
                  <Link to={"/page/static/get/16"}>
                    <div className="fakultet-inner">
                      <div className="hover-fakultet-oyna">
                        <img src={`${fakultetImg3}`} alt="" />
                        <h4>{context[lang].faculty_names.first}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="fakultet">
                  <Link to={"/page/static/get/17"}>
                    <div className="fakultet-inner">
                      <div className="hover-fakultet-oyna">
                        <img src={`${fakultetImg1}`} alt="YoOBKT" />
                        <h4>{context[lang].faculty_names.second}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="fakultet">
                  <Link to={"/page/static/get/mktf"}>
                    <div className="fakultet-inner">
                      <div className="hover-fakultet-oyna">
                        <img src={`${fakultetImg5}`} alt="" />
                        <h4>{context[lang].faculty_names.third}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="fakultet">
                  <Link to={"/page/static/get/nmktf"}>
                    <div className="fakultet-inner">
                      <div className="hover-fakultet-oyna">
                        <img src={`${fakultetImg4}`} alt="" />
                        <h4>{context[lang].faculty_names.fourth}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="fakultet">
                  <Link to={"/page/static/get/vinoch"}>
                    <div className="fakultet-inner">
                      <div className="hover-fakultet-oyna">
                        <img src={`${fakultetImg2}`} alt="" />
                        <h4>{context[lang].faculty_names.fivth}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="fakultet">
                  <Link to={"/page/static/get/qush_talim"}>
                    <div className="fakultet-inner">
                      <div className="hover-fakultet-oyna">
                        <img src={`${fakultetImg6}`} alt="" />
                        <h4>{context[lang].faculty_names.sixth}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default PageStaticFaculty;
