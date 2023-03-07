import React from 'react';

import moment from 'moment';
import {interpolate, useCurrentFrame} from 'remotion';
import {LEFT_DISTANCE} from '../../constants';

const Date: React.FC = () => {
	const frame = useCurrentFrame();

	const momentDate = moment('9/30/2022');
	const day = momentDate.format('DD');
	const month = momentDate.format('MMM');
	const year = momentDate.format('YYYY');

	const translateY4 = interpolate(frame, [0, 15], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const translateY5 = interpolate(frame, [15, 30], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const translateY6 = interpolate(frame, [30, 45], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const isShowDate = translateY4 < 110;

	return (
		<div
			style={{
				fontSize: '3rem',
				fontWeight: 'bolder',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'nowrap',
				background: isShowDate ? 'blue' : 'transparent',
				marginLeft: LEFT_DISTANCE,
				marginBottom: 30,
				width: 'fit-content',
				position: 'relative',
				transform: `translateY(${translateY4}px)`,
			}}
		>
			<div
				style={{
					display: isShowDate ? 'flex' : 'none',
					background: 'blue',
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					bottom: `-${translateY6}px`,
				}}
			/>
			<div
				style={{
					transform: `translateY(${translateY4}px)`,
					padding: 5,
				}}
			>
				{day}
			</div>
			<div
				style={{
					transform: `translateY(${translateY5}px)`,
					padding: 5,
				}}
			>
				{month}
			</div>
			<div
				style={{
					transform: `translateY(${translateY6}px)`,
					padding: 5,
				}}
			>
				{year}
			</div>
		</div>
	);
};

export default Date;
