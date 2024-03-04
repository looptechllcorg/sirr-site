// import style scss
import { useNavigate } from "react-router-dom";
import style from "./SiteWay.module.scss"

export default function SiteWay({data}) {
	let navigate=useNavigate()
  

	  const handleLinkClick = (page, e) => {
		e.preventDefault();
		if (page === "Home Page") {
		  navigate('/');
		} else if (page === "pr-details") {
			e.preventDefault();
		} else {
		  navigate(`/${page}`);
		}
	  };

  return (
	<div className={style.SiteWayWrapper}>
	    {
			data.map((page, i)=>(
				<a href={`/${page}`} key={i}onClick={(e) => handleLinkClick(page, e)}>
				{page} 
				<hr className={style.line} />
			  </a> 
			))
		}
	</div>
  )
}
