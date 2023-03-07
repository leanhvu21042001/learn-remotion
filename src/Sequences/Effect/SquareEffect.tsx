import {
	AbsoluteFill,
	Easing,
	interpolate,
	useVideoConfig,
	useCurrentFrame,
} from 'remotion';

import getRandomIntInclusive from '../../utils/getRandomIntInclusive';

const NUMBER_OF_ROW = 4;
const NUMBER_OF_COLUMN = 3;
const NUMBER_OF_SQUARE = NUMBER_OF_COLUMN * NUMBER_OF_ROW;

const Square: React.FC<{opacity: number; delay: number}> = ({
	opacity,
	delay,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const op = interpolate(
		frame - delay,
		[0, durationInFrames / 3],
		[opacity, 0],
		{
			extrapolateLeft: 'identity',
			easing: Easing.bezier(0.42, 0.07, 0.88, 1.03),
		}
	);

	return (
		<div
			style={{
				background: 'black',
				opacity: op,
			}}
		/>
	);
};

const SquareEffect: React.FC = () => {
	const {durationInFrames} = useVideoConfig();

	const squares = Array(NUMBER_OF_SQUARE)
		.fill(true)
		.map(() => {
			const opacity = getRandomIntInclusive(0, 1);
			const delay = getRandomIntInclusive(1, durationInFrames);
			return <Square opacity={opacity} delay={delay} />;
		});

	return (
		<AbsoluteFill
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${NUMBER_OF_COLUMN}, 1fr)`,
				gridTemplateRows: `repeat(${NUMBER_OF_ROW}, 1fr)`,
				gap: 5,
				background: 'gray',
				opacity: '.8',
			}}
		>
			{squares}
		</AbsoluteFill>
	);
};

export default SquareEffect;
