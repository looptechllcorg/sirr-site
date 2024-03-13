// import style scss
import Branches from "../Branches/Branches"
import style from "./BranchesAndMap.module.scss"
// import my write data
import { BranchesDatas } from "../../MyWriteDatas/myDatas"

// import map datas
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import location svg
import mapLocation from "../../assets/icons/mapLocationIcon.png";
import { useRef, useState } from "react";

const icon = L.icon({
	iconUrl: mapLocation,
	iconSize: [35, 45],
})


const defaultPosition = [40.440708, 49.769798];

export default function BranchesAndMap() {
	const [activeBranch, setActiveBranch] = useState(BranchesDatas[0]);

	const [mapCenter, setMapCenter] = useState(defaultPosition);
	const [map, setMap] = useState(null)

	const onClickBranch = (branch) => {
		setActiveBranch(branch);
		setMapCenter([branch.coordinates[0], branch.coordinates[1]]);
		map.setView([branch.coordinates[0], branch.coordinates[1]], map.getZoom(), {
			animate: true,
		})
	};

	return (
		<div className={style.BranchesAndMapWrapper}>
			<div className={style.contactBranchesWarapper}>
				<div className={style.ContactBranches}>
					{
						BranchesDatas.map(branch => (
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
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
					center={mapCenter}
					zoom={16}
					ref={setMap}
					scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
					/>
					<Marker position={mapCenter} icon={icon}>

					</Marker>
				</MapContainer>

			</div>

		</div>
	)
}
