// import style scss
import style from "./Contact.module.scss"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
import SocialList from "../../Components/SocialList/SocialList"


import TextAndImgSideBySide from "../../Components/TextAndImgSideBySide/TextAndImgSideBySide"

// import image
import contactBgImg from "../../assets/images/contactPageBgImg.jpg"
// import my write data
import { contactTextImgDatas } from "../../MyWriteDatas/myDatas"
import ContactFormGroup from "../../Components/ContactFormGroup/ContactFormGroup"
import BranchesAndMap from "../../Components/BranchesAndMap/BranchesAndMap"

export default function Contact() {
  return (
	<section id={style.contact}>
		<SocialList/>
		<div style={{paddingTop:0}} className="container">  

			<MainBgImage bgImg={contactBgImg} bgImgOnText={"Contact"}/>

			<TextAndImgSideBySide bgColor={"transparent"} data={contactTextImgDatas}/>
	     
		     <ContactFormGroup/>

			 <BranchesAndMap />
	
		</div>
	  
	</section>
  )
}
