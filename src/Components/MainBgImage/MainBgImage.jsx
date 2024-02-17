// import style scss
import style from "./MainBgImage.module.scss"

export default function MainBgImage({bgImg, bgImgOnText}) {
  return (
		<div style={{backgroundImage: `url(${bgImg})`}} className={style.MainBgImageWarapper}>
		  <div className={style.overlay}>
		  <h3 className={style.bgOnTitle}>{bgImgOnText}</h3>
		  </div>
		  </div>   
  )   
}
