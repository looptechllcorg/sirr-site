// import style scss
import style from "./VideoPlayer.module.scss"
import myVideo from "../../assets/video/video3Miami.mp4"
import { useState } from "react"

export default function VideoPlayer() {
	const [hiddenVideo, setHiddenVideo]=useState(true)
	const onClickHiddenVideo=()=>{
		setHiddenVideo(!hiddenVideo)
	}
  return (
	<>
	{
       hiddenVideo && 
	   <div className={style.VideoPlayerWrapper}>
		<button onClick={()=>onClickHiddenVideo()} className={style.close}>close</button>
	<iframe   src={myVideo}> 	</iframe>
	</div>
	}
	
	</>
  )
}
