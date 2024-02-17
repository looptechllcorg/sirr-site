// import style css
import style from "./PrCart.module.scss"
import { Link} from "react-router-dom"


export default function PrCart({data}) {

  return (
	<Link to={`/product/${data.slug}`} className={style.PrCartWrapper}>
		<div className={style.prImg}>
		<img src={data.CoverImage} alt={data.title} />
		
		<div className={style.overlayImgTitle}>
			<h6 className={style.OverlayPrTitle}>{data.title}</h6>
		</div>
		
	  <div className={style.overlayPriceUnit}>
		<span className={style.prUnit}>{data.quantity} {data.unit}</span>
		<hr className={style.priceUnitLine}/>
		<span className={style.prPrice}>{data.price} ₼</span>
	  </div>
		</div>
		
		<h6 className={style.prTitle}>{data.title}</h6>
	</Link>
  )
}
