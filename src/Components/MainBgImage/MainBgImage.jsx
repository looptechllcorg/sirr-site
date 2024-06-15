// import style scss
import sirrSite from "../../Helpers/Sirr";
import style from "./MainBgImage.module.scss";

export default function MainBgImage({ bgImg, bgImgOnText, bgImgHeight }) {
    return (
        <div style={{ backgroundImage: `url(${sirrSite.baseUrlImage}${bgImg})`, height: bgImgHeight }} className={style.MainBgImageWarapper}>
            <div className={style.overlay}>
                {/* <h3 className={style.bgOnTitle}>{bgImgOnText}</h3> */}
            </div>
        </div>
    );
}  
