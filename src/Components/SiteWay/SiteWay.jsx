// import style scss
import { useNavigate } from "react-router-dom";
import style from "./SiteWay.module.scss"

export default function SiteWay({data,paddingStyle}) {
	let navigate=useNavigate();

	  const handleLinkClick = (page, e) => {
		e.preventDefault();
		if (page === "Home Page") {
		  navigate('/');
		} else {
		  navigate(`/${page}`);
		}
	  };

  return (
	<div style={{paddingBottom:paddingStyle}} className={style.SiteWayWrapper}>
	    {
			data.slice(0,(data.length - 1)).map((page, i)=>(
				<a href={`/${page}`} key={i}onClick={(e) => handleLinkClick(page, e)}>
				{page} 
				<hr className={style.line} />
			  </a> 
			))
		}
		<span className={style.activePage}>{data.slice(data.length-1)}</span>
	</div>
  )
}
