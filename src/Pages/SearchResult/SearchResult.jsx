// import style scss
import style from "./SearchResult.module.scss"
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
// import image
import searchBgImg from "../../assets/images/searchBgImg.jpg"
import { useContext } from "react"
import { SearchContext } from "../../Contexts/SearchContext"
import serachIcon from "../../assets/icons/searchResultPageIcon.svg";
import SiteWay from "../../Components/SiteWay/SiteWay"
import ProductPagePrCart from "../../Components/ProductPagePrCart/ProductPagePrCart"



export default function SearchResult() {
	const {searchInpValue, onChangeInput, searchResult,
		     handleKeyDownHeaderInput,
			 handleSearch,
	      } = useContext(SearchContext)     
    
	console.log("sss", searchResult.data);

  return (
	<section id={style.SearchResultWrapper}>
		<div style={{paddingTop:0}} className="container">
			<MainBgImage bgImg={searchBgImg} bgImgOnText={"Search"} bgImgHeight={"400px"}/>
			<SiteWay data={["Home Page","Search"]}/>
           <div className={style.resultSearch}>
				<input 
				className={style.resultSearchInput} 
				value={searchInpValue}
				onChange={onChangeInput}
				onKeyDown={handleKeyDownHeaderInput}
				placeholder="Search"
				id="resultSearch"
				/>
				<label onClick={()=>handleSearch(searchInpValue)} className={style.label} htmlFor="resultSearch">
					<img className={style.searchIcon} src={serachIcon} alt="" />
					Search
				</label>
				</div>
			<div className={style.searchResultWrapper}>
			   {
				 searchResult.data?.map(product=>(
					<ProductPagePrCart key={product.id} data={product}/>
				 ))
			   } 
			</div>
		</div>
	  
	</section>
  )
}
