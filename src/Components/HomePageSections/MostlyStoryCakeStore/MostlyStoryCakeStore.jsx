// imprt style css
import style from "./MostlyStoryCakeStore.module.scss";
import TitleList from "../../TitleList/TitleList";
// bagladim deyende acilsidir 
// import videoStartImage from "../../../assets/images/videoStartImg.png";
// import Fancybox from "../Fancybox";
import sirrSite from "../../../Helpers/Sirr";

export default function MostlyStoryCakeStore({ mostlyStoryCakeStoreVideoData, mostlyStoryCakeStoreData }) {

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
                        </div>
                    </div>
                      {/* bagladim deyende acilsidir  */}
                    {/* <Fancybox>
                        {mostlyStoryCakeStoreVideoData?.index_video?.map((video, i) => (
                            <a key={i} className={style.videoWrapper} href={video} data-fancybox="gallery">
                                <img className={style.playVideoBtn} src={videoStartImage} alt="" />
                            </a>
                        ))}
                    </Fancybox> */}
                </div>
            </div>
        </section>
    );
}
