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
import { useTranslation } from "react-i18next";

export default function ContactFormGroup() {
    const {t} = useTranslation()
    const validationSchema = Yup.object({
        firstname: Yup.string().required(`${t("firstName-error")}`),
        lastname: Yup.string().required(`${t("lastName-error")}`),
        email: Yup.string().email("email duzgun yazin").required(`${t("email-error")}`),
        number: Yup.string().required(`${t("phone-error")}`),
        message: Yup.string().required(`${t("textarea-error")}`),
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
                    title: <strong>{t("swalAlertTitle")}</strong>,
                    html: <i>{t("swalAlertHTML") }</i>,
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
            <h3 className={style.formTitle}>{t("form-text") }</h3>
            <p className={style.formShortInfo}>{ t("empty-cell")}</p>

            <form className={style.formGroup} onSubmit={handleSubmit}>
                <div className={style.inputList}>
                    <div>
  <Input inputError={errors.firstname} inpName={"firstname"} InpValue={values.firstname} InpOnChange={handleChange} type={"text"} placeholder={t("firstName")} />
<Input inputError={errors.email} inpName={"email"} InpValue={values.email} InpOnChange={handleChange} type={"email"} placeholder={t("email")} />
                    </div>
                    <div>
                        <Input inputError={errors.lastname} inpName={"lastname"} InpValue={values.lastname} InpOnChange={handleChange} type={"text"} placeholder={t("lastName")} />
                        <Input inputError={errors.number} inpName={"number"} InpValue={values.number} InpOnChange={handleChange} type={"number"} placeholder={t("phone")} />
                    </div>
                </div>
                <textarea value={values.message} name="message" onChange={handleChange} id="" rows="4" placeholder={t("message")}></textarea>
                <div className={style.errorMessage}>{errors.message ? errors.message : null}</div>

                <Button btnType={"submit"} text={t("send")} />  
            </form>
        </div>
    );
}
