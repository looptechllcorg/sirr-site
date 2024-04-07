// import style scss
import { useNavigate } from "react-router-dom";
import style from "./SiteWay.module.scss"
import { useTranslation } from "react-i18next";

export default function SiteWay({data,paddingStyle}) {
	let navigate = useNavigate();
	const {t} = useTranslation()

	  const handleLinkClick = (page, e) => {
		e.preventDefault();
		if (page === `${t("home-page")}`) {  
		  navigate('/');
		} else {
		  navigate(`/${page}`);
		}
	  };

  return (
	<div style={{paddingBottom:paddingStyle}} className={style.SiteWayWrapper}>
	    {
			data.slice(0,(data.length - 1)).map((page, i)=>(
				<a href={`/${page}`} key={i} onClick={(e) => handleLinkClick(page, e)}>
					{t("home-page") }
				<hr className={style.line} />
			  </a> 
			))
		}
		<span className={style.activePage}>{data.slice(data.length-1)}</span>
	</div>
  )
}
