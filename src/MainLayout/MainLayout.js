import React from "react";
import styles from "./MainLayout.css";

const MainLayout = ({ children }) => {
	return (
		<div className={styles.Container}>
			<div className={styles.Main}>{children}</div>
		</div>
	);
};

export default MainLayout;
