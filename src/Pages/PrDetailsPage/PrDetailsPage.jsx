// import style scss
import { Link, useParams } from "react-router-dom";
import style from "./PrDetailsPage.module.scss";
import SocialList from "../../Components/SocialList/SocialList";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import TitleList from "../../Components/TitleList/TitleList";
import { useContext, useEffect, useState } from "react";
import SiteWay from "../../Components/SiteWay/SiteWay";
import sirrSite from "../../Helpers/Sirr";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";
import Loading from "../../Components/Loading/Loading";
import urls from "../../ApiValues/urls";
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon";
import { useTranslation } from "react-i18next";

export default function PrDetailsPage() {
    const { socialDatas, productsAndProductsDetailHeaderBgImg } = useContext(ApiGlobalContext);
    const { slug } = useParams();
    const [oneProductData, setOneProductData] = useState({});
    const [prDetailsLoading, setPrDetailsLoading] = useState(true);   
    const [similarProducts, setSimilarProducts] = useState([]);
    const {t} = useTranslation()
     

    const getOneproduct = async () => {
        try {
            const ResOneProduct = await sirrSite.api().get(`${sirrSite.baseUrl}/products/${slug}`);
            setOneProductData(ResOneProduct.data.data);
            setPrDetailsLoading(false);
        } catch (error) {
            console.log(error);
            setPrDetailsLoading(false);   
        }
    };

    const getsimilarProducts = async () => {
        try {
            console.log(urls.similarProducts(slug));
            const res = await sirrSite.api().get(urls.similarProducts(slug));
            setSimilarProducts(res.data.data);
        } catch (error) {   
            console.log(error);
        }
    };
    useEffect(() => {
        getOneproduct();
        getsimilarProducts();
    }, [slug]);
    //    console.log("one pro-- ",oneProductData);
    // console.log("simi", similarProducts);  
    
   

    return (
        <>
            {prDetailsLoading ? (
                <Loading />
            ) : (
                <section id={style.details}>
                    <SocialList />
                    <div style={{ paddingTop: 0 }} className="container">
                        <MainBgImage bgImg={productsAndProductsDetailHeaderBgImg.image} bgImgOnText={productsAndProductsDetailHeaderBgImg.title} />
                        <SiteWay data={[`${t("home-page")}`, `${t("product-details")}`]} />
                        <div className={style.prDetailsWrapper}> 
                            <h3 className={style.MobilePrDetailsTitle}>{oneProductData.title}</h3>
                            <span className={style.MobilePrDetailsPrice}>{oneProductData.price} ₼</span>
                            <div className={style.prDetailsImg}>
                                <img src={`${sirrSite.baseUrlImage}${oneProductData.image}`} alt={oneProductData.title} />
                            </div>
                            <div className={style.prDetailsInfo}>
                                <h3 className={style.prDetailsTitle}>{oneProductData.title}</h3>
                                <span className={style.prDetailsPrice}>{oneProductData.price} ₼</span>
                                <a target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_whatsapp"]} className={style.WebCallMe}>
                                        <SocialWhatsappIcon color="green" className={style.prDetailsWharsapp } /> {t("go-to-whatsapp")}
                                </a>
                                    <hr className={style.prDetailsLine} />
                                    <h5 className={style.PrIngredients}>{t("ingredients")}:</h5>
                                <p className={style.prDetailsDescription}>{oneProductData.description}</p>
                                <div className={style.PrDetailsSize}>
                                    {t("size")}:
                                    <span className={style.unitQuantity}> 
                                        {oneProductData.quantity} {oneProductData.unit}
                                    </span>
                                    </div>
                                      <a target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_whatsapp"]} className={style.MobileCallMe}>
                                        <SocialWhatsappIcon color="green" className={style.prDetailsWharsapp } />   {t("go-to-whatsapp")}
                                </a>  
                            </div>
                        </div>

                        <hr className={style.line} />
                        <TitleList textPosition={"center"} mainTitle={t("categories")} detailedTitle={t("similar-products")} />

                        <div className={style.seeAlsoPrWrapper}>
                            {similarProducts.map((pr) => (
                                <Link to={`/product/${pr.slug}`} key={pr.id} className={style.seeAlsoPr}>
                                    <img className={style.seeAlsoPrImg} src={`${sirrSite.baseUrlImage}${pr.image}`} alt="" />
                                    <h5 className={style.seeAlsoPrTitle}>{pr.title}</h5>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
