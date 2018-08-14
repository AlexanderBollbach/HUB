import React from "react";
import Styles from "./index.css";

const Banner = () => {
	const text = "MIND  WORMS";

	return (
		<div className={Styles.FlexContainer}>
			<ul className={Styles.ListOfLetters}>
				{text.split("").map((letter, idx) => {
					return <li key={idx}>{letter}</li>;
				})}
			</ul>
		</div>
	);
};

export default Banner;
