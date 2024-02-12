// import style css
import style from "./Media.module.scss"
import SocialList from "../../Components/SocialList/SocialList"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
// import image
import mediaBgImg from "../../assets/images/bg1.png"



export default function Media() {
  return (
	<section id={style.media}>
		<SocialList/>
      <div style={{paddingTop:0}} className="container">
	    <MainBgImage bgImg={mediaBgImg} bgImgOnText={"Media"}/>
	  </div>
	  
	</section>
  )
}
