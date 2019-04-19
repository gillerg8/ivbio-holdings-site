import React, {useState, Fragment} from 'react';
import {PropTypes} from 'prop-types';
import {useTransition, animated} from 'react-spring';

const SlideObject = ({children, slideDirection}) => {
	const [items, set] = useState();

	let slideFrom;

	if (slideDirection === 'left') {
		slideFrom = 'translate3d(1000px, 0, 0)';
	} else if (slideDirection === 'right') {
		slideFrom = 'translate3d(-1000px, 0, 0)';
	} else if (slideDirection === 'up') {
		slideFrom = 'translate3d(0, 1000px, 0)';
	} else if (slideDirection === 'down') {
		slideFrom = 'translate3d(0, -1000px, 0)';
	}

	const transitions = useTransition(items, (item) => item, {
		from: {transform: slideFrom},
		enter: {transform: 'translate3d(0,0px,0)'},
		trail: 1000
	});

	return (
		<Fragment>
			{transitions.map(({item, props, key}) => {
				return (
					<animated.div key={key} style={props}>
						{children}
					</animated.div>
				);
			})}
		</Fragment>
	);
};

SlideObject.propTypes = {
	children: PropTypes.string
};

export default SlideObject;
