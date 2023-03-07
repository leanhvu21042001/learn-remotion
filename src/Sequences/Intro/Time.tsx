import React from 'react';

import {interpolate, useCurrentFrame} from 'remotion';

import {LEFT_DISTANCE} from '../../constants';

const Time: React.FC = () => {
	const frame = useCurrentFrame();

	const translateY6 = interpolate(frame, [55, 70], [100, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translateY(${translateY6}px)`,
				fontSize: '3rem',
				fontWeight: 'bolder',
				background: 'blue',
				width: 'fit-content',
				marginLeft: LEFT_DISTANCE,
				marginBottom: 30,
			}}
		>
			10:49:16
		</div>
	);
};

export default Time;
