/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import MapFunctions from './MapFunctions';
import location from "../assets/icon-location.svg";
import L from 'leaflet';


const Map = ({data}) => {

    var myIcon = L.icon({
        iconUrl: location,
        iconSize: [46, 56],
        iconAnchor: [23, 56],
    });
    
    

    if(data){
        return (
            <MapContainer className="h-[65vh]" center={[data.location.lat, data.location.lng]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={myIcon} position={[data.location.lat, data.location.lng]} />
                <MapFunctions data={data} />
            </MapContainer> 
        )
    }
}

export default Map