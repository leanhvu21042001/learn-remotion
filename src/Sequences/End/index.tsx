import {useCurrentFrame} from 'remotion';
import {AbsoluteFill, interpolate, useVideoConfig} from 'remotion';
import Logo from '../Logo';

const End: React.FC = () => {
	const {height} = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 60], [0, 1]);
	const opacityFooter = interpolate(frame, [40, 50], [0, 1]);

	const heightText = height / 2.5;
	return (
		<AbsoluteFill style={{background: 'white'}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'end',
					height: heightText,
					width: '100%',
				}}
			>
				<div
					style={{
						fontSize: '6rem',
						height: 'fit-content',
						lineHeight: '5rem',
					}}
				>
					REFINITIV
				</div>
				<div
					style={{
						marginBottom: '4rem',
					}}
				>
					&#x24C7;
				</div>
			</div>
			<div
				style={{
					width: '100%',
				}}
			>
				<div
					style={{
						width: 'fit-content',
						marginLeft: 760,
						marginTop: 20,
					}}
				>
					<Logo scale={1.3} />
				</div>
			</div>

			<div
				style={{
					textAlign: 'center',
					marginTop: 200,
					marginBottom: 500,
					opacity,
				}}
			>
				<div
					style={{
						display: 'inline-block',
						fontSize: '6rem',
						fontWeight: 'bolder',
						padding: 20,
						background: 'blue',
						color: 'white',
						width: 'fit-content',
					}}
				>
					TRADE NOW
				</div>
			</div>

			<div
				style={{
					fontSize: '3rem',
					textAlign: 'center',
					opacity: opacityFooter,
				}}
			>
				An LSEG Business
			</div>
		</AbsoluteFill>
	);
};

export default End;
