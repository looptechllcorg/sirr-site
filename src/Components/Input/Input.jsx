// import style scss
import style from "./Input.module.scss"

export default function Input({type,placeholder,InpValue,inpName,InpOnChange,inputError}) {
  return (
    <>
		<input value={InpValue} name={inpName} onChange={InpOnChange} className={style.input} type={type}  placeholder={placeholder} />
     <div className={style.InpError}>{inputError? inputError : null}</div>
    </>
      )   
}
