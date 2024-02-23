// import style scss
import style from "./HomeContact.module.scss"
import Branches from "../../Branches/Branches"
import SocialInstagramIcon from "../../../assets/icons/SocialInstagramIcon"
import SocialFacebookIcon from "../../../assets/icons/SocialFacebookIcon"
import { BranchesDatas } from "../../../MyWriteDatas/myDatas"

export default function HomeContact() {
  return (
	<section id={style.HomeContactWrapper}>           
		<div className="container">
			<div className={style.HomeContact}>
				<div className={style.contactUsWrapper}>
					<h3 className={style.NameContactUs}>Contact us</h3>
                 <div className={style.contactUs}>
				<div className={style.Branches}>
                   {
					BranchesDatas.map(branch=>(
						<Branches data={branch} key={branch.id}/>
					))
				   }
				</div>

				<div className={style.social}>
			     <a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className={style.instagram}>
					<SocialInstagramIcon/> sirr_cake_house
				 </a>
			     <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className={style.facebook}>
				 <SocialFacebookIcon /> sirr shirniyyat evi
				</a>
				</div>
				</div>
				</div>
			</div>
		</div>
	  
	</section>
  )
}
