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





 const defaultPosition = [40.440708, 49.769798];

export default function BranchesAndMap() {
	const [activeBranch, setActiveBranch]=useState(BranchesDatas[0]);  

	// const onClickBranch=()=>{
	// 	setActiveBranch(!activeBranch)    
	// }
	const [mapCenter, setMapCenter] = useState(defaultPosition);

	const onClickBranch = (branch) => {
	  setActiveBranch(branch);
	  setMapCenter([branch.latitude, branch.longitude]);
	};

  return (
	<div className={style.BranchesAndMapWrapper}>
		<div className={style.contactBranchesWarapper}>
			<div className={style.ContactBranches}>
				{
					BranchesDatas.map(branch=>(
                      <Branches 
					   key={branch.id} 
					   data={branch} 
					   onClick={() => onClickBranch(branch)}
					   isActive={branch.id === activeBranch.id}
					   />
					))
				}
			
			</div>
		</div>
		<div className={style.contactMapWrapper}>
		<MapContainer
		 style={{width:"100%", height:"100%"}}
		 center={mapCenter}
		  zoom={11}
		   scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
    />
    <Marker position={mapCenter}  icon={icon}>
      {/* <Popup>
      </Popup> */}
    </Marker>
  </MapContainer>

		</div>
	  
	</div>
  )
}
