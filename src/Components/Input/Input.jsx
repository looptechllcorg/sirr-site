// import style scss
import style from "./Input.module.scss"

export default function Input({type,placeholder}) {
  return (
		<input className={style.input} type={type}  placeholder={placeholder} />
      )
}
