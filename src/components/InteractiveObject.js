import React from 'react';
import {useSpring, animated} from 'react-spring';
import {PropTypes} from 'prop-types';

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 50,
	(x - window.innerWidth / 2) / 100,
	1.1
];

const trans = (x, y, s) =>
	`perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const InteractiveObject = ({children}) => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 10, tension: 300, friction: 40, clamp: true}
	}));
	return (
		<animated.div
			onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			style={{transform: props.xys.interpolate(trans)}}
		>
			{children}
		</animated.div>
	);
};

InteractiveObject.propTypes = {
	xys: PropTypes.array,
	children: PropTypes.node
};

export default InteractiveObject;
