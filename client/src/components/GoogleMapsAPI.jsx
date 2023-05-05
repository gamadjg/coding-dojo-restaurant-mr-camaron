import React from "react";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

const GoogleMapsAPI = () => {
	const position = {
		lat: 37.61102898182769,
		lng: -120.99279435390255,
	};
	return (
		<StaticGoogleMap
			className=""
			size="1200x300"
			center="Mr.Camaron, Modesto, Ca"
			zoom={13}
			scale={2}
			apiKey={import.meta.env.VITE_GMAPS_API_KEY}
		>
			<Marker location={position} />
		</StaticGoogleMap>
	);
};

export default React.memo(GoogleMapsAPI);
