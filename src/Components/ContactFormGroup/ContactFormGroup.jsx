// import style scss
import Button from "../Button/Button"
import Input from "../Input/Input"
import style from "./ContactFormGroup.module.scss"

export default function ContactFormGroup() {
  return (
	<div className={style.formWrapper}>
		 <h3 className={style.formTitle}>Enter the information and we will contact you</h3>
		 <p className={style.formShortInfo}>It is a long established fact that a reader will be distracted by the readable</p>
		 <form className={style.formGroup} >

			<div className={style.inputList}>
				<div>
			<Input type={"text"} placeholder={"Your Name"}/>   
			<Input type={"text"} placeholder={"Your Surname"}/>
			  </div>
		      <div>
			<Input type={"tel"} placeholder={"Phone Number"}/>
			<Input type={"email"} placeholder={"Your Email"}/>
			</div>
			</div>
				<textarea name="" id="" rows="4" placeholder="Message">
						</textarea>
			   <Button btnType={"submit"} text={"Submit"}/>
		 </form>
	  
	</div>
  )
}
