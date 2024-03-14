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
import {  useEffect, useState } from "react"
import FilterIcon from "../../assets/icons/FilterIcon"
import sirrSite from "../../Helpers/Sirr"
import urls from "../../ApiValues/urls"

export default function Product() {
	const [showHiddenFilterComponent, setShowHiddenFilterComponent]=useState(false);
	
		const [AllProductDatas, setAllProductDatas]=useState([]);

		useEffect(()=>{
			const getProductPageDatas=async ()=>{
			  try {
				   const ResPrPageDatas= await sirrSite.api().get(urls.allProduct)
						setAllProductDatas(ResPrPageDatas.data.data.data)
						
			  } catch (error) {
			   console.log(error);	
			  }
			}
			getProductPageDatas()
		  },[])
	 
	const onClickshowHiddenFilterComponent=()=>{
		setShowHiddenFilterComponent(!showHiddenFilterComponent)
	}

  return (
	<section id={style.Product}>
		<SocialList/>
		<div style={{paddingTop:0}} className="container">
		  <MainBgImage bgImg={productBgImg} bgImgOnText={"Products"}/>
		  <SiteWay data={["Home Page","Products"]}/>
          
		  <div className={style.FilterAndProduct}>
  
		  <div className={style.mobileFilter}>
		     {showHiddenFilterComponent && <ProductsPageFilter 
			 setAllProductDatas={setAllProductDatas}
			 closeFunc={onClickshowHiddenFilterComponent}/> }
			 <button onClick={onClickshowHiddenFilterComponent} 
		   className={style.filterShow}>Filter <FilterIcon/></button>
		   </div>      

		       <div className={style.webFilter}>
			      <ProductsPageFilter  setAllProductDatas={setAllProductDatas}/> 
				</div>
		
			
           <div className={style.ProductWrapper}>   
            {
				AllProductDatas.map(product=>(
					<ProductPagePrCart key={product.id} data={product}/>
				))
			} 
		   </div>
		  </div>
		</div>
	  
	</section>
  )
}
