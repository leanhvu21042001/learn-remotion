import React from 'react';

import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Rect} from '@remotion/shapes';

import {COLORS} from '../../constants';
import getRandomIntInclusive from '../../utils/getRandomIntInclusive';

const Line: React.FC<{fill: string; posX: number; posY: number}> = ({
	fill,
	posX,
	posY,
}) => {
	const frame = useCurrentFrame();

	const top = interpolate(frame, [0, 30], [posX, posX + 30]);
	const left = interpolate(frame, [0, 30], [posY, posY - 30]);

	return (
		<Rect
			width={60}
			height={500}
			edgeRoundness={1.11}
			fill={fill}
			style={{
				top,
				left,
				opacity: 0.9,
				position: 'absolute',
				transform: `rotate(50deg)`,
				boxShadow: `0px 0px 50px ${fill}`,
			}}
		/>
	);
};

const positionOfLines: {posX: number; posY: number}[] = [
	{
		posX: 100,
		posY: 300,
	},
	{
		posX: 500,
		posY: 1000,
	},
	{
		posX: 800,
		posY: 1000,
	},
	{
		posX: 1200,
		posY: 100,
	},
	{
		posX: 0,
		posY: 0,
	},
	{
		posX: 500,
		posY: 50,
	},
	{
		posX: 1200,
		posY: 800,
	},
];

const LineEffect: React.FC = () => {
	const lines = positionOfLines.map(({posX, posY}) => {
		const fill = COLORS[getRandomIntInclusive(0, 3)];
		return <Line fill={fill} posX={posX} posY={posY} />;
	});

	return (
		<AbsoluteFill
			style={{
				position: 'relative',
				background: 'black',
				opacity: 0.2,
				filter: 'alpha(opacity = 50)',
			}}
		>
			{lines}
		</AbsoluteFill>
	);
};

export default LineEffect;
