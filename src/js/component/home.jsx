import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Home = ({seconds}) => {

	let unidades = Math.floor(seconds % 10);
	let decenas = Math.floor(seconds / 10) % 10;
	let centenas = Math.floor(seconds / 100) % 10;
	let milesimas = Math.floor(seconds / 1000) % 10;
	let decenasDeMiles = Math.floor(seconds / 10000) % 10;
	let centenasDeMiles = Math.floor(seconds / 100000) % 10;

	return (
		<div className="contador">
			<div className="digito"><FontAwesomeIcon icon={faClock} /></div>
			<div className="digito">{centenasDeMiles}</div>
			<div className="digito">{decenasDeMiles}</div>
			<div className="digito">{milesimas}</div>
			<div className="digito">{centenas}</div>
			<div className="digito">{decenas}</div>
			<div className="digito">{unidades}</div>
			</div>
	);
};

export default Home;
