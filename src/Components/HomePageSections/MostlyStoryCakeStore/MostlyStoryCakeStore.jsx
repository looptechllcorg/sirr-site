// imprt style css
import style from  "./MostlyStoryCakeStore.module.scss"
// import img
import storyImg from "../../../assets/images/cakeStore.png"
// import my write datas
import { MostlyStoryCakeStoreDatas} from "../../../MyWriteDatas/myDatas"
import TitleList from "../../TitleList/TitleList"
import Button from "../../Button/Button";


export default function MostlyStoryCakeStore() {
  return (
	<section id={style.MostlyStoryCakeStoreWrapper}>
		<div className="container">
			<div className={style.Storewrapper}>
				<div className={style.storyImg}>
				<img src={storyImg} alt="" />
				</div>
				<div className={style.storeDescriptionWrapper}>
					<div className={style.storeDescription}>
                     <TitleList mainTitle={MostlyStoryCakeStoreDatas.mainTitle} detailedTitle={MostlyStoryCakeStoreDatas.detailedTitle} detailedTitleColor={"white"}/>
				     <p className={style.description}>{MostlyStoryCakeStoreDatas.description}</p>
                      <Button textColor={"white"} borderStyle={"1px solid white"} text={"Read more"}/>
				</div>   
				</div>
			</div>
		</div>
	  
	</section>
  )
}
