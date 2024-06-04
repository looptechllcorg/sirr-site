// import style scss
import Branches from "../Branches/Branches";
import style from "./BranchesAndMap.module.scss";


// import map datas
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import location svg
import mapLocation from "../../assets/icons/mapLocationIcon.png";
import { useContext, useState } from "react";
import { ApiGlobalContext } from "../../Contexts/ApiGlobalContext";
import { useTranslation } from "react-i18next";

const icon = L.icon({
    iconUrl: mapLocation,
    iconSize: [35, 45],     
});

const defaultPosition = [40.398766, 49.875762];

export default function BranchesAndMap() {
    const {t} = useTranslation()
    const {  branchesDatas  } = useContext(ApiGlobalContext);
    const [activeBranchIndex, setActiveBranchIndex] = useState(0);

    const [mapCenter, setMapCenter] = useState(defaultPosition);
    const [map, setMap] = useState(null);

    const onClickBranch = (branch, index) => {
        setActiveBranchIndex(index);
        setMapCenter([branch.coordinates[0], branch.coordinates[1]]);
        map.setView([branch.coordinates[0], branch.coordinates[1]], map.getZoom(), {
            animate: true,
        });   
    };

    console.log("br-", branchesDatas);  
   
    return (
        <div className={style.BranchesAndMapWrapper}>
            <div className={style.contactBranchesWarapper}>
                <h2 className={style.headContactUs}>{ t("contact-us")}</h2>
                <div className={style.ContactBranches}>
                    {branchesDatas.map((branch, index) => (
                        <Branches  key={branch.id} data={branch}
                             onClick={() => {   onClickBranch(branch, index);    }} 
                    isActive={index === activeBranchIndex} />
                    ))}
                </div>
            </div>
            <div id={style.map} className={style.contactMapWrapper}>
                <MapContainer style={{ width: "100%", height: "100%", objectFit: "cover" }} center={mapCenter} zoom={16} ref={setMap} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                    <Marker position={mapCenter} icon={icon}></Marker>
                </MapContainer>
            </div>
        </div>
    );
}
