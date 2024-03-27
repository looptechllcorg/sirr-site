// imprt style css
import style from "./MostlyStoryCakeStore.module.scss";
import TitleList from "../../TitleList/TitleList";
import Button from "../../Button/Button";
import videoStartImage from "../../../assets/images/videoStartImg.png";
import Fancybox from "../Fancybox";
import { useEffect, useState } from "react";
import sirrSite from "../../../Helpers/Sirr";
import urls from "../../../ApiValues/urls";

export default function MostlyStoryCakeStore() {
    const [mostlyStoryCakeStoreVideoData, setMostlyStoryCakeStoreVideoData] = useState();
    const [mostlyStoryCakeStoreData, setMostlyStoryCakeStoreData] = useState({});

    const getMostlyStoryCakeStoreVideo = async () => {
        try {
            const res = await sirrSite.api().get(urls.homeVideoData);
            setMostlyStoryCakeStoreVideoData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getMostlyStoryCakeStoreDatas = async () => {
        try {
            const res = await sirrSite.api().get(urls.MostlyStoryCakeStore);
            setMostlyStoryCakeStoreData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMostlyStoryCakeStoreVideo();
        getMostlyStoryCakeStoreDatas();
    }, []);

    return (
        <section id={style.MostlyStoryCakeStoreWrapper}>
            <div className="container">
                <div className={style.Storewrapper}>
                    <div className={style.storyImg}>
                        <img src={`${sirrSite.baseUrlImage}${mostlyStoryCakeStoreData.image}`} />
                    </div>

                    <div className={style.storeDescriptionWrapper}>
                        <div className={style.storeDescription}>
                            <TitleList textPosition={"start"} mainTitle={mostlyStoryCakeStoreData.subtitle} detailedTitle={mostlyStoryCakeStoreData.title} detailedTitleColor={"white"} />
                            <p className={style.description}>{mostlyStoryCakeStoreData.body}</p>
                            <Button textColor={"white"} borderStyle={"1px solid white"} text={"Read more"} />
                        </div>
                    </div>

                    <Fancybox>
                        {mostlyStoryCakeStoreVideoData?.index_video?.map((video, i) => (
                            <a key={i} className={style.videoWrapper} href={video} data-fancybox="gallery">
                                <img className={style.playVideoBtn} src={videoStartImage} alt="" />
                            </a>
                        ))}
                    </Fancybox>
                </div>
            </div>
        </section>
    );
}
