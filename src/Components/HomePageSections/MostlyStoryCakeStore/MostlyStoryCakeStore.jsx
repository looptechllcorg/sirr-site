// imprt style css
import style from  "./MostlyStoryCakeStore.module.scss"
// import img
import storyImg from "../../../assets/images/cakeStore.png"
// import my write datas
import { MostlyStoryCakeStoreDatas} from "../../../MyWriteDatas/myDatas"
import TitleList from "../../TitleList/TitleList"
import Button from "../../Button/Button";
import videoStartImage from "../../../assets/images/videoStartImg.png"
import Fancybox from "../Fancybox";


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
                     <TitleList textPosition={"start"} mainTitle={MostlyStoryCakeStoreDatas.mainTitle} detailedTitle={MostlyStoryCakeStoreDatas.detailedTitle} detailedTitleColor={"white"}/>
				     <p className={style.description}>{MostlyStoryCakeStoreDatas.description}</p>
                      <Button textColor={"white"} borderStyle={"1px solid white"} text={"Read more"}/>
				</div>   
				</div>
				
			       
                <Fancybox>
				<a className={style.videoWrapper} href={`https://www.youtube.com/watch?v=Dmhws_sBEic&pp=ygUFbWlhbWk%3D`} 
                                          data-fancybox="gallery">
                 <img className={style.playVideoBtn} src={videoStartImage} alt="" />
                </a>
				 </Fancybox>
			</div>
		</div>
	  
	</section>
  )
}



