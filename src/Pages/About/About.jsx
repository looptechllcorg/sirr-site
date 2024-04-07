// import style scss
import SocialList from "../../Components/SocialList/SocialList";
import style from "./About.module.scss";
import TitleList from "../../Components/TitleList/TitleList";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import TextAndImgSideBySide from "../../Components/TextAndImgSideBySide/TextAndImgSideBySide";

import { useEffect, useState } from "react";
import SiteWay from "../../Components/SiteWay/SiteWay";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import Loading from "../../Components/Loading/Loading";
// bagladim deyende acilsidir 
// import Fancybox from "../../Components/HomePageSections/Fancybox";
// import videoStartImage from "../../assets/images/videoStartImg.png";




export default function About() {
    const [aboutDatas, setAboutDatas] = useState([]);
    const [aboutFeatures, setAboutFeatures] = useState([]);
    const [aboutLoading, setAboutLoading] = useState(true);

    const getAboutDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.about);
            setAboutDatas(res.data.data);
            setAboutLoading(false);
        } catch (error) {
            console.log(error);
            setAboutLoading(false);
        }
    };

    const getAboutFeaturesDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.aboutFeatures);
            setAboutFeatures(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAboutDatas();
        getAboutFeaturesDatas();
    }, []);


    return aboutLoading ? (
        <Loading />
    ) : (
        <section id={style.about}>
            <SocialList />
            <div style={{ paddingTop: 0 }} className="container">
                <MainBgImage bgImg={aboutDatas["about-header"]?.image} bgImgOnText={aboutDatas["about-header"]?.title} />

                <div className={style.HouseHistory}>
                    <SiteWay data={["Home Page", "About us"]} />
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
