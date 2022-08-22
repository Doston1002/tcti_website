import { Helmet } from "react-helmet";
import { useContext } from "react";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";

function Footer() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className="container-fluid">
        <footer className="footer d-flex align-items-center">
          <div className="location">
            <h4>
              <i className="fa-solid fa-location-dot"></i>
              {context[lang].footerText.first}&nbsp; &nbsp;
              <a
                target="_blank"
                href="https://www.google.com/maps/place/41.32265853294377, 69.24646919377544"
              >
                {context[lang].footerText.firstAddress}
              </a>
            </h4>
            <p>
              <i className="fa-solid fa-mobile-screen-button"></i>
              {context[lang].footerText.second} &nbsp; &nbsp;
              <a target="_blank" href="tel:(998-71)244-79-15.">
                (998-71)244-79-15.
              </a>
              &nbsp; &nbsp;
              <a target="_blank" href="tel:(998-71)244-79-18.">
                (998-71)244-79-18.
              </a>
            </p>
            <p>
              <i class="fa-solid fa-address-book"></i>
              {context[lang].footerText.third}:&nbsp; &nbsp;
              <a target="_blank" href="fax:(998-71)244-79-20.">
                (998-71)244-79-20.
              </a>
              &nbsp; &nbsp;
              <a target="_blank" href="fax:(998-71)244-79-17">
                (998-71)244-79-17
              </a>
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>
              {context[lang].footerText.fourth}&nbsp; &nbsp;
              <a target="_blank" href="mailto:info@tcti.uz">
                info@tcti.uz
              </a>
              &nbsp; &nbsp;
              <a target="_blank" href="mailto:@tktimatbuotxizmati">
                @tktimatbuotxizmati
              </a>
            </p>
          </div>

          <div className="footer__icon">
            <h3>
              <a href="https://t.me/tktimatbuotxizmati" target="_blank">
                <i className="color-white  fa-brands fa-telegram"></i>
              </a>
            </h3>

            <h3>
              {" "}
              <a
                href="https://www.instagram.com/tktimatbuotxizmati"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </h3>
            <h3>
              {" "}
              <a
                href="https://youtube.com/channel/UCMBthWkBnRKxzhrbizwXc4g"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </h3>
            <h3>
              <a
                href="https://www.facebook.com/tkti.matbuotxizmati"
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </a>
            </h3>
            <h3>
              <a href="https://twitter.com/txizma" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </h3>
          </div>
          <Helmet>
            <script src="../../js/lang_data.js" type="text/javascript" />
          </Helmet>
        </footer>
      </div>
    </>
  );
}

export default Footer;
