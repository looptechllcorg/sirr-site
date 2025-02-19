// import style scss
import { useTranslation } from "react-i18next";
import sirrSite from "../../Helpers/Sirr";
import style from "./ProductPagePrCart.module.scss";
import { Link } from "react-router-dom";

export default function ProductPagePrCart({ data }) {
    const {t} = useTranslation();
    return (
        <Link to={`/product/${data.slug}`} className={style.prCartWrapper}>
            <img className={style.prImg} src={`${sirrSite.baseUrlImage}${data.image}`} alt={data.title} />
            <h5 className={style.prtitle}>{data.title}</h5>
            <div className={style.prUnitPrice}>
                <span className={style.unit}>
                    {data.quantity} {" "}
                    {data.unit === "Piece" ? t("price") :
    data.unit === "Kilogram" ? t("kilogram") :
    data.unit === "Gram" ? t("gram") : null}
                </span>
                <hr className={style.line} />
                <span className={style.price}>{data.price} ₼</span>    
            </div>
        </Link>
    );
}
