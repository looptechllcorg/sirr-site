// import style scss
import style from "./TitleList.module.scss"


export default function TitleList({mainTitle,detailedTitle,detailedTitleColor,textStart}) {
  return (
	<div style={{textAlign:textStart}}  className={style.TitleListWrapper}>
		<h5 className={style.mainTitle}>{mainTitle}</h5>
		<h3 style={{color:detailedTitleColor}} className={style.detailedTitle}>{detailedTitle}</h3>  
	  
	</div>
  )
}
