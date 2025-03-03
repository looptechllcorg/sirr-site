// import style scss
import style from "./Contact.module.scss";
import MainBgImage from "../../Components/MainBgImage/MainBgImage";
import SocialList from "../../Components/SocialList/SocialList";
import TextAndImgSideBySide from "../../Components/TextAndImgSideBySide/TextAndImgSideBySide";
import ContactFormGroup from "../../Components/ContactFormGroup/ContactFormGroup";
import BranchesAndMap from "../../Components/BranchesAndMap/BranchesAndMap";
import SiteWay from "../../Components/SiteWay/SiteWay";
import { useContext, useEffect, useState } from "react";
import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";
import Loading from "../../Components/Loading/Loading";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../Contexts/LanguageContext";

export default function Contact() {
    const [getContactDatas, setGetContactDatas] = useState({});
    const [contactLoading, setContactLoading] = useState(true);
    const {t} = useTranslation();
    const {siteLang} = useContext(LanguageContext)
     
    const getContactDatasFunc = async () => { 
        try {
            const res = await sirrSite.api().get(urls.getContactDatas(siteLang));
            setGetContactDatas(res.data.data);
             await new Promise((resolve) => setTimeout(resolve, 1830));
            setContactLoading(false);
        } catch (error) {
            console.log(error);
            setContactLoading(false);  
        }
    };

    useEffect(() => {   
        getContactDatasFunc();
    }, [siteLang]);
// console.log("cont", getContactDatas);
    return (
        <>
            {contactLoading ? (
                <Loading />   
            ) : (
                <section id={style.contact}>
                    <SocialList />
                        <MainBgImage bgImg={getContactDatas["contact-header"]?.image} bgImgOnText={getContactDatas["contact-header"]?.title} />
                           <div style={{ paddingTop: 0 }} className="container">
                            <SiteWay data={[`${t("home-page")}`, `${t("contact-us")}`]} paddingStyle={0} />
                        {getContactDatas["contact-main"] && <TextAndImgSideBySide bgColor={"transparent"} branchesInfoDatas={getContactDatas["contact-main"]} branchesImagesDatas={JSON.parse(getContactDatas["contact-main"]["gallery"])} />}

                        <ContactFormGroup />  

                        <BranchesAndMap />  
                    </div>
                </section>
            )}
        </>
    );
}
