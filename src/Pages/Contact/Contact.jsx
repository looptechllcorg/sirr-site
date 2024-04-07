// import style scss
import style from "./Contact.module.scss";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import SocialList from "../../Components/SocialList/SocialList";
import TextAndImgSideBySide from "../../Components/TextAndImgSideBySide/TextAndImgSideBySide";
import ContactFormGroup from "../../Components/ContactFormGroup/ContactFormGroup";
import BranchesAndMap from "../../Components/BranchesAndMap/BranchesAndMap";
import SiteWay from "../../Components/SiteWay/SiteWay";
import { useEffect, useState } from "react";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import Loading from "../../Components/Loading/Loading";

export default function Contact() {
    const [getContactDatas, setGetContactDatas] = useState({});
    const [contactLoading, setContactLoading] = useState(true);

    const getContactDatasFunc = async () => {
        try {
            const res = await sirrSite.api().get(urls.getContactDatas);
            setGetContactDatas(res.data.data);
            setContactLoading(false);
        } catch (error) {
            console.log(error);
            setContactLoading(false);
        }
    };

    useEffect(() => {
        getContactDatasFunc();
    }, []);
console.log("cont", getContactDatas);
    return (
        <>
            {contactLoading ? (
                <Loading />
            ) : (
                <section id={style.contact}>
                    <SocialList />
                    <div style={{ paddingTop: 0 }} className="container">
                        <MainBgImage bgImg={getContactDatas["contact-header"]?.image} bgImgOnText={getContactDatas["contact-header"]?.title} />
                        <SiteWay data={["Home Page", "Contact us"]} paddingStyle={0} />
                        {getContactDatas["contact-main"] && <TextAndImgSideBySide bgColor={"transparent"} branchesInfoDatas={getContactDatas["contact-main"]} branchesImagesDatas={JSON.parse(getContactDatas["contact-main"]["gallery"])} />}

                        <ContactFormGroup />

                        <BranchesAndMap />  
                    </div>
                </section>
            )}
        </>
    );
}
