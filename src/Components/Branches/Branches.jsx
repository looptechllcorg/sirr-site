// import style scss
import style from "./Branches.module.scss"
import LocationIcon from "../../assets/icons/locationIcon.svg"
import PhoneIcon from "../../assets/icons/phoneIcon.svg"


export default function Branches() {
  return (
	<div className={style.BranchesWrapper}>
	     <hr className={style.branchesLine} />
		 <div className={style.Branch}>
	         <h5 className={style.branchesTitle}>Office at Narimanov</h5>   
				<div className={style.branchesLocationAdress}>
					<img src={LocationIcon} alt="burda location iconu var" />
			    	<h6 className={style.Adress}>Heydar Aliyev Avenue 68 </h6>
				</div>
				
				<div className={style.Phones}>
				<img className={style.PhoneIcon} src={PhoneIcon} alt="burada phone iconu var" />
				<a   className={style.phone}>070 266 16 26</a> /
				<a  className={style.phone}>012 566 16 20</a> /
				<a  className={style.phone}>012 566 16 20</a>/
				<a  className={style.phone}>012 566 16 20</a>
				</div>
			</div>
	</div>
  )
}
