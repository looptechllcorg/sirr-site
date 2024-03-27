// import style scss
import { Link, useParams } from "react-router-dom";
import style from "./PrDetailsPage.module.scss";
// import my write datas
import { FavoriteItemsAndProductPageDatas } from "../../MyWriteDatas/myDatas";
import SocialList from "../../Components/SocialList/SocialList";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
// import image
import prDetailsBgImg from "../../assets/images/prDetailsBgImg.jpg";
import TitleList from "../../Components/TitleList/TitleList";
import { useContext, useEffect, useState } from "react";
import SiteWay from "../../Components/SiteWay/SiteWay";
import sirrSite from "../../Helpers/Sirr";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";

export default function PrDetailsPage() {
    const { socialDatas } = useContext(ApiGlobalContext);
    const { slug } = useParams();
    // const findProduct=FavoriteItemsAndProductPageDatas.find(product=> slug === product.slug)
    const [oneProductData, setOneProductData] = useState({});

        const getOneproduct = async () => {
            try {
                const ResOneProduct = await sirrSite.api().get(`${sirrSite.baseUrl}/products/${slug}`);
                setOneProductData(ResOneProduct.data.data);
            } catch (error) {
                console.log(error);
            }
        };
       

    useEffect(() => {
        getOneproduct();
    }, []);
    //    console.log("one pro-- ",oneProductData);

    const getRandomItems = (arr, count) => arr.sort(() => Math.random() - 0.5).slice(0, count);

    const [randomItems, setRandomItems] = useState(getRandomItems(FavoriteItemsAndProductPageDatas, 3));

    useEffect(() => {
        setRandomItems(getRandomItems(FavoriteItemsAndProductPageDatas, 4));
    }, [FavoriteItemsAndProductPageDatas]);

    return (
        <section id={style.details}>
            <SocialList />
            <div style={{ paddingTop: 0 }} className="container">
                <MainBgImage bgImg={prDetailsBgImg} bgImgOnText={"Product"} />
                <SiteWay data={["Home Page", "Products", "Product Details"]} />
                <div className={style.prDetailsWrapper}>
                    <h3 className={style.MobilePrDetailsTitle}>{oneProductData.title}</h3>
                    <span className={style.MobilePrDetailsPrice}>{oneProductData.price} ₼</span>
                    <div className={style.prDetailsImg}>
                        <img src={`${sirrSite.baseUrlImage}${oneProductData.image}`} alt={oneProductData.title} />
                    </div>
                    <div className={style.prDetailsInfo}>
                        <h3 className={style.prDetailsTitle}>{oneProductData.title}</h3>
                        <span className={style.prDetailsPrice}>{oneProductData.price} ₼</span>
                        <a target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_whatsapp"]} className={style.CallMe}>
                            Get to whatsapp
                        </a>
                        <hr className={style.prDetailsLine} />
                        <p className={style.prDetailsDescription}>{oneProductData.description}</p>
                        <div className={style.PrDetailsSize}>
                            Size:{" "}
                            <span className={style.unitQuantity}>
                                {oneProductData.quantity} {oneProductData.unit}
                            </span>
                        </div>
                    </div>
                </div>

                <hr className={style.line} />
                <TitleList textPosition={"center"} mainTitle={"Categories"} detailedTitle={"See also"} />

                <div className={style.seeAlsoPrWrapper}>
                    {randomItems.map((pr) => (
                        <Link to={`/product/${pr.slug}`} key={pr.id} className={style.seeAlsoPr}>
                            <img className={style.seeAlsoPrImg} src={pr.CoverImage} alt="" />
                            <h5 className={style.seeAlsoPrTitle}>{pr.title}</h5>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
