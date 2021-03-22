import React, { useState, useEffect } from "react";

const Hotel = ({ name, details }) => {
	const [shown, setShown] = useState(false);

	return (
		<div>
			<p> {name} </p>
			{shown && <p> {details} </p>}
			{shown ? (
				<button onClick={() => setShown(false)}> Show less</button>
			) : (
				<button onClick={() => setShown(true)}>Show more</button>
			)}
		</div>
	);
};

export default Hotel;
