import {useVideoConfig} from 'remotion';
import React from 'react';

import {Rect} from '@remotion/shapes';
import {interpolate, useCurrentFrame} from 'remotion';

const BoxDrop: React.FC<{
	width: number;
	height: number;
	fill: string;
	startOpacity: number;
	endOpacity: number;
	posStart: number;
	posMid: number;
	posEnd: number;
	styles?: object;
}> = ({
	width,
	height,
	fill,
	startOpacity,
	endOpacity,
	posStart,
	posMid,
	posEnd,
	styles,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const jum = 15;
	const input: number[] = [];
	const output: number[] = [];

	for (let index = 0; index < durationInFrames / 5; index++) {
		input.push(index * jum);
		if (index % 2 === 0) {
			output.push(startOpacity);
		} else {
			output.push(endOpacity);
		}
	}

	const opacity = interpolate(frame, input, output);

	const translateBox = interpolate(
		frame,
		[0, durationInFrames / 2, durationInFrames],
		[posStart, posMid, posEnd]
	);

	return (
		<Rect
			width={width}
			height={height}
			fill={fill}
			style={{
				opacity,
				transform: `translateY(${translateBox}px)`,
				...styles,
			}}
		/>
	);
};

export default BoxDrop;
