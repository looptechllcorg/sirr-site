// import style scss
import Input from "../Input/Input"
import style from "./ContactFormGroup.module.scss"

export default function ContactFormGroup() {
  return (
	<div className={style.formWrapper}>
		 <h3>Enter the information and we will contact you</h3>
		 <p>It is a long established fact that a reader will be distracted by the readable</p>
		 <form className={style.formGroup} >
			<Input type={"text"} placeholder={"Your Name"}/>
			<Input type={"text"} placeholder={"Your Surname"}/>
			<Input type={"tel"} placeholder={"Phone Number"}/>
			<Input type={"email"} placeholder={"Your Email"}/>


		 </form>
	  
	</div>
  )
}
