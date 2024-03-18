import { NavLink } from "react-router-dom";
// import style scss
import style from "./Footer.module.scss";
// import icons
import FooterLogo from "../../assets/logo/footerLogo.svg";
import FooterInstagramIcon from "../../assets/icons/FooterInstagramIcon";
import FooterFacebookIcon from "../../assets/icons/FooterFacebookIcon";
import FooterWhatsappIcon from "../../assets/icons/FooterWhatsappIcon";
import looptechLogo from "../../assets/logo/looptech-logo-animated.svg"

export default function Footer() {
    return (
        <section id={style.FooterSection}>
            <div style={{padding:0}} className="container">
                <div className={style.FooterWrapper}>
                    <div className={style.LogoSocial}>
                        <a  className={style.FooterLogo} href="/">
                            <img src={FooterLogo} alt="burada footer logo var" />
                        </a>
                        <div className={style.footerSocila}>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                                <FooterInstagramIcon />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                <FooterFacebookIcon />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
                                <FooterWhatsappIcon />
                            </a>
                        </div>
                    </div>
                    <div className={style.FooterPages}>
                        <NavLink
                            to={"/about us"}
                            style={({ isActive }) => {
                                return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                            }}
                        >
                            About us
                        </NavLink>
                        <NavLink
                            to={"/products"}
                            style={({ isActive }) => {
                                return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                            }}
                        >
                            Product
                        </NavLink>
                        <NavLink
                            to={"/media"}
                            style={({ isActive }) => {
                                return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                            }}
                        >
                            Media
                        </NavLink>
                        <NavLink
                            to={"/contact"}
                            style={({ isActive }) => {
                                return isActive ? { color: "rgba(230, 168, 76, 1)" } : {};
                            }}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
                <hr className={style.line} />
                <a className={style.looptech} target="_blank" rel="noreferrer" href="https://www.looptech.az/">
	       	<span className={style.title}>Created by</span>	
		      <object className={style.looptechLogo} data={looptechLogo} alt="burada LoopTech logo var" />
	        	</a>
            </div>
        </section>
    );s
}
