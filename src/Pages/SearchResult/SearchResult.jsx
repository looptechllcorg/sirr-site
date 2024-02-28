// import style scss
import style from "./SearchResult.module.scss"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
// import image
import searchBgImg from "../../assets/images/searchBgImg.jpg"
import { useContext } from "react"
import { SearchContext } from "../../Contexts/SearchContext"



export default function SearchResult() {
  const {searchInpValue} = useContext(SearchContext)
    console.log("sss", searchInpValue);
  return (
	<section id={style.SearchResultWrapper}>
		<div style={{paddingTop:0}} className="container">
			<MainBgImage bgImg={searchBgImg} bgImgOnText={"Search"}/>

			<div style={{textAlign:"center", color:"green", fontSize:"30px"}}>
				{searchInpValue}
			</div>
		</div>
	  
	</section>
  )
}
