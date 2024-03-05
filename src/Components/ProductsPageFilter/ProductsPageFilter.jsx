// import style scss
import { useState } from "react"
import style from  "./ProductsPageFilter.module.scss"
import { object } from "yup"


export default function ProductsPageFilter() {
	const [openCloseFilter, setOpenCloseFilter]=useState(true)
 
	const onClickOpenCloseFunc=(filterName)=>{
     setOpenCloseFilter(openCloseFilter === filterName ? "" : filterName )
	}
  return (
	<div className={style.filterWrapper}>
		<div className={style.CategoryFilter}>
		  <div onClick={()=>onClickOpenCloseFunc("CategoryFilter")} className={style.titleCategory}>
		   <h4>All Categories</h4>
		   <span>-</span>
		   </div>
		{openCloseFilter === "CategoryFilter" ? "":  <ul className={style.categoryName}>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
			<li>adada</li>
		   </ul>
		 
		   }
		</div>
	    
		<div className={style.sortFilter}>
			<div
			onClick={()=>onClickOpenCloseFunc("sortFilter")}
			className={style.titleFilter}>
			<h4 >Sort by</h4>
			<span>-</span>
			</div>
           
		  {openCloseFilter === "sortFilter" ? "" : <ul>
			<li>sdd</li>
			<li>dds</li>
		   </ul>
          }
		</div>
		<div className={style.priceFilter}>
		<div className={style.titlePrice}>
		   <h4>Price</h4>
		   <span>-</span>
		   </div>

		</div>
	</div>
  )
}
