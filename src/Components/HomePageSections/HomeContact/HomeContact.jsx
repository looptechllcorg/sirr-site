// import style scss
import style from "./HomeContact.module.scss";
import Branches from "../../Branches/Branches";
import SocialInstagramIcon from "../../../assets/icons/SocialInstagramIcon";
import SocialFacebookIcon from "../../../assets/icons/SocialFacebookIcon";
import { useContext } from "react";   
import { ApiGlobalContext } from "../../../Contexts/ApiGlobalContext";

export default function HomeContact() {
    const { branchesDatas, socialDatas } = useContext(ApiGlobalContext);
    // console.log("home page contacts data", branchesDatas);
    // console.log("home page contacts data", socialDatas);

    return (
        <section id={style.HomeContactWrapper}>
            <div className="container">
                <div className={style.HomeContact}>
                    <div className={style.contactUsWrapper}>
                        <h3 className={style.NameContactUs}>Contact us</h3>
                        <div className={style.contactUs}>
                            <div className={style.Branches}>
                                {branchesDatas.map((branch) => (
                                    <Branches data={branch} key={branch.id} />
                                ))}
                            </div>

                            <div className={style.social}>
                                <a target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_instagram"]} className={style.instagram}>
                                    <SocialInstagramIcon /> sirr_cake_house
                                </a>
                                <a target="_blank" rel="noreferrer" href={socialDatas && socialDatas["site.social_facebook"]} className={style.facebook}>
                                    <SocialFacebookIcon /> sirr shirniyyat evi
                                </a>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
