// import style scss
import SocialList from "../../Components/SocialList/SocialList";
import style from "./About.module.scss";
import TitleList from "../../Components/TitleList/TitleList";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import TextAndImgSideBySide from "../../Components/TextAndImgSideBySide/TextAndImgSideBySide";

import { useContext, useEffect, useState } from "react";
import SiteWay from "../../Components/SiteWay/SiteWay";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import Loading from "../../Components/Loading/Loading";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../Contexts/LanguageContext";
// bagladim deyende acilsidir 
// import Fancybox from "../../Components/HomePageSections/Fancybox";
// import videoStartImage from "../../assets/images/videoStartImg.png";




export default function About() {
    const [aboutDatas, setAboutDatas] = useState([]);
    const [aboutFeatures, setAboutFeatures] = useState([]);
    const [aboutLoading, setAboutLoading] = useState(true);
    const { t } = useTranslation();
    const {siteLang} = useContext(LanguageContext);

    const loadImages = async (aboutDatas, aboutFeatures) => {
       const data = [...aboutFeatures, aboutDatas["about-header"].image, ...aboutDatas["branch_images"]]
        const imagePromises = [];
        data.forEach(key => {
            let imageSrc = key.image || key;
            let imageUrl = (`${sirrSite.baseUrlImage}${imageSrc}`)  
			const image = new Image();
			const promise = new Promise((resolve, reject) => {
				image.onload = () => resolve(imageUrl);
				image.onerror = () => reject(imageUrl);
			});
			image.src = imageUrl;
			imagePromises.push(promise);
		});
	
		await Promise.all(imagePromises)
			.then((data) => {
                console.log('loaded');
                // console.log("image promises loaded-- ", data);
			})
			.catch((err) => {
				console.log('Error -- ', err);
			});
    }
     
    const getAboutAllDatas = async () => {
        try {
            const resAboutDatas = await sirrSite.api().get(urls.about(siteLang));
            const resAboutFeatures = await sirrSite.api().get(urls.aboutFeatures(siteLang));
            setAboutFeatures(resAboutFeatures.data.data);
            setAboutDatas(resAboutDatas.data.data);

            await loadImages(resAboutDatas.data.data, resAboutFeatures.data.data);  
            setAboutLoading(false);

        } catch (error) {
            console.log(error);
            setAboutLoading(false);
        }
    };


    useEffect(() => {
        getAboutAllDatas();
    }, [siteLang]);



    // console.log("ab- ", aboutDatas);
    // console.log("abf-", aboutFeatures);   

    return aboutLoading ? (
        <Loading />
    ) : (
        <section id={style.about}>
            <SocialList />
        
                <MainBgImage bgImg={aboutDatas["about-header"]?.image} bgImgOnText={aboutDatas["about-header"]?.title} />
             <div style={{ paddingTop: 0 }} className="container">
                <div className={style.HouseHistory}>
                    <SiteWay data={[`${t("home-page")}`, `${t("about")}`]} />
                    <TitleList mainTitle={aboutDatas["about-main"]?.subtitle} detailedTitle={aboutDatas["about-main"]?.title} />
                        <p className={style.HouseHistoryDescription} dangerouslySetInnerHTML={{ __html: aboutDatas["about-main"]?.body }}></p>
                        
                </div>

                <div style={{ backgroundImage: `url(${sirrSite.baseUrlImage}${aboutDatas["about_video"]?.["site.about_video_bg"]})` }} className={style.videoBgImg}>
                    <div className={style.videoBgOverlay}></div>
                     {/* bagladim deyende acilsidir  */}
                    {/* <Fancybox>
                        <a className={style.videoWrapper} href={`${aboutDatas["about_video"]?.["site.about_video_url"]}`} data-fancybox="gallery">
                            <img className={style.playVideoBtn} src={videoStartImage} alt="" />
                        </a>
                    </Fancybox> */}
                </div>     

                <TextAndImgSideBySide branchesInfoDatas={aboutDatas["about-bottom"]} branchesImagesDatas={aboutDatas["branch_images"]} />

                <div className={style.OurInformation}>
                    {aboutFeatures.map((item) => (
                        <span className={style.infoWrapper} key={item.id}>
                            <img className={style.infoImg} src={`${sirrSite.baseUrlImage}${item.image}`} alt={item.title} />
                            <h6 className={style.infoTitle}>{item.title}</h6>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
