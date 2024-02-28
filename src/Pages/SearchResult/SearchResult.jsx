// import style scss
import style from "./SearchResult.module.scss"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
// import image
import searchBgImg from "../../assets/images/searchBgImg.jpg"


export default function SearchResult() {
  return (
	<section id={style.SearchResultWrapper}>
		<div style={{paddingTop:0}} className="container">
			<MainBgImage bgImg={searchBgImg} bgImgOnText={"Search"}/>
		</div>
	  
	</section>
  )
}
