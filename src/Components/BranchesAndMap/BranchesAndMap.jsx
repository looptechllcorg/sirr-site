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
	iconSize:[35,45] ,
 }) 





 const defaultPosition = [40.440708, 49.769798];

export default function BranchesAndMap() {
	const [activeBranch, setActiveBranch]=useState(BranchesDatas[0]);  
	
	const [mapCenter, setMapCenter] = useState(defaultPosition);

	const onClickBranch = (branch) => {
	  setActiveBranch(branch);
	  setMapCenter([branch.coordinates[0], branch.coordinates[1]]);
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
					   acBran={activeBranch}
					   />
					))
				}
			
			</div>
		</div>
		<div className={style.contactMapWrapper}>
		<MapContainer
		 style={{width:"100%", height:"100%", objectFit:"cover"}}
		 center={mapCenter}
		 zoom={11}
		 scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  
    />
    <Marker position={mapCenter}  icon={icon}>
     
    </Marker>
  </MapContainer>

		</div>
	  
	</div>
  )
}
