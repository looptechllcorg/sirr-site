// import style scss
import style from "./Button.module.scss"


export default function Button({text,textColor, borderStyle}) {
  return (
	<div style={{color:textColor, border:borderStyle}} className={style.button}>
	  {text}
	</div>
  )
}
