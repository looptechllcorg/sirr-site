// imprt style css
import style from  "./MostlyStoryCakeStore.module.scss"
// import img
import storyImg from "../../../assets/images/cakeStore.png"
// import my write datas
import { MostlyStoryCakeStoreDatas} from "../../../MyWriteDatas/myDatas"
import TitleList from "../../TitleList/TitleList"
import Button from "../../Button/Button";
import { useEffect, useState } from "react";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";


export default function MostlyStoryCakeStore() {
	const [showVideo, setShowVideo]=useState(true)


		const onClickShowHiddenVideo=()=>{
			setShowVideo(!showVideo)
		}

	
	
  return (
	<section id={style.MostlyStoryCakeStoreWrapper}>
		<div className="container">    
		
		   {showVideo ? null : <VideoPlayer/> }  
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
				<button  onClick={()=>onClickShowHiddenVideo()}  
				className={style.playVideo}>play</button>  
			</div>
		</div>
	  
	</section>
  )
}



