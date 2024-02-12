// import style scss
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
import style from "./Product.module.scss"
// import bg img
import productBgImg from "../../assets/images/productPageBgImg.jpg"
import SocialList from "../../Components/SocialList/SocialList"

export default function Product() {
  return (
	<section id={style.Product}>
		<SocialList/>
		<div style={{paddingTop:0}} className="container">
		  <MainBgImage bgImg={productBgImg} bgImgOnText={"Product"}/>
		</div>
	  
	</section>
  )
}
