// import style scss
import style from "./Header.module.scss";

import { NavLink, useNavigate } from "react-router-dom";
// import  nav logo
import navLogo from "../../assets/logo/whiteLogoSirr.svg";
import serachIcon from "../../assets/icons/searchIcon.svg";
import { Select } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useContext, useState,useRef } from "react";
import SocialInstagramIcon from "../../assets/icons/SocialInstagramIcon";
import SocialFacebookIcon from "../../assets/icons/SocialFacebookIcon";
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon";
import { SearchContext } from "../../Contexts/SearchContext";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { useTranslation } from "react-i18next";


export default function Header() {
    const {siteLang, onChangeLang,onClickLang}=useContext(LanguageContext);
    const {searchInpValue, onChangeInput} =useContext(SearchContext);
    const searchInputRef = useRef(null);
    const [showHiddenMenu, setShowHiddenMenu] = useState(false);
    const [navColorChange, setNavColorChange] = useState(false);
    const [searchInputShow, setSearchInputShow]=useState(false);
    const [noIcon, setNoIcon]=useState(true)
    const navigate=useNavigate()
    const {t}=useTranslation()
 
    // site search 
    const handleKeyDownHeaderInput=(e)=>{
        if(searchInpValue !== "" && e.key === "Enter"){
          navigate(`/search?searchInpValue=${searchInpValue}`)
             setSearchInputShow(false)
             setNoIcon(false)
        }
        else{
            return false
        }
    }
    const handleShowSearchInput=()=>{
          if(searchInpValue === ""){
        setSearchInputShow(!searchInputShow)
          }
          else{
            navigate(`/search?searchInpValue=${searchInpValue}`)
            setSearchInputShow(false)
            setNoIcon(false)
          }
    }

    // scroll nav change color function start
    const FuncNavColorChange = () => {
        if (window.scrollY > 80) {
            setNavColorChange(true);
        } else {
            setNavColorChange(false);
        }
    };

    window.addEventListener("scroll", FuncNavColorChange);

    const FuncShowHidenMenu = () => {
        setShowHiddenMenu(!showHiddenMenu);
    };

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
                                <span onClick={()=> onClickLang("az")} className={style.langCategory}>AZ</span>
                                <span onClick={()=>onClickLang("en")} className={style.langCategory}>EN</span>
                                <span onClick={()=>onClickLang("ru")} className={style.langCategory}>RU</span>
                            </div>
                            <span className={style.mobileSearchIcon}>
                                <img onClick={handleShowSearchInput} src={serachIcon} alt="" />
                            </span>
                        </div>
                        <div className={style.pageAndSearch}>
                        <ul className={style.navPageList}>
                            <li>
                                <NavLink
                                    onClick={showHiddenMenu}
                                    to={"/about us"}
                                    style={({ isActive }) => {
                                        return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                    }}
                                >
                                    {/* About us */}
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
                                    to={"/media"}
                                    style={({ isActive }) => {
                                        return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                                    }}
                                >
                                    Media
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
                      {
                        searchInputShow ? <input 
                     className={style.searchInput}
                      value={searchInpValue}
                      onChange={onChangeInput}
                      onKeyDown={handleKeyDownHeaderInput}
                      ref={searchInputRef}
                      id="homeSearch"
                       /> : ""
                      }  
                        </div>
                        <div className={style.mobileSocial}>
                            <a className={style.instagram} target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                                <SocialInstagramIcon/>
                            </a>
                            <a className={style.facebook} target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                <SocialFacebookIcon/>
                            </a>
                            <a className={style.whatsapp}  target="_blank" rel="noreferrer" href="https://wa.me/+994554446640">
                                <SocialWhatsappIcon/>
                            </a>
                        </div>
                    </div>
                    <div className={style.SearchLang}>
                     
                     { noIcon ?  
                     <label htmlFor="homeSearch">
                         <img  onClick={() => {
                                    handleShowSearchInput();
                                    }}
                                     className={style.serachIcon} src={serachIcon} 
                                     alt="burada axtaris iconu var" />
                               </label>
                          :""    }
                        <div className={style.lang}>
                            <Select
                                value={siteLang}
                                onChange={onChangeLang}
                                className={style.selectLang}
                                focusBorderColor="transparent"
                            >
                                <option value="az">AZ</option>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                            </Select>
                        </div>
                    </div>


                    <div className={style.HamburgerMenu}  onClick={() => FuncShowHidenMenu()} >
                        {showHiddenMenu ? <IoMdClose className={style.HamburgerMenuCloseIcon} /> : <RxHamburgerMenu className={style.HamburgerMenuCloseIcon} />}
                    </div>
                </nav>
            </div>
        </section>
    );
}
