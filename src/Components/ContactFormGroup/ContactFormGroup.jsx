// import style scss
import Button from "../Button/Button"
import Input from "../Input/Input"
import style from "./ContactFormGroup.module.scss"
// import useFormik 
import { useFormik } from 'formik'
// import yup 
import * as Yup from 'yup';

export default function ContactFormGroup() {

	const validationSchema = Yup.object({
		name: Yup.string().required("adinizi daxil edin"),
		surname:Yup.string().required("soyadiniz daxil edin"),
		email: Yup.string().email("email duzgun yazin").required("emailnizi daxil edin"),
		phone: Yup.string().required("nomrenizi daxil edin"),
		message:Yup.string().required("mesajiniz daxil edin")
	});

	const {handleChange,values,handleSubmit,errors, resetForm} = useFormik({
		initialValues: {
		  name: '',
		  surname:"",
		  email: '',
		  phone: '',
          message: ""
		},
		onSubmit:async (values) => {
			console.log(values);
    //  try {    
	// 	await looptech.api().post(urls.contactPost, JSON.stringify(values));
	// 	   const MySwal= withReactContent(Swal);
	// 	   MySwal.fire({
	// 		title: <strong>{looptech.translate("swalAlertTitle")}</strong>,
	// 		html: <i>{looptech.translate("swalAlertHTML")}</i>,   
	// 		icon: 'success'
	// 	  });
	//  } catch (error) {     
	// 	console.log(error);   
	// 	alert("error var !!!")
	//  }  
		  resetForm(); 
		},
		validationSchema,   
	  });

  return (
	<div className={style.formWrapper}>
		 <h3 className={style.formTitle}>Enter the information and we will contact you</h3>
		 <p className={style.formShortInfo}>It is a long established fact that a reader will be distracted by the readable</p>
		 
		 <form className={style.formGroup}  onSubmit={handleSubmit}>

			<div className={style.inputList}>
				<div>
				<Input inputError={errors.name} inpName={"name"} InpValue={values.name} InpOnChange={handleChange} type={"text"} placeholder={"Your Name"}/>   
				<Input inputError={errors.email} inpName={"email"} InpValue={values.email} InpOnChange={handleChange} type={"email"} placeholder={"Your Email"}/>  
			  </div>
		      <div>
			  <Input inputError={errors.surname} inpName={"surname"} InpValue={values.surname} InpOnChange={handleChange} type={"text"} placeholder={"Your Surname"}/>
		      <Input inputError={errors.phone} inpName={"phone"} InpValue={values.phone} InpOnChange={handleChange} type={"number"} placeholder={"Phone Number"}/>
			</div>
			</div>
				<textarea value={values.message} name="message" onChange={handleChange} id="" rows="4" placeholder="Message">
						</textarea>
				<div className={style.errorMessage}>{errors.message ? errors.message : null}</div>

			   <Button btnType={"submit"} text={"Submit"}/>
		 </form>
	  
	</div>
  )
}
