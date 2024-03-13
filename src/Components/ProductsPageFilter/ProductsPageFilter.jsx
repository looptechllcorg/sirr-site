// import style scss
import { useState } from "react"
import style from  "./ProductsPageFilter.module.scss"
import CloseIcon from "../../assets/icons/CloseIcon";
import ReactSlider from 'react-slider'
import ArrowDown from "../../assets/icons/ArrowDown";
import {FavoriteItemsCategoryDatas} from "../../MyWriteDatas/myDatas";
// import useFormik 
import { useFormik } from 'formik'

export default function ProductsPageFilter({closeFunc}) {
	const [openCloseFilter, setOpenCloseFilter]=useState({
		CategoryFilter:true,
		sortFilter:true,
		priceFilter:true   
	})
    const [value, setValue]=useState([])
	const onClickOpenCloseFunc=(item)=>{
     setOpenCloseFilter(prevState => ({ ...prevState, [item] : !prevState[item] }));
	          
	}
   
	// const [categoryFilter, setCategoryFilter]=useState([])

	// const onChangeCategory=(e)=>{

	// }

	const {handleChange,values, resetForm} = useFormik({
		initialValues: {
		   category:[]
		},
		onSubmit:async (values) => {
			console.log(values);
    //  try {    
	// 	await looptech.api().post(urls.contactPost, JSON.stringify(values));
	// 	   const MySwal= withReactContent(Swal);
	// 	   MySwal.fire({
	// 		title: <strong>{looptech.translate("swalAlertTitle")}</strong>,
	// 		html: <i>{looptech.translate("swalAlertHTML")}</i>,   
	// 		icon: 'success'
	// 	  });
	//  } catch (error) {     
	// 	console.log(error);   
	// 	alert("error var !!!")
	//  }  
		  resetForm(); 
		},
		// validationSchema,   
	  });
       console.log(values);
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
			{
				FavoriteItemsCategoryDatas.map((categoryName,index)=>(
					<div key={index}>
					<input 
					    type="checkbox"
					    value={categoryName}
					    name="category"
					    onChange={handleChange}
					/>
                    <span>{categoryName} ({index})</span>
					</div>
				))
			}
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
		   <div className={style.sortWrapper}>
		   <button className={style.sortAZ}>
		            <span className={style.line}><ArrowDown/></span>
			      <div className={style.az}>
				   <span>A</span> 
		           <span>Z</span> 
				 </div>
			</button>
		    <button className={style.sortZA}>
		            <span className={style.line}><ArrowDown/></span>
			      <div className={style.za}>
				   <span>Z</span> 
		           <span>A</span> 
				 </div>
			</button>
		   </div>
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
		<button className={style.filterResultBtn}>Filter result</button>
	</div>
  )
}
