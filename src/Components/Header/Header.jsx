// import style scss
import style from "./Header.module.scss"

import { NavLink } from "react-router-dom"
// import  nav logo
import navLogo from "../../assets/logo/whiteLogoSirr.svg"
import serachIcon from "../../assets/icons/searchIcon.svg"
import { Select } from '@chakra-ui/react'   
import { RxHamburgerMenu } from "react-icons/rx";  
import { IoMdClose } from "react-icons/io";
import { useState } from "react"
// import socila icons list 
import instagramIcon from "../../assets/icons/instagram.svg"
import facebookIcon from "../../assets/icons/facebook.svg"
import whatsappIcon from "../../assets/icons/whatsapp.svg"


export default function Header() {
	const [showHiddenMenu, setShowHiddenMenu]=useState(false)   
	const [navColorChange, setNavColorChange]=useState(false) 

	const FuncNavColorChange=()=>{
		if(window.scrollY > 80){
			setNavColorChange(true)
		}
		else{
			setNavColorChange(false)
		}
	}

	window.addEventListener("scroll", FuncNavColorChange)

	const FuncShowHidenMenu=()=>{
		setShowHiddenMenu(!showHiddenMenu)
	}
  return (
	<section 
	 className={`${style.header} ${navColorChange ? style.navBlack : ""}`} 
	>
		<div style={{padding: 0}} className="container">
			
			 <nav>
				<a href="/" className={style.navLogo}>
					<img src={navLogo} alt="burada nav logo var" />
				</a>
				<div className={`${style.navPages} ${showHiddenMenu ? style.hiddenMenu : ""}`}
>
					<div className={style.MobileLangSearch}>
						<div className={style.mobileLang}>
						<span className={style.langCategory}>AZ</span>
						<span  className={style.langCategory}>EN</span>
						<span  className={style.langCategory}>RU</span>
						</div>
					<span className={style.mobileSearchIcon}>
						<img src={serachIcon} alt="" />
					</span>
					</div>
					<ul className={style.navPageList}>
					<li>
						<NavLink>About us</NavLink>
					</li>
					<li>
						<NavLink>Product</NavLink>
					</li>
					<li>
						<NavLink>Media</NavLink>
					</li>
					<li>
						<NavLink>Contact</NavLink>
					</li>
					</ul>
					<div className={style.mobileSocial}>
					<a className={style.instagram} target="_blank" rel="noreferrer" href="https://www.instagram.com/">
			<img src={instagramIcon} alt="burada instagram iconu var" />
	            	</a>
		<a className={style.facebook} target="_blank" rel="noreferrer" href="https://www.facebook.com/">
			<img src={facebookIcon} alt="burada facebook iconu var" />
		        </a>
		<a className={style.whatsapp} target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
			<img src={whatsappIcon} alt="burada whatsapp iconu var" />
		      </a>
					</div>
				</div>
				<div className={style.SearchLang}>
					<img className={style.serachIcon} src={serachIcon} alt="burada axtaris iconu var" />
				<div className={style.lang}>
				<Select  
				//  w="60px" h="30" 
		   className={style.selectLang} 
			focusBorderColor="transparent"
			>
            <option value='az'>AZ</option>
            <option value='en'>EN</option>
            <option value='ru'>RU</option>
              </Select>
				</div>
				</div>
				<div onClick={()=>FuncShowHidenMenu()} className={style.HamburgerMenu}>
				
				{showHiddenMenu ? 
				<IoMdClose className={style.HamburgerMenuCloseIcon} />  : <RxHamburgerMenu className={style.HamburgerMenuCloseIcon}/>  }

				</div>
			 </nav>
		</div>
	  
	</section>
  )
}
