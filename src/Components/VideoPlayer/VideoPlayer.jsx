// import style scss
import { GlobalContext } from "../../Contexts/GlobalContext"
import style from "./VideoPlayer.module.scss"
import { useContext } from "react"

export default function VideoPlayer({data}) {
	const {onClickShowHiddenVideo}=useContext(GlobalContext)
  return (
	           <>
				<div className={style.VideoPlayerWrapper}>
				 <button onClick={onClickShowHiddenVideo} className={style.close}>X</button>
			      <iframe   src={data}> 	</iframe> 
			    </div>
	          </>
  )
}
