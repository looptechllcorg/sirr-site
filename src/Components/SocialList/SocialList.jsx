// import style css
import style from "./SocialList.module.scss"
// import socila icons list 
import SocialInstagram from "../../assets/icons/SocialInstagram"
import SocialFacebookIcon from "../../assets/icons/SocialFacebookIcon"
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon"
   



export default function SocialList() {   
  return (
	<div className={style.SocialListWrapper}>
		<a className={style.instagramIcon} target="_blank" rel="noreferrer" href="https://www.instagram.com/">
			<SocialInstagram />
		</a>
		<a className={style.facebookIcon} target="_blank" rel="noreferrer" href="https://www.facebook.com/">
         <SocialFacebookIcon />
		</a>
		<a className={style.WhatsappIcon} target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
		  <SocialWhatsappIcon />
		</a>
	</div>
  )
}   
