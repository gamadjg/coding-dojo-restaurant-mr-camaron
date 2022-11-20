import React from "react";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

const GoogleMapsAPI = () => {
	const position = {
		lat: 37.61102898182769,
		lng: -120.99279435390255,
	};

	return (
		<StaticGoogleMap
			size="1000x600"
			center="Mr.Camaron, Modesto, Ca"
			zoom={15}
			apiKey={process.env.REACT_APP_GMAPS_API_KEY}
		>
			<Marker location={position} />
		</StaticGoogleMap>
	);
};

export default React.memo(GoogleMapsAPI);
