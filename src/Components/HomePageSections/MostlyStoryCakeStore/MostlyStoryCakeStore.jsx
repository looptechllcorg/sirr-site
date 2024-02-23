// imprt style css
import style from  "./MostlyStoryCakeStore.module.scss"
// import img
import storyImg from "../../../assets/images/cakeStore.png"
// import my write datas
import { MostlyStoryCakeStoreDatas} from "../../../MyWriteDatas/myDatas"
import TitleList from "../../TitleList/TitleList"
import Button from "../../Button/Button";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
import homeVideo from "../../../assets/video/video3Miami.mp4"
// import { useContext} from "react";
// import { GlobalContext } from "../../../Contexts/GlobalContext";
import videoStartImage from "../../../assets/images/videoStartImg.png"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";



export default function MostlyStoryCakeStore() {
//   const {showHiddenVideo, onClickShowHiddenVideo}=useContext(GlobalContext)

	
	
  return (
	<section id={style.MostlyStoryCakeStoreWrapper}>
		<div className="container">    
		
		   {/* {showHiddenVideo ?      */}
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
				
				{/* <Fancybox> */}
				{/* <button 
				//  onClick={onClickShowHiddenVideo}  
				className={style.playVideoBtn}>
					<img src={videoStartImage} alt="" />
				</button>    */}
				{/* <VideoPlayer data={homeVideo}/>  */}
				{/* </Fancybox> */}

				<button className={style.playVideoBtn} onClick={() => Fancybox.show([{ src: "#modal" }])}>
			     	<img src={videoStartImage} alt="" />
                   </button>

				   <div id="modal" className="fancybox-content">
				   <VideoPlayer data={homeVideo}/> 
                 </div>

			</div>
			 {/* : <VideoPlayer data={homeVideo}/>    */}
		</div>
	  
	</section>
  )
}



