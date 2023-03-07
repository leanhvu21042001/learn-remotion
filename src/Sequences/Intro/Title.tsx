import React from 'react';

import {
	Easing,
	interpolate,
	useCurrentFrame,
	interpolateColors,
} from 'remotion';

import {LEFT_DISTANCE} from '../../constants';

const Title: React.FC = () => {
	const frame = useCurrentFrame();

	const opacity1 = interpolate(frame, [0, 20], [0, 1]);
	const opacity2 = interpolate(frame, [15, 30], [0, 1]);
	const opacity3 = interpolate(frame, [25, 40], [0, 1]);
	const opacity4 = interpolate(frame, [35, 50], [0, 1]);
	const opacity5 = interpolate(frame, [45, 60], [0, 1]);

	const textShadow1 = interpolateColors(
		frame,
		[0, 10, 90],
		['transparent', 'blue', 'transparent']
	);
	const textShadow2 = interpolateColors(
		frame,
		[15, 20, 100],
		['transparent', 'blue', 'transparent']
	);
	const textShadow3 = interpolateColors(
		frame,
		[25, 30, 110],
		['transparent', 'blue', 'transparent']
	);
	const textShadow4 = interpolateColors(
		frame,
		[35, 40, 120],
		['transparent', 'blue', 'transparent']
	);
	const textShadow5 = interpolateColors(
		frame,
		[45, 50, 130],
		['transparent', 'blue', 'transparent']
	);

	const hShadow1 = interpolate(frame, [0, 10, 80], [40, 20, 0]);
	const hShadow2 = interpolate(frame, [15, 20, 90], [40, 20, 0]);
	const hShadow3 = interpolate(frame, [25, 30, 100], [40, 20, 0]);
	const hShadow4 = interpolate(frame, [35, 40, 110], [40, 20, 0]);
	const hShadow5 = interpolate(frame, [45, 50, 120], [40, 20, 0]);

	const translateX1 = interpolate(frame, [0, 20], [200, LEFT_DISTANCE], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.34, 0.35, 0.63, 0.94),
	});
	const translateX2 = interpolate(frame, [15, 30], [200, LEFT_DISTANCE], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.34, 0.35, 0.63, 0.94),
	});
	const translateX3 = interpolate(frame, [25, 40], [200, LEFT_DISTANCE], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.34, 0.35, 0.63, 0.94),
	});
	const translateX4 = interpolate(frame, [35, 50], [200, LEFT_DISTANCE], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.34, 0.35, 0.63, 0.94),
	});
	const translateX5 = interpolate(frame, [45, 60], [200, LEFT_DISTANCE], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.34, 0.35, 0.63, 0.94),
	});

	return (
		<div
			style={{
				fontSize: '4rem',
				fontWeight: 'bolder',
				textTransform: 'uppercase',
				marginBottom: 50,
			}}
		>
			<p
				style={{
					margin: 0,
					padding: 0,
					opacity: opacity1,
					transform: `translateX(${translateX1}px)`,
					textShadow: `${hShadow1}px 0px 2px ${textShadow1}`,
				}}
			>
				Amazon India rolls
			</p>
			<p
				style={{
					margin: 0,
					padding: 0,
					opacity: opacity2,
					transform: `translateX(${translateX2}px)`,
					textShadow: `${hShadow2}px 0px 2px ${textShadow2}`,
				}}
			>
				out live-stream
			</p>
			<p
				style={{
					margin: 0,
					padding: 0,
					opacity: opacity3,
					transform: `translateX(${translateX3}px)`,
					textShadow: `${hShadow3}px 0px 2px ${textShadow3}`,
				}}
			>
				shopping to drive
			</p>
			<p
				style={{
					margin: 0,
					padding: 0,
					opacity: opacity4,
					transform: `translateX(${translateX4}px)`,
					textShadow: `${hShadow4}px 0px 2px ${textShadow4}`,
				}}
			>
				festive season
			</p>
			<p
				style={{
					margin: 0,
					padding: 0,
					opacity: opacity5,
					transform: `translateX(${translateX5}px)`,
					textShadow: `${hShadow5}px 0px 2px ${textShadow5}`,
				}}
			>
				sales
			</p>
		</div>
	);
};

export default Title;
