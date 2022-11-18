import React, { useEffect, useState } from "react";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import map_marker from "../assets/map_marker_2.png";
// import axios from "axios";

const GoogleMapsAPI = () => {
	const [loaded, setLoaded] = useState(false);
	const [map, setMap] = useState("");
	const containerStyle = {
		width: "800px",
		height: "400px",
	};

	const center = {
		lat: 37.6138926,
		lng: -121.0003766,
	};

	const position = {
		lat: 37.61102898182769,
		lng: -120.99279435390255,
	};

	// let restaurant_marker = new google.maps.Marker({
	// 	position: position,
	// 	map: campaign_map,
	// 	icon: "path/to/image",
	// });

	/*
	not working: https://maps.googleapis.com/maps/api/staticmap?center=Mr.Camaron,Modesto,CA&zoom=15&size=800x400&key=${process.env.REACT_APP_GMAPS_API_KEY}

    yes working: https://maps.googleapis.com/maps/api/staticmap?center=Mr.Camaron,Modesto,CA&zoom=15&size=800x400&key=AIzaSyCByOvF28S-0p8xFs6s0L2_5ZONUUvLfjA

*/

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`http://maps.googleapis.com/maps/api/staticmap?center=Mr.Camaron,Modesto,CA&zoom=15&size=800x400&key=${process.env.REACT_APP_GMAPS_API_KEY}`
	// 		)
	// 		.then((res) => {
	// 			// console.log(res.data);
	// 			// console.log(process.env.REACT_APP_GMAPS_API_KEY);
	// 			setMap(res.data);
	// 			setLoaded(true);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		// <>{loaded ? <img src={map} /> : <></>}</>;

		<StaticGoogleMap
			size="800x400"
			center="Mr.Camaron, Modesto, Ca"
			zoom={15}
			apiKey={process.env.REACT_APP_GMAPS_API_KEY}
		>
			<Marker location={position} iconURL={"../assets/map_marker_2.png"} />
		</StaticGoogleMap>
	);
};

// export default GoogleMapsAPI;
export default React.memo(GoogleMapsAPI);
