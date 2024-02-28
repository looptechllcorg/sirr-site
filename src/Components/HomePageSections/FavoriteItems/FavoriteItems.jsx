// import style css
import PrCart from "../../PrCart/PrCart"
import style from "./FavoriteItems.module.scss"
// import my write datas
import { FavoriteItemsDatas } from "../../../MyWriteDatas/myDatas"
import TitleList from "../../TitleList/TitleList"
import Button from "../../Button/Button"
import FavoriteCategories from "../../FavoritCategories/FavoritCategories"
// import my write datas
import { FavoriteItemsCategoryDatas } from "../../../MyWriteDatas/myDatas"

export default function FavoriteItems() {
  return (
	<section id={style.FavoriteItems}>
		<div className="container">
			<div className={style.FavoriteItemsWrapper}>
				<TitleList mainTitle={"Categories"} detailedTitle={"Favorite items"} detailedTitleColor="black" textPosition={"center"}/>
			   
				<div className={style.categoriesTitleSlider}>
                  <FavoriteCategories categories={FavoriteItemsCategoryDatas}/>
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
