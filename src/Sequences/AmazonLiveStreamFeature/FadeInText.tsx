import React from 'react';

import {interpolateColors} from 'remotion';
import {useCurrentFrame} from 'remotion';

const FadeInText: React.FC<{
	children: React.ReactNode;
	delay: number;
	opacity: number;
}> = ({children, delay, opacity}) => {
	const frame = useCurrentFrame();
	const color = interpolateColors(
		frame - delay,
		[60, 70],
		['rgba(255, 255, 255, 0.1)', 'rgb(255, 255, 255)']
	);
	return <div style={{color, opacity}}>{children}</div>;
};

export default FadeInText;
