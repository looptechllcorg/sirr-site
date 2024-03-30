// import style scss
import "./Loading.css";
// import loading gift
import sirrLogo from "../../assets/logo/whiteLogoSirr.svg";

export default function Loading() {
    return (
        <div className="loader">
            <img className="loadingImg" src={sirrLogo} alt="" />
            <div className="loader__element"> </div>
        </div>
    );
}
