// import style scss
import style from "./Header.module.scss";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import  nav logo
import navLogo from "../../assets/logo/whiteLogoSirr.svg";
import { Select } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import SocialInstagramIcon from "../../assets/icons/SocialInstagramIcon";
import SocialFacebookIcon from "../../assets/icons/SocialFacebookIcon";
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon";
import { SearchContext } from "../../Contexts/SearchContext";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import SearchIcon from "../../assets/icons/SearchIcon";

export default function Header() {
    const { siteLang, onChangeLang, onClickLang } = useContext(LanguageContext);
    const { searchInpValue, onChangeInput, handleSearch, handleKeyDownHeaderInput, searchInputShow, setSearchInputShow, setNoIcon, noIcon, ClearInputValue, showHiddenMenu, FuncShowHidenMenu } = useContext(SearchContext);

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
                        <img src={navLogo} alt="burada nav logo var" />
                    </a>
                    <div className={`${style.navPages} ${showHiddenMenu ? style.hiddenMenu : ""}`}>
                        <div className={style.MobileLangSearch}>
                            <div className={style.mobileLang}>
                                <span onClick={() => onClickLang("az")} className={style.langCategory}>
                                    AZ
                                </span>
                                <span onClick={() => onClickLang("en")} className={style.langCategory}>
                                    EN
                                </span>
                                <span onClick={() => onClickLang("ru")} className={style.langCategory}>
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
                                        onClick={showHiddenMenu}
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
                                        onClick={showHiddenMenu}
                                        to={"/products"}
                                        style={({ isActive }) => {
                                            return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                        }}
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        onClick={showHiddenMenu}
                                        to={"/contact"}
                                        style={({ isActive }) => {
                                            return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                        }}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            {searchInputShow ? <input className={style.searchInput} value={searchInpValue} onChange={onChangeInput} onKeyDown={handleKeyDownHeaderInput} id="homeSearch" /> : ""}
                        </div>
                        <div className={style.mobileSocial}>
                            <a className={style.instagram} target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                                <SocialInstagramIcon />
                            </a>
                            <a className={style.facebook} target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                <SocialFacebookIcon />
                            </a>
                            <a className={style.whatsapp} target="_blank" rel="noreferrer" href="https://wa.me/+994554446640">
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

                        <div className={style.lang}>
                            <Select value={siteLang} onChange={onChangeLang} className={style.selectLang} focusBorderColor="transparent">
                                <option value="az">AZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </Select>
                        </div>
                    </div>

                    <div className={style.HamburgerMenu} onClick={() => FuncShowHidenMenu()}>
                        {showHiddenMenu ? <IoMdClose className={style.HamburgerMenuCloseIcon} /> : <span className={style.HamburgerMenuCloseIcon}>H</span>}
                    </div>
                </nav>
            </div>
        </section>
    );
}
