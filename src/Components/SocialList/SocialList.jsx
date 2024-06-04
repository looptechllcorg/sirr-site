// import style css
import style from "./SocialList.module.scss";
// import socila icons list
import SocialFacebookIcon from "../../assets/icons/SocialFacebookIcon";
import SocialWhatsappIcon from "../../assets/icons/SocialWhatsappIcon";
import SocialInstagramIcon from "../../assets/icons/SocialInstagramIcon";
import { useContext } from "react";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";

export default function SocialList() {
    const { socialDatas } = useContext(ApiGlobalContext);    

    return (
        <div className={style.SocialListWrapper}>
            <a className={style.instagramIcon} target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_instagram"]}>
                <SocialInstagramIcon />
            </a>
            <a className={style.facebookIcon} target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_facebook"]}>
                <SocialFacebookIcon />
            </a>
            <a className={style.WhatsappIcon} target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_whatsapp"]}>
                <SocialWhatsappIcon />
            </a>
        </div>
    );
}
