// import style css
import style from "./FavoriteItems.module.scss";

import PrCart from "../../PrCart/PrCart";
import TitleList from "../../TitleList/TitleList";
import Button from "../../Button/Button";
import FavoriteCategories from "../../FavoritCategories/FavoritCategories";
import { Link } from "react-router-dom";


export default function FavoriteItems({ favoriteItemsDatas, setFavoriteItemsDatas }) {
    return (    
        <section id={style.FavoriteItems}>
            <div className="container">
                <div className={style.FavoriteItemsWrapper}>
                    <TitleList mainTitle={"Categories"} detailedTitle={"Favorite items"} detailedTitleColor="black" textPosition={"center"} />

                    <div className={style.categoriesTitleSlider}>
                        <FavoriteCategories setFavoriteItemsDatas={setFavoriteItemsDatas} />
                    </div>

                    <div className={style.CategoryProduct}>
                        {favoriteItemsDatas?.map((item) => (  
                            <PrCart key={item.id} data={item} />
                        ))}
                    </div>

                    <Link to="/products">
                        <Button text={"More than"} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
