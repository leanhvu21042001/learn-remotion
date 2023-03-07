import React from 'react';

import {
	Easing,
	interpolate,
	AbsoluteFill,
	useVideoConfig,
	useCurrentFrame,
} from 'remotion';
import FadeInText from './FadeInText';
import {Rect} from '@remotion/shapes';

const AmazonLiveStreamFeature: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, durationInFrames} = useVideoConfig();

	const translateY1 = interpolate(frame, [0, 30], [height + 10, 0], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.51, 0.09, 0.88, 1.03),
	});
	const translateY2 = interpolate(frame, [60, 70], [0, -40], {
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(frame, [60, 80], [0, 1]);
	const opacityLogo = interpolate(frame, [100, 130], [0, 1]);
	const opacityBackground = interpolate(
		frame,
		[durationInFrames - 30, durationInFrames],
		[0, 1]
	);

	const opacityBackground2 = interpolate(
		frame,
		[durationInFrames - 30, durationInFrames],
		[0.8, 0],
		{
			extrapolateLeft: 'clamp',
		}
	);
	const opacityText = interpolate(
		frame,
		[durationInFrames - 30, durationInFrames],
		[0.8, 0],
		{
			extrapolateLeft: 'clamp',
		}
	);

	/**
	 * #################### Create Animation of per word
	 */
	const MAX_SECONDS_READ_CONTENT = 7;
	const content =
		'Amazon launches live-streaming video feature in India to drive sales. Tied up with social media influencers to host live-streams, interact with customers, and offer limited period deals. Popular in China, YouTube also expanded live-stream shopping';
	const contentLength = content.split(' ').length;
	const secondPerWord = contentLength / MAX_SECONDS_READ_CONTENT;
	const contentMappedWithFadeIn = content.split(' ').map((text, index) => (
		<FadeInText delay={secondPerWord * index} opacity={opacityText}>
			{text}
		</FadeInText>
	));
	/**
	 * #################### END Create Animation of per word
	 */

	return (
		<AbsoluteFill
			style={{
				fontSize: '4rem',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'wrap',
				justifyContent: 'end',
				transform: `translateY(${translateY1}px)`,
				background: `rgba(0, 0, 0, ${opacityBackground})`,
			}}
		>
			<div
				style={{
					background: `rgba(4, 25, 190, ${opacityBackground2})`,
					padding: '100px',
					height: 'fit-content',
					flexBasis: '55%',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					columnGap: 20,
					position: 'relative',
				}}
			>
				<Rect
					width={250}
					height={40}
					fill={`rgba(0, 215, 223, ${opacityBackground2})`}
					opacity={opacity}
					style={{
						position: 'absolute',
						top: translateY2,
						left: 0,
					}}
				/>
				{contentMappedWithFadeIn}
				<div
					style={{
						width: '100%',
						marginTop: '100px',
					}}
				>
					<div
						style={{
							width: 'fit-content',
							height: '100%',
							color: `rgba(4, 25, 190, ${opacityBackground2})`,
							background: `rgba(255, 255, 255, ${opacityBackground2})`,
							borderRadius: 10,
							padding: 20,
							opacity: opacityLogo,
							fontWeight: 'bolder',
						}}
					>
						RTRS
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

export default AmazonLiveStreamFeature;
