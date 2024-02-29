// import style scss
import style from "./SearchResult.module.scss"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
// import image
import searchBgImg from "../../assets/images/searchBgImg.jpg"
import { useContext } from "react"
import { SearchContext } from "../../Contexts/SearchContext"
import serachIcon from "../../assets/icons/searchResultPageIcon.svg";



export default function SearchResult() {
	const {searchInpValue, onChangeInput} = useContext(SearchContext)
    console.log("sss", searchInpValue);
  return (
	<section id={style.SearchResultWrapper}>
		<div style={{paddingTop:0}} className="container">
			<MainBgImage bgImg={searchBgImg} bgImgOnText={"Search"} bgImgHeight={"400px"}/>
                 
           <div className={style.resultSearch}>
				<input 
				onChange={onChangeInput}
				placeholder="Search"
				id="resultSearch"
				className={style.resultSearchInput} 
				/>
				<label className={style.label} htmlFor="resultSearch">
					<img className={style.searchIcon} src={serachIcon} alt="" />
					Search
				</label>
				</div>
			<div style={{textAlign:"center", color:"green", fontSize:"30px"}}>
				{searchInpValue}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi porro ipsum minima vero. Maiores, ut ullam. Dolorum deserunt quasi, sequi cumque autem ullam. Aspernatur eaque reprehenderit omnis, impedit atque maiores doloribus maxime cum fugit facere voluptates est non exercitationem voluptas ad beatae inventore vero quis dicta iste. Quasi fuga eligendi aliquam vel, amet, eum necessitatibus quidem molestias earum ab voluptatum odit ratione illum pariatur esse magni consequuntur corrupti officiis rem ducimus, ipsum praesentium accusantium ullam. Voluptates ullam accusantium iure dolorem delectus, autem suscipit incidunt doloremque, ut laudantium qui pariatur, facere numquam eligendi earum maiores quaerat consequuntur vero! Porro, ducimus.
			</div>
		</div>
	  
	</section>
  )
}
