// import style scss
import Branches from "../Branches/Branches"
import style from "./BranchesAndMap.module.scss"
// import my write data
import {BranchesDatas} from "../../MyWriteDatas/myDatas"

// import map datas
import { MapContainer,Marker,Popup,TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import location svg
import mapLocation from "../../assets/icons/mapLocationIcon.png";
import { useState } from "react";

const icon = L.icon({
	iconUrl:mapLocation,  
	iconSize:[58,58]  
 }) 





const position = [51.505, -0.09]

export default function BranchesAndMap() {
	const [activeBranch, setActiveBranch]=useState(BranchesDatas[0]);  

	const onClickBranch=()=>{
		setActiveBranch(!activeBranch)
	}

  return (
	<div className={style.BranchesAndMapWrapper}>
		<div className={style.contactBranchesWarapper}>
			<div className={style.ContactBranches}>
				{
					BranchesDatas.map(branch=>(
                      <Branches funk={onClickBranch} ac={activeBranch} key={branch.id} data={branch} />
					))
				}
			
			</div>
		</div>
		<div className={style.contactMapWrapper}>
		<MapContainer
		 style={{width:"100%", height:"100%"}}
		  center={position} 
		  zoom={13}
		   scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
    />
    <Marker position={position} icon={icon}>
      {/* <Popup>
      </Popup> */}
    </Marker>
  </MapContainer>

		</div>
	  
	</div>
  )
}
