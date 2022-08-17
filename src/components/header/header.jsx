import Logo from "../../images/logo.png";
import uzFlag from "../../images/uz.png";
import ruFlag from "../../images/ru.png";
import enFlag from "../../images/eng.png";
import Institute from "../../images/university.svg";
import Structure from "../../images/structure.svg";
import Entrant from "../../images/profile.svg";
import Students from "../../images/student.svg";
import Functions from "../../images/activity.svg";
import Relation from "../../images/relation.svg";
import Interactive from "../../images/interactive.svg";
import Corruption from "../../images/corruption.svg";
import IconBurger from "../../images/burger_icon.svg";
import IconClose from "../../images/close-menu.svg";
import Symbols from "../../images/gerb.png";
import { useState, useEffect, useContext, useRef } from "react";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";
import { Link } from "react-router-dom";

function Header() {
  const innerMenu = useRef();
  const header = useRef();
  const { lang, setLang } = useContext(LanguageContext);
  const [allSc, setAllSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/all_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllSc(data);
      });
  }, []);
  const [consistsSc, setConsistsSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/consists_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setConsistsSc(data);
      });
  }, []);
  const [subStudentSc, setSubStudentSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/sub_student_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSubStudentSc(data);
      });
  }, []);
  const [studentSc, setStudentSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/student_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStudentSc(data);
      });
  }, []);
  const [workingSc, setWorkingSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/working_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWorkingSc(data);
      });
  }, []);
  const [contactsSc, setContactsSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/contacts_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContactsSc(data);
      });
  }, []);
  const [interactiveSc, setInteractiveSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/interactive_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInteractiveSc(data);
      });
  }, []);
  const [corruptionSc, setCorruptionSc] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/corruption_sc")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCorruptionSc(data);
      });
  }, []);
  const [allList, setAllList] = useState([]);
  useEffect(() => {
    fetch("http://tcti.uz/api/sub_categories/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllList(data);
      });
  }, []);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const burgerIcon = useRef();
  return (
    <div className="wrapperheader" ref={header}>
      <div className="containerheader container-fluid">
        <div className="page_header_wrapper">
          <div className="header_Logo">
            <a href="/">
              <img src={`${Logo}`} alt="" />
            </a>
            <div className="logo_name">
              <a href="/">
                <h5>
                  {context[lang].logo.first} <br />
                  {context[lang].logo.second} <br />
                  {context[lang].logo.third}
                </h5>
              </a>
            </div>
          </div>
          <p
            className="burger_wrapper"
            onClick={(e) => {
              e.preventDefault();
              innerMenu.current.classList.toggle("opened");
              header.current.classList.toggle("fixed_block");
              if (
                burgerIcon.current.src ===
                "http://localhost:3000/static/media/burger_icon.ab3ea912d85a390aeef9090cd37608e7.svg"
              ) {
                console.log(IconClose);
                burgerIcon.current.setAttribute("src", IconClose);
                // burgerIcon.current.setAttribute('width', "50")
              } else {
                burgerIcon.current.setAttribute("src", IconBurger);
                // burgerIcon.current.setAttribute('width', "50")
              }
            }}
          >
            <img ref={burgerIcon} src={IconBurger} alt="menu" width={50} />
          </p>
          <div className="header_nav">
            <ul className="d-flex">
              <li className="header__nav dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle btn_qabul"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].qabul22.qabul1}
                </a>
                <ul
                  className="dropdown-menu  innerDropDown_8"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Entrant} className="nav-icons" alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.third}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.third}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`http://tcti.uz/page/get/31`}
                          >
                            {context[lang].entrantLinks.komissiaQabul}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/xorijAbitur`}
                          >
                            {context[lang].entrantLinks.first}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/utishBall`}
                          >
                            {context[lang].entrantLinks.second}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/TestFanlari`}
                          >
                            {context[lang].entrantLinks.sixth}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/NotFound`}
                          >
                            {context[lang].entrantLinks.nineth}
                          </a>
                        </li>
                        {subStudentSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="header__nav dropdown">
                <a
                  className="btn font-weight-bold dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.first}
                </a>
              </li>
              <li className="header__nav dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.second}
                </a>
              </li>

              <li className="header__nav dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.fourth}
                </a>
              </li>
              <li className="header__nav dropdown">
                <a
                  className="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.fivth}
                </a>
                <ul
                  className="dropdown-menu innerDropDown_5"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Functions}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.fivth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.fifth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {workingSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>

              <li className="header_nav_li  dropdown">
                <div className="commands">
                  <div className="gerb">
                    <Link to="/page/static/get/symbols">
                      <img src={Symbols} alt="" width="28" />
                    </Link>
                  </div>
                  <button
                    className="zoom_btn zoom_minus"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = parseInt(Page.style.zoom) - 10 + "%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A-
                  </button>
                  <button
                    className="zoom_btn zoom_default"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = "100%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A
                  </button>
                  <button
                    className="zoom_btn zoom_plus"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = parseInt(Page.style.zoom) + 10 + "%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A+
                  </button>
                  <button
                    className="zoom_btn theme_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      Page.classList.toggle("greyscale");
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/61/61410.png"
                      alt=""
                      width="17"
                    />
                  </button>
                </div>
              </li>
              <li className="lang-selector ml-3">
                <button
                  className="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("uz");
                  }}
                >
                  <img src={`${uzFlag}`} alt="translator" width="25px" />
                </button>
                <button
                  className="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("ru");
                  }}
                >
                  <img src={`${ruFlag}`} alt="translator" width="25px" />
                </button>
                <button
                  className="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("en");
                  }}
                >
                  <img src={`${enFlag}`} alt="translator" width="25px" />
                </button>
              </li>
            </ul>
          </div>

          <div className="header_nav">
            <ul>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.seven}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex dropdown-menu innerDropDown_institut">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Institute}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.first}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.first}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {allSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <ul className="dropdown_list d-flex flex-wrap">
                        {context[lang].underCategory.first ? (
                          <>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/univer_haqida`}
                              >
                                {context[lang].generalInformation.first}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/bizning_manzil`}
                              >
                                {context[lang].generalInformation.second}
                              </a>
                            </li>

                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/biz_bn_aloqa`}
                              >
                                {context[lang].generalInformation.fifth}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/otm_ustavi`}
                              >
                                {context[lang].generalInformation.sixth}
                              </a>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.twelve}
                </a>
                <ul
                  class="dropdown-menu innerDropDown__research"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Relation}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.sixth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.sixth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {contactsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown ">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.eight}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex row dropdown-menu innerDropDown__student">
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {context[lang].underCategory.first ? (
                          <>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/rectorat`}
                              >
                                {context[lang].underCategory.first}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/faculties`}
                              >
                                {context[lang].underCategory.third}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/1`}
                              >
                                {context[lang].underCategory.second}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/3`}
                              >
                                {context[lang].underCategory.fourth}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/filial`}
                              >
                                {context[lang].underCategory.sixth}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/yoshlar`}
                              >
                                {context[lang].underCategory.seventh}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/litsey`}
                              >
                                {context[lang].underCategory.eighth}
                              </a>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                        {consistsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_name">
                          <h4 className="text-light btn__programar">
                            <button>O'quv dasturlari</button>
                           
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.nine}
                </a>
                <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
                  <div className="d-flex dropdown-menu innerDropDown__fakultet">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Students}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.fourth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.fourth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/bakalavr`}
                          >
                            {context[lang].Talabalar.first}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/DarsJadval`}
                          >
                            {context[lang].Talabalar.third}
                          </a>
                        </li>
                        {studentSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.ten}
                </a>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  aria-expanded="false"
                >
                  {context[lang].header.eleven}
                </a>
                <ul
                  class="dropdown-menu innerDropDown_6"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Relation}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.sixth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.sixth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {contactsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>

          <div ref={innerMenu} className="inner_menu">
            <ul className="catalog-list">
              <li>
                <h4 className="main_text">{context[lang].header.first}</h4>
                <ul>
                  {allSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.second}</h4>
                <ul>
                  {consistsSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.third}</h4>
                <ul>
                  {subStudentSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.fourth}</h4>
                <ul>
                  {studentSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.fivth}</h4>
                <ul>
                  {workingSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.sixth}</h4>
                <ul>
                  {contactsSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].sub_header.first}</h4>
                <ul>
                  {interactiveSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].sub_header.second}</h4>
                <ul>
                  {corruptionSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} className="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
