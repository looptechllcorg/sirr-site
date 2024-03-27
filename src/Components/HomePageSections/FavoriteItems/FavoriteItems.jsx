// import style css
import style from "./FavoriteItems.module.scss";

import PrCart from "../../PrCart/PrCart";
import TitleList from "../../TitleList/TitleList";
import Button from "../../Button/Button";
import FavoriteCategories from "../../FavoritCategories/FavoritCategories";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sirrSite from "../../../Helpers/Sirr";
import urls from "../../../ApiValues/urls";

export default function FavoriteItems() {
    const [FavoriteItemsDatas, setFavoriteItemsDatas] = useState([]);

    const getFavoriteItemsDatas = async () => {
        try {
            const ResFavoriteItem = await sirrSite.api().get(urls.FavoriteItems);
            setFavoriteItemsDatas(ResFavoriteItem.data.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFavoriteItemsDatas();
    }, []);
    //   console.log("getFav", FavoriteItemsDatas);
    return (
        <section id={style.FavoriteItems}>
            <div className="container">
                <div className={style.FavoriteItemsWrapper}>
                    <TitleList mainTitle={"Categories"} detailedTitle={"Favorite items"} detailedTitleColor="black" textPosition={"center"} />

                    <div className={style.categoriesTitleSlider}>
                        <FavoriteCategories setFavoriteItemsDatas={setFavoriteItemsDatas} />
                    </div>

                    <div className={style.CategoryProduct}>
                        {FavoriteItemsDatas.map((item) => (
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
