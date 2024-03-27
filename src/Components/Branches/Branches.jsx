// import style scss
import style from "./Branches.module.scss";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import LocationIcon from "../../assets/icons/LocationIcon";

export default function Branches({ data, isActive, onClick }) {
    return (
        <div onClick={onClick} className={`${style.BranchesWrapper} ${isActive ? style.active : ""}`}>
            <hr className={style.branchesLine} />
            <div className={style.Branch}>
                <h5 className={style.branchesTitle}>{data.title}</h5>
                <div className={style.branchesLocationAdress}>
                    <LocationIcon className={style.locationIcon} />
                    <h6 className={style.Adress}>{data.address}</h6>
                </div>

                <div className={style.Phones}>
                    <PhoneIcon className={style.PhoneIcon} />
                    {data.phones.split("/").map((num, i) => (
                        <div className={style.phonesWrapper} key={i}>
                            <a href={`tel:${num}`} className={style.phones}>
                                {num}
                            </a>
                            <span className={style.line}>/</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
