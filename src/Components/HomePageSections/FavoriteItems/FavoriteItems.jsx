// import style css
import style from "./FavoriteItems.module.scss";

import PrCart from "../../PrCart/PrCart";
import TitleList from "../../TitleList/TitleList";
import Button from "../../Button/Button";
import FavoriteCategories from "../../FavoritCategories/FavoritCategories";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function FavoriteItems({ favoriteItemsDatas, setFavoriteItemsDatas }) {
    const {t} = useTranslation()
    return (    
        <section id={style.FavoriteItems}>
            <div className="container">
                <div className={style.FavoriteItemsWrapper}>
                    <TitleList mainTitle={t("categories")} detailedTitle={t("favorite-products")} detailedTitleColor="black" textPosition={"center"} />

                    <div className={style.categoriesTitleSlider}>
                        <FavoriteCategories setFavoriteItemsDatas={setFavoriteItemsDatas} />
                    </div>

                
                    {
                        favoriteItemsDatas.length == 0 ? <div className={style.emptyCategory}>{ t("empty-product") }</div>
                            :
                            <div className={style.CategoryProduct}>
                                {favoriteItemsDatas?.map((item) => (
                                    <PrCart key={item.id} data={item} />
                                ))}
                                 </div>
                    
                        }
               

                    {
                        favoriteItemsDatas.length == 0 ? "" : 
                              <Link to="/products">
                        <Button text={t("more-than")} />
                    </Link>
                   } 
                </div>
            </div>
        </section>
    );
}
