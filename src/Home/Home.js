import React from "react";
import styles from "./Home.css";

import { TransitionGroup, Transition } from "react-transition-group";

const dataSource = ["foo", "bar", "baz", "Waz", "taz"];

const Home = () => {
	return (
		<TransitionGroup className={styles.TransitionGroup}>
			{dataSource.map((el, index) => {
				return (
					<Transition
						appear={true}
						// mountOnEnter={true}
						key={index}
						timeout={{ enter: (index * 100) + 100, exit: 1000 }}
					>
						{state => {
							console.log(state);
							return <div className={`Test ${state}`}>{el}</div>;
						}}
					</Transition>
				);
			})}
		</TransitionGroup>
	);
};

export default Home;
