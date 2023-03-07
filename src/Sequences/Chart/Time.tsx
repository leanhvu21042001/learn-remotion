import moment from 'moment';
import React from 'react';

import {interpolate, useCurrentFrame} from 'remotion';

import {LEFT_DISTANCE} from '../../constants';

const Time: React.FC = () => {
	const frame = useCurrentFrame();

	const translateY6 = interpolate(frame, [30, 45], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const timeText = moment('10:49:16', 'h:mm:ss').format('h:mm:ss A');
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
			As of {timeText}
		</div>
	);
};

export default Time;
