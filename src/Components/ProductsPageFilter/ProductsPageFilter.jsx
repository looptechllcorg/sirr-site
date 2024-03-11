// import style scss
import { useState } from "react"
import style from  "./ProductsPageFilter.module.scss"
import CloseIcon from "../../assets/icons/CloseIcon";
import ReactSlider from 'react-slider'


export default function ProductsPageFilter({closeFunc}) {
	const [openCloseFilter, setOpenCloseFilter]=useState({
		CategoryFilter:true,
		sortFilter:true,
		priceFilter:true   
	})
    const [value, setValue]=useState([])
	const onClickOpenCloseFunc=(item)=>{
     setOpenCloseFilter(prevState => ({ ...prevState, [item]: !prevState[item]
	  }));
	}
  return (
	<div className={style.filterWrapper}>
		 <button className={style.closeBtn}
		  onClick={closeFunc}><CloseIcon/></button>
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
		<>
		<ReactSlider
		className="horizontal-slider"
		thumbClassName="example-thumb"
		trackClassName="example-track"
		defaultValue={[0,150]}
		min={0}
		max={150}
		onChange={(value, index) => setValue(value)}
		renderThumb={(props, state) => <div {...props}></div>}
	/>
	   <div className={style.filterResult}>
		  <span className={style.minValue}>{value[0]} AZN</span>
		  <span> - </span>
		  <span className={style.maxValue}>{value[1]} AZN</span>
	  </div>
	    </>
		   }
		   
             
		</div>
	</div>
  )
}
