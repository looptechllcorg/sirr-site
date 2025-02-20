// import style scss
import style from "./Header.module.scss";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import  nav logo
import navLogo from "../../assets/logo/whiteLogoSirr.svg";
// bagladim deyende acilsidir
import { Select } from "@chakra-ui/react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { useContext, useEffect, useState } from "react";
import SocialInstagramIcon from "../../assets/icons/SocialInstagramIcon";
import SocialFacebookIcon from "../../assets/icons/SocialFacebookIcon";
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon";
import { SearchContext } from "../../Contexts/SearchContext";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../assets/icons/SearchIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import HamburgerMenuIcon from "../../assets/icons/HamburgerMenuIcon";   
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";



export default function Header() {
    const { siteLang, onChangeLang, onClickLang } = useContext(LanguageContext);
     const {socialDatas} = useContext(ApiGlobalContext) ;
    const { searchInpValue, onChangeInput, handleSearch,
         handleKeyDownHeaderInput, searchInputShow, setSearchInputShow, 
         setNoIcon, noIcon, ClearInputValue, showHiddenMenu,
          FuncShowHidenMenu } = useContext(SearchContext);

    const [navColorChange, setNavColorChange] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const handleShowSearchInput = () => {
        if (searchInpValue === "") {
            setSearchInputShow(!searchInputShow);  
        } else {
            handleSearch(searchInpValue);
            navigate(`/search?searchInpValue=${searchInpValue}`);
            setSearchInputShow(false);
            ClearInputValue();
            FuncShowHidenMenu();
        }
    };

    useEffect(() => {
        if (location.pathname === "/search") {
            setNoIcon(false);
        } else {
            setNoIcon(true); 
        }
    }, [location.pathname, setNoIcon]);

    // scroll nav change color function start
    const FuncNavColorChange = () => {
        if (window.scrollY > 80) {
            setNavColorChange(true);
        } else {
            setNavColorChange(false);
        }
    };   

    window.addEventListener("scroll", FuncNavColorChange);

    return (
        <section className={`${style.header} ${navColorChange ? style.navBlack : ""}`}>
            <div style={{ padding: 0 }} className="container">
                <nav>
                    <a href="/" className={style.navLogo}>
                        <img src={navLogo} />
                    </a>
                    <div className={`${style.navPages} ${showHiddenMenu ? style.hiddenMenu : ""}`}>
                        <div className={style.MobileLangSearch}>
                            <div className={style.mobileLang}>
                                <span  onClick={() => {onClickLang("az");FuncShowHidenMenu();}} className={`${style.langCategory} ${siteLang === "az" ? style.activeLang : ""}`}>
                                    AZ
                                </span>
                                <span  onClick={() => {onClickLang("en");FuncShowHidenMenu();}} className={`${style.langCategory} ${siteLang === "en" ? style.activeLang : ""}`}>
                                    EN
                                </span>
                                <span  onClick={() => {onClickLang("ru");FuncShowHidenMenu();}} className={`${style.langCategory} ${siteLang === "ru" ? style.activeLang : ""}`}>
                                    RU
                                </span>
                            </div>
                            <span onClick={handleShowSearchInput} className={style.mobileSearchIcon}>
                                <SearchIcon />
                            </span>
                        </div> 
                        <div className={style.pageAndSearch}>
                            <ul className={style.navPageList}>
                                <li>
                                    <NavLink
                                        onClick={()=>FuncShowHidenMenu()}
                                        to={"/about-us"}
                                        style={({ isActive }) => {
                                            return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                        }}
                                    >
                                        {t("about")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={()=>FuncShowHidenMenu()}
                                        to={"/products"}
                                        style={({ isActive }) => {
                                            return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                        }}
                                    >
                                        {t("products")}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={()=>FuncShowHidenMenu()}
                                        to={"/contact"}
                                        style={({ isActive }) => {
                                            return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                        }}
                                    >
                                      {t("contact")}
                                    </NavLink>
                                </li>
                            </ul>
                            {searchInputShow ? 
                            <input className={style.searchInput} value={searchInpValue}
                             onChange={onChangeInput} onKeyDown={handleKeyDownHeaderInput} id="homeSearch" /> : ""}
                        </div>
                        <div className={style.mobileSocial}>
                            <a className={style.instagram} target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_instagram"]}>
                                <SocialInstagramIcon />
                            </a>
                            <a className={style.facebook} target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_facebook"]}>
                                <SocialFacebookIcon />
                            </a>
                            <a className={style.whatsapp} target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_whatsapp"]}>
                                <SocialWhatsappIcon />
                            </a>
                        </div>
                    </div>
                    <div className={style.SearchLang}>
                        {noIcon ? (
                            <label
                                className={style.homeLabel}
                                onClick={() => {
                                    handleShowSearchInput();
                                }}
                                htmlFor="homeSearch"
                            >
                                <SearchIcon />
                            </label>
                        ) : (
                            ""
                        )}
                          {/* bagladim deyende acilsidir  */}
                        <div className={style.lang}>
                            <Select value={siteLang} onChange={onChangeLang} className={style.selectLang} focusBorderColor="transparent">
                                <option value="az">AZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </Select>
                        </div>
                    </div>

                    <div className={style.HamburgerMenu} onClick={() => FuncShowHidenMenu()}>
                        {showHiddenMenu ? (
                            <CloseIcon className={style.HamburgerMenuCloseIcon} />
                        ) : (
                                <HamburgerMenuIcon className={style.HamburgerMenuCloseIcon} />
                        )}
                    </div>
                </nav>
            </div>
        </section>
    );
}
