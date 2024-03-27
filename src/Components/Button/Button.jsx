// import style scss
import style from "./Button.module.scss";

export default function Button({ text, textColor, borderStyle, btnType }) {
    return (
        <button type={btnType} style={{ color: textColor, border: borderStyle }} className={style.button}>
            {text}
        </button>
    );
}
