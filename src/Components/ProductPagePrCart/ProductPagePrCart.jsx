// import style scss
import style from "./ProductPagePrCart.module.scss"
import { Link } from "react-router-dom"




export default function ProductPagePrCart({data}) {
  return (
	<Link to={`/product/${data.slug}`} className={style.prCartWrapper}>
	  <img className={style.prImg} src={data.CoverImage} alt={data.title} />
	  <h5 className={style.prtitle}>{data.title}</h5>
	  	<div className={style.prUnitPrice}>
			<span className={style.unit}>{data.quantity} {data.unit}</span>
			<hr  className={style.line}/>
			<span className={style.price}>{data.price} ₼</span>
		</div>
	</Link>
  )
}
