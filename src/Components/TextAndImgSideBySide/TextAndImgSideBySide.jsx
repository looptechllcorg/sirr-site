// import style scss
import Button from "../Button/Button"
import TitleList from "../TitleList/TitleList"
import style from "./TextAndImgSideBySide.module.scss"


export default function TextAndImgSideBySide({data,bgColor}) {
  return (
	<div className={style.TextAndImg}>
	<div style={{backgroundColor:bgColor}} className={style.TextWrapper}>
	     <TitleList textPosition={"start"} detailedTitle={data.detailedTitle} mainTitle={data.mainTitle}/>
		 <p  className={style.descrioption}>
	       {data.description}
		</p>
		<Button text={"View Catalogue"}/>
	</div>
	<img className={style.image} src={data.image} alt="" />   
</div>
  )
}
