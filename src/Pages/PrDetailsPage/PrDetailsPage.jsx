// import style scss
import { Link, useParams } from "react-router-dom"
import style from "./PrDetailsPage.module.scss"
// import my write datas
import { FavoriteItemsDatas } from "../../MyWriteDatas/myDatas";
import SocialList from "../../Components/SocialList/SocialList";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
// import image
import prDetailsBgImg from "../../assets/images/prDetailsBgImg.jpg"
import TitleList from "../../Components/TitleList/TitleList";
import { useEffect, useState } from "react";


export default function PrDetailsPage() {
	const {slug}=useParams()
	const findProduct=FavoriteItemsDatas.find(product=> slug === product.slug)

	const getRandomItems = (arr, count) =>
    arr.sort(() => Math.random() - 0.5).slice(0, count);

  const [randomItems, setRandomItems] = useState(getRandomItems(FavoriteItemsDatas, 3));

  useEffect(() => {
    setRandomItems(getRandomItems(FavoriteItemsDatas, 4));
  }, [FavoriteItemsDatas]);



   

  return (
	<section id={style.details}>
		<SocialList/>
	<div style={{paddingTop:0}}  className="container"> 

	 <MainBgImage bgImg={prDetailsBgImg}   bgImgOnText={"product Details"}/>
	
	  <div className={style.prDetailsWrapper}>
		     <h3 className={style.MobilePrDetailsTitle}>{findProduct.title}</h3>
			<span className={style.MobilePrDetailsPrice}>{findProduct.price} ₼</span>
		<div className={style.prDetailsImg}>
           <img  src={findProduct.CoverImage} alt={findProduct.title} />
		 </div>
        <div className={style.prDetailsInfo}>
			<h3 className={style.prDetailsTitle}>{findProduct.title}</h3>
			<span className={style.prDetailsPrice}>{findProduct.price} ₼</span>
			<button className={style.CallMe}>Call me</button>
			<hr className={style.prDetailsLine}/>
			<p className={style.prDetailsDescription}>{findProduct.description}</p>
			<div className={style.PrDetailsSize}>Size: <span className={style.unitQuantity}>{findProduct.quantity} {findProduct.unit}</span></div>
		</div>
	  </div>

	  <hr className={style.line} />
	   <TitleList textPosition={"center"}  mainTitle={"Categories"} detailedTitle={"See also"}/>

	   <div className={style.seeAlsoPrWrapper}>
		{
			randomItems.map(pr=>(
				<Link to={`/product/${pr.slug}`} key={pr.id} className={style.seeAlsoPr}>
					<img className={style.seeAlsoPrImg} src={pr.CoverImage} alt="" />
					<h5 className={style.seeAlsoPrTitle}>{pr.title}</h5>
				</Link>
			))
		}
	   </div>
	</div>
	</section>
  )
}
