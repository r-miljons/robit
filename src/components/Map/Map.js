import React from "react";
import { useState } from "react";
import { StyledMapContainer } from "./MapContainer.styled";

export default function Map() {
	const [darkMode, setDarkmode] = useState(false);

	return (
		<StyledMapContainer>
			{darkMode ? (
				<iframe
					src={`https://api.mapbox.com/styles/v1/sienaone/cl9pm1ja8000214phgaxqit3f.html?title=false&access_token=pk.eyJ1Ijoic2llbmFvbmUiLCJhIjoiY2w5cGxqYW9oMDhpNjNvdGZ3NWhya3o2cCJ9.6q3uFCxxUZ3315cI3DJobw&zoomwheel=false#19.12/56.9407965/24.0955899`}
					title="Navigation"
				></iframe>
			) : (
				<iframe
					src="https://api.mapbox.com/styles/v1/sienaone/cl9pmpju3004e14vqh2b5c77y.html?title=false&access_token=pk.eyJ1Ijoic2llbmFvbmUiLCJhIjoiY2w5cGxqYW9oMDhpNjNvdGZ3NWhya3o2cCJ9.6q3uFCxxUZ3315cI3DJobw&zoomwheel=false#13.49/56.95157/24.26801"
					title="Navigation"
				></iframe>
			)}
		</StyledMapContainer>
	);
}
