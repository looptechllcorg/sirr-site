// import style scss
import { useState } from "react"
import style from  "./ProductsPageFilter.module.scss"


export default function ProductsPageFilter({showHiddenState}) {
	const [openCloseFilter, setOpenCloseFilter]=useState({
		CategoryFilter:true,
		sortFilter:true,
		priceFilter:true   
	})
    
	const onClickOpenCloseFunc=(item)=>{
     setOpenCloseFilter(prevState => ({ ...prevState, [item]: !prevState[item]
	  }));
	}
  return (
	<div className={`${style.filterWrapper} ${showHiddenState ? '' : style.active}`}>
		<div className={style.CategoryFilter}>
		  <div onClick={()=>onClickOpenCloseFunc("CategoryFilter")} className={style.titleCategory}>
		   <h4>All Categories</h4>
		   <span>{openCloseFilter.CategoryFilter ? "-" : "+"}</span>
		   </div>
		{openCloseFilter.CategoryFilter &&
		  <ul className={style.categoryName}>
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
			<span>{openCloseFilter.sortFilter ? "-" : "+"}</span>
			</div>
           
		  {openCloseFilter.sortFilter && 
		  <ul>
			<li>sdd</li>
			<li>dds</li>
			<li>sdd</li>
			<li>dds</li>
		   </ul>
          }
		</div>
		<div className={style.priceFilter}>
		<div
		onClick={()=>onClickOpenCloseFunc("priceFilter")} 
		className={style.titlePrice}>
		   <h4>Price</h4>
		   <span>{openCloseFilter.priceFilter ? "-" : "+"}</span>
		   </div>
		   { openCloseFilter.priceFilter &&
           <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
           }
		</div>
	</div>
  )
}
