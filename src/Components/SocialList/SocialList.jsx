// import style css
import style from "./SocialList.module.scss"
// import socila icons list 
import SocialFacebookIcon from "../../assets/icons/SocialFacebookIcon"
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon"
import SocialInstagramIcon from "../../assets/icons/SocialInstagramIcon"
   


  
export default function SocialList() {   
  return (
	<div className={style.SocialListWrapper}>
		<a className={style.instagramIcon} target="_blank" rel="noreferrer" href="https://www.instagram.com/">
			<SocialInstagramIcon />
		</a>
		<a className={style.facebookIcon} target="_blank" rel="noreferrer" href="https://www.facebook.com/">
         <SocialFacebookIcon />
		</a>
		<a className={style.WhatsappIcon} target="_blank" rel="noreferrer" href="https://wa.me/+994554446640">
		  <SocialWhatsappIcon />
		</a>
	</div>
  )
}   
