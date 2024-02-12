// import style scss
import SocialList from "../../Components/SocialList/SocialList"
import style from "./About.module.scss"
import TitleList from "../../Components/TitleList/TitleList"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
// import image
import aboutBgImg from "../../assets/images/aboutBgImg.jpg"
// import my write datas
import { aboutOurCatalogDatas } from "../../MyWriteDatas/myDatas"
import TextAndImgSideBySide from "../../Components/TextAndImgSideBySide/TextAndImgSideBySide"
 

export default function About() {
  return (
	<section id={style.about}>
		<SocialList/>
		<div style={{paddingTop:0}} className="container">

         <MainBgImage bgImg={aboutBgImg} bgImgOnText={"About us"}/>

		  <div className={style.HouseHistory}>
			<TitleList mainTitle={"Our history"} detailedTitle={"Our cake house history"}/>
			<p className={style.HouseHistoryDescription}>
			It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default mode. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
			</p>
		  </div>

		   <div className={style.videoBgImg}>
			<div className={style.videoBgOverlay}></div>
		   </div>
		
     <TextAndImgSideBySide data={aboutOurCatalogDatas}/>

		<div className={style.OurInformation}>
			<span className={style.infoWrapper}>icon <h6 className={style.infoTitle}>17 years activity</h6></span>
			<span className={style.infoWrapper}>icon <h6 className={style.infoTitle}>3 stories</h6></span>
			<span className={style.infoWrapper}>icon <h6 className={style.infoTitle}>200 product number</h6></span>
			<span className={style.infoWrapper}>icon <h6 className={style.infoTitle}>560 employees</h6></span>
		</div>
		</div>
		
	</section>
  )
}
