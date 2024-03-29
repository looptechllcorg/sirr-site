// import style scss
import style from "./ContactFormGroup.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
// import useFormik
import { useFormik } from "formik";
// import yup
import * as Yup from "yup";
// import sweetalert2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import sirrSite from "../../Helpers/Sirr";
import urls from "../../ApiValues/urls";

export default function ContactFormGroup() {
    const validationSchema = Yup.object({
        firstname: Yup.string().required("adinizi daxil edin"),
        lastname: Yup.string().required("soyadiniz daxil edin"),
        email: Yup.string().email("email duzgun yazin").required("emailnizi daxil edin"),
        number: Yup.string().required("nomrenizi daxil edin"),
        message: Yup.string().required("mesajiniz daxil edin"),
    });

    const { handleChange, values, handleSubmit, errors, resetForm } = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            number: "",
            message: "",
        },
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values) => {
            try {
                await sirrSite.api().post(urls.postContactMail, JSON.stringify(values));
                const MySwal = withReactContent(Swal);
                MySwal.fire({
                    title: <strong>gonderdim haa </strong>,
                    html: <i>gonderildi</i>,
                    icon: "success",
                });
            } catch (error) {
                console.log(error);
                alert("error var !!!");
            }
            resetForm();
        },
        validationSchema,
    });

    return (
        <div className={style.formWrapper}>
            <h3 className={style.formTitle}>Enter the information and we will contact you</h3>
            <p className={style.formShortInfo}>It is a long established fact that a reader will be distracted by the readable</p>

            <form className={style.formGroup} onSubmit={handleSubmit}>
                <div className={style.inputList}>
                    <div>
                        <Input inputError={errors.firstname} inpName={"firstname"} InpValue={values.firstname} InpOnChange={handleChange} type={"text"} placeholder={"Your Name"} />
                        <Input inputError={errors.email} inpName={"email"} InpValue={values.email} InpOnChange={handleChange} type={"email"} placeholder={"Your Email"} />
                    </div>
                    <div>
                        <Input inputError={errors.lastname} inpName={"lastname"} InpValue={values.lastname} InpOnChange={handleChange} type={"text"} placeholder={"Your Surname"} />
                        <Input inputError={errors.number} inpName={"number"} InpValue={values.number} InpOnChange={handleChange} type={"number"} placeholder={"Phone Number"} />
                    </div>
                </div>
                <textarea value={values.message} name="message" onChange={handleChange} id="" rows="4" placeholder="Message"></textarea>
                <div className={style.errorMessage}>{errors.message ? errors.message : null}</div>

                <Button btnType={"submit"} text={"Submit"} />
            </form>
        </div>
    );
}
