// import style css
import { useTranslation } from "react-i18next";
import sirrSite from "../../Helpers/Sirr";
import style from "./PrCart.module.scss";
import { Link } from "react-router-dom";

export default function PrCart({ data }) {
    const {t} = useTranslation()
    return (
        <Link to={`/product/${data.slug}`} className={style.PrCartWrapper}>
            <div className={style.prImg}>
                <img src={`${sirrSite.baseUrlImage}${data.image}`} alt={data.title} />

                <div className={style.overlayImgTitle}>
                    <h6 className={style.OverlayPrTitle}>{data.title}</h6>    
                </div>

                <div className={style.overlayPriceUnit}>
                    <span className={style.prUnit}>
                        {data.quantity} {" "} 
                        {data.unit === "Piece" ? t("price") :
    data.unit === "Kilogram" ? t("kilogram") :
    data.unit === "Gram" ? t("gram") : null}
                    </span>
                    <hr className={style.priceUnitLine} />
                    <span className={style.prPrice}>{data.price} ₼</span>
                </div>
            </div>

            <h6 className={style.prTitle}>{data.title}</h6>   
        </Link>
    );
}
