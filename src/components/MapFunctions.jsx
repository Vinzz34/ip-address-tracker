import { useMap } from "react-leaflet"

const MapFunctions = ({data}) => {
    const map = useMap();
    map.flyTo([data.location.lat, data.location.lng],13);
    map.removeControl(map.zoomControl);
}

export default MapFunctions