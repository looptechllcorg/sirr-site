// import style css
import PrCart from "../../PrCart/PrCart"
import style from "./FavoriteItems.module.scss"
// import my write datas
import { FavoriteItemsDatas } from "../../../MyWriteDatas/myDatas"
import TitleList from "../../TitleList/TitleList"
import Button from "../../Button/Button"

export default function FavoriteItems() {
  return (
	<section id={style.FavoriteItems}>
		<div className="container">
			<div className={style.FavoriteItemsWrapper}>
				<TitleList mainTitle={"Categories"} detailedTitle={"Favorite items"} detailedTitleColor="black"/>
			
				<div className={style.categoriesTitleSlider}>
    
				</div>

          <div className={style.CategoryProduct}>
			{
				FavoriteItemsDatas.map(item=>(
                     <PrCart key={item.id} data={item}/>
				))
			}
			
		  </div>
				<Button text={"More than"}/>
			</div>
		</div>
	  
	</section>
  )
}
