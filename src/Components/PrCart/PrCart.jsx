// import style css
import style from "./PrCart.module.scss"
import img from "../../assets/images/img2.png"


export default function PrCart({data}) {
  return (
	<div className={style.PrCartWrapper}>
		<div className={style.prImg}>
		<img src={data.image} alt={data.title} />
		
		<div className={style.overlayImgTitle}>
			<h6 className={style.OverlayPrTitle}>{data.title}</h6>
		</div>
		
	  <div className={style.overlayPriceUnit}>
		<span className={style.prUnit}>1 {data.unit}</span>
		<hr className={style.priceUnitLine}/>
		<span className={style.prPrice}>{data.price} ₼</span>
	  </div>
		</div>
		
		<h6 className={style.prTitle}>{data.title}</h6>
	</div>
  )
}
