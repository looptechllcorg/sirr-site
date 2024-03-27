// import style scss
import style from "./Loading.module.scss";
// import loading gift
import loadingGift from "../../assets/images/sirrSiteLoading.gif";

export default function Loading() {
    return (
        <div className={style.WrapperLoading}>
            <img src={loadingGift} alt="" />
        </div>
    );
}
