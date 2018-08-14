import React from "react";
import styles from "./Demos.css";
import { Link } from "react-router-dom";

const Demos = () => {
	return (
		<div className={styles.Main}>
			<h1>Demos</h1>
			<div className={styles.demosList}>
				<a href="/demos/red-black-warp/">red-black-wrap</a>
				<a href="/demos/imageProc1/">imageProc1</a>
				<a href="/demos/pink-blue-shingles/">pink-blue-shingles</a>
				<a href="/demos/imageProc2/">imageProc2</a>

			</div>
		</div>
	);
};

export default Demos;
