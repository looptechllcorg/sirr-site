// import style scss
import style from "./HomeContact.module.scss"
// import social icon
import instagram from "../../../assets/icons/instagram.svg"
import facebook from "../../../assets/icons/facebook.svg"

import Branches from "../../Branches/Branches"

export default function HomeContact() {
  return (
	<section id={style.HomeContactWrapper}>           
		<div className="container">
			<div className={style.HomeContact}>
				<div className={style.contactUsWrapper}>
					<h3 className={style.NameContactUs}>Contact us</h3>
                 <div className={style.contactUs}>
				<div className={style.Branches}>
                 <Branches/>
                 <Branches/>    
                 <Branches/>
                 <Branches/>
                 <Branches/>
                 <Branches/>
                 <Branches/>
				</div>

				<div className={style.social}>
			     <a href="" className={style.instagram}>
					<img src={instagram} alt="" />
					<span>sirr_cake_house</span>
				 </a>
			     <a href="" className={style.facebook}>
				 <img src={facebook} alt="" />
					<span>sirr shirniyyat evi</span>
				</a>
				</div>
				</div>
				</div>
			</div>
		</div>
	  
	</section>
  )
}
