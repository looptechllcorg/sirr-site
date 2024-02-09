// import style css
import style from "./SocialList.module.scss"
// import socila icons list 
import instagramIcon from "../../assets/icons/instagram.svg"
import facebookIcon from "../../assets/icons/facebook.svg"
import whatsappIcon from "../../assets/icons/whatsapp.svg"




export default function SocialList() {   
  return (
	<div className={style.SocialListWrapper}>
		<a className={style.instagram} target="_blank" rel="noreferrer" href="https://www.instagram.com/">
			<img src={instagramIcon} alt="burada instagram iconu var" />
		</a>
		<a className={style.facebook} target="_blank" rel="noreferrer" href="https://www.facebook.com/">
			<img src={facebookIcon} alt="burada facebook iconu var" />
		</a>
		<a className={style.whatsapp} target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
			<img src={whatsappIcon} alt="burada whatsapp iconu var" />
		</a>
	</div>
  )
}
