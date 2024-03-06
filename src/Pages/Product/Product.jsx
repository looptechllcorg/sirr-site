// import style scss
import MainBgImage from "../../Components/MainBgImage/MainBgImage"
import style from "./Product.module.scss"
// import bg img
import productBgImg from "../../assets/images/productPageBgImg.jpg"
import SocialList from "../../Components/SocialList/SocialList"
import ProductPagePrCart from "../../Components/ProductPagePrCart/ProductPagePrCart"
// import my write datas
import { FavoriteItemsAndProductPageDatas } from "../../MyWriteDatas/myDatas"
import SiteWay from "../../Components/SiteWay/SiteWay"
import ProductsPageFilter from "../../Components/ProductsPageFilter/ProductsPageFilter"
import { useState } from "react"

export default function Product() {
	const [showHiddenFilterComponent, setShowHiddenFilterComponent]=useState(true)
   
	const onClickshowHiddenFilterComponent=()=>{
		setShowHiddenFilterComponent(!showHiddenFilterComponent)
	}

  return (
	<section id={style.Product}>
		<SocialList/>
		<div style={{paddingTop:0}} className="container">
		  <MainBgImage bgImg={productBgImg} bgImgOnText={"Products"}/>
		  <SiteWay data={["Home Page","Products"]}/>
		  <button onClick={onClickshowHiddenFilterComponent} className={style.filterShow}>open</button>

		  <div className={style.FilterAndProduct}>
			{
				showHiddenFilterComponent ? <ProductsPageFilter 
				 showHiddenState={showHiddenFilterComponent}
				/> : ""
			}
		
			
           <div className={style.ProductWrapper}>   
            {
				FavoriteItemsAndProductPageDatas.map(product=>(
					<ProductPagePrCart key={product.id} data={product}/>
				))
			}
		   </div>
		  </div>
		</div>
	  
	</section>
  )
}
