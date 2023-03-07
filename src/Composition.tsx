import {Audio} from 'remotion';
import {OffthreadVideo} from 'remotion';
import {AbsoluteFill, Sequence} from 'remotion';

import Intro from './Sequences/Intro';
import Box from './Sequences/Intro/Box';
import {LineEffect} from './Sequences/Effect';
import AmazonLiveStreamFeature from './Sequences/AmazonLiveStreamFeature';
import Chart from './Sequences/Chart';

import './composition.css';
import {SquareEffect} from './Sequences/Effect';
import End from './Sequences/End';
import video from './videos/stock_media_usa_amzn_vertical.mp4';
import audio from './audios/background_audio_option_2.mp3';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'black',
			}}
		>
			<Sequence name="End video" durationInFrames={90} from={620}>
				<End />
			</Sequence>

			{/* 80 -> 440 */}
			<Sequence name="usa amazon stock media" durationInFrames={360} from={80}>
				<OffthreadVideo src={video} />
			</Sequence>

			{/* 130 -> 410 */}
			<Sequence
				name="amazon text for new live stream feature"
				durationInFrames={310}
				from={130}
			>
				<AmazonLiveStreamFeature />
			</Sequence>

			{/* 400 -> 460 */}
			<Sequence durationInFrames={60} from={400}>
				<LineEffect />
			</Sequence>

			{/* 80-> 130 */}
			<Sequence durationInFrames={50} from={80}>
				<SquareEffect />
			</Sequence>

			{/* 0-> 120 */}
			<Sequence durationInFrames={120}>
				<Intro />
			</Sequence>
			<Sequence durationInFrames={120}>
				<Box />
			</Sequence>

			<Sequence name="background audio">
				<Audio src={audio} />
			</Sequence>

			{/* 440 -> 620 */}
			<Chart />
		</AbsoluteFill>
	);
};
