import { NavLink } from "react-router-dom"
// import style scss
import style from "./Footer.module.scss"
// import icons
import FooterLogo from "../../assets/logo/footerLogo.svg"
import FooterInstagramIcon from "../../assets/icons/FooterInstagram.svg"
import FooterFacebookIcon from "../../assets/icons/FooterFacebook.png"
import FooterWhatsappIcon from "../../assets/icons/FooterWhatsapp.svg"



export default function Footer() {
  return (
	<section id={style.FooterSection}>
		<div className="container">
			<div className={style.FooterWrapper}>
				<div className={style.LogoSocial}>
					<a className={style.FooterLogo} href="/">
                  <img src={FooterLogo} alt="burada footer logo var" />
				    </a>
				  <div className={style.footerSocila}>
				  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
			<img src={FooterInstagramIcon} alt="burada instagram iconu var" />
	         	</a>
		<a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
			<img src={FooterFacebookIcon} alt="burada facebook iconu var" />
		</a>
		<a  target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
			<img src={FooterWhatsappIcon} alt="burada whatsapp iconu var" />
		</a>
				  </div>
				</div>
				<div className={style.FooterPages}>
				<NavLink>About us</NavLink>
				<NavLink>Product</NavLink>
				<NavLink>Media</NavLink>
				<NavLink>Contact</NavLink>
				</div>
			</div>
			<hr  className={style.line}/>
			<a className={style.looptech}>Create by looptech</a>
		</div>
	  
	</section>
  )
}
