import React, {memo} from 'react';

import {
	Img,
	Sequence,
	staticFile,
	interpolate,
	AbsoluteFill,
	useCurrentFrame,
} from 'remotion';

import Date from './Date';
import Time from './Time';
import DrawChart from './DrawChart';

function formatMoney(
	amount: number,
	decimalCount = 2,
	decimal = '.',
	thousands = ','
) {
	try {
		decimalCount = Math.abs(decimalCount);
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

		const negativeSign = amount < 0 ? '-' : '';

		const i = parseInt(
			(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
		).toString();
		const j = i.length > 3 ? i.length % 3 : 0;

		return (
			negativeSign +
			(j ? i.substr(0, j) + thousands : '') +
			i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
			(decimalCount
				? decimal +
				  Math.abs(amount - i)
						.toFixed(decimalCount)
						.slice(2)
				: '')
		);
	} catch (e) {
		console.warn(e);
	}
}

const TopToDown: React.FC<{children: React.ReactNode; delay?: number}> = memo(
	({children, delay = 0}) => {
		const frame = useCurrentFrame();
		const translateY = interpolate(frame - delay, [0, 30], [-50, 0], {
			extrapolateRight: 'clamp',
		});
		const opacity = interpolate(frame - delay, [0, 30], [0, 1], {
			extrapolateRight: 'clamp',
		});
		return (
			<div
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
				}}
			>
				{children}
			</div>
		);
	}
);

const DownToTop: React.FC<{children: React.ReactNode; delay?: number}> = memo(
	({children, delay = 0}) => {
		const frame = useCurrentFrame();
		const translateY = interpolate(frame - delay, [0, 30], [50, 0], {
			extrapolateRight: 'clamp',
		});
		const opacity = interpolate(frame - delay, [0, 30], [0, 1], {
			extrapolateRight: 'clamp',
		});

		return (
			<div
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
				}}
			>
				{children}
			</div>
		);
	}
);

const AmazonLogo: React.FC = () => (
	<Img
		width={80}
		height={60}
		src={staticFile('images/logo_usa_amzn_icon.png')}
	/>
);
const BrandName: React.FC = () => <div>Amazon.com Inc</div>;
const Ric: React.FC = () => <div>AMZN.O</div>;

const CountDown: React.FC<{delay?: number; input: number}> = memo(
	({delay = 0, input}) => {
		const frame = useCurrentFrame();
		const value = interpolate(frame - delay, [0, 30], [0, input], {
			extrapolateRight: 'clamp',
		});

		return formatMoney(value, 2, '.', ',');
	}
);

const ClosePrice: React.FC<{delay?: number}> = ({delay = 0}) => {
	return (
		<div>
			<div
				style={{
					fontSize: '2.5rem',
					marginBottom: 10,
				}}
			>
				.NDX Price
			</div>
			<div
				style={{
					background: 'blue',
					padding: 20,
					borderRadius: 10,
					textAlign: 'center',
				}}
			>
				<CountDown input={113.0} delay={delay} />
			</div>
		</div>
	);
};
const DailyChangeNet: React.FC<{delay?: number}> = ({delay = 0}) => (
	<div>
		<div
			style={{
				fontSize: '2.5rem',
				marginBottom: 10,
			}}
		>
			.NDX Price
		</div>
		<div
			style={{
				background: '#dd5404',
				padding: 20,
				borderRadius: 10,
				textAlign: 'center',
			}}
		>
			<CountDown input={-1.8} delay={delay} />
		</div>
	</div>
);

const DailyPercentage: React.FC<{delay?: number}> = ({delay = 0}) => (
	<div>
		<div
			style={{
				fontSize: '2.5rem',
				marginBottom: 10,
			}}
		>
			.NDX Price
		</div>
		<div
			style={{
				background: '#56cb98',
				padding: 20,
				borderRadius: 10,
				textAlign: 'center',
			}}
		>
			<CountDown input={-1.567944251} delay={delay} />
		</div>
	</div>
);

const NDXPrice: React.FC<{delay?: number}> = ({delay = 0}) => (
	<div>
		<div
			style={{
				fontSize: '2.5rem',
				marginBottom: 10,
			}}
		>
			.NDX Price
		</div>
		<div
			style={{
				background: 'white',
				color: 'blue',
				padding: 20,
				borderRadius: 10,
				textAlign: 'center',
			}}
		>
			<CountDown input={10971.222} delay={delay} />
		</div>
	</div>
);
const IndexDailyChangeNet: React.FC<{delay?: number}> = ({delay = 0}) => (
	<div>
		<div
			style={{
				fontSize: '2.5rem',
				marginBottom: 10,
			}}
		>
			Index Change
		</div>
		<div
			style={{
				background: '#dd5404',
				padding: 20,
				borderRadius: 10,
				textAlign: 'center',
			}}
		>
			<CountDown input={-193.558} delay={delay} />
		</div>
	</div>
);
const IndexDailyPercentage: React.FC<{delay?: number}> = ({delay = 0}) => (
	<div>
		<div
			style={{
				fontSize: '2.5rem',
				marginBottom: 10,
			}}
		>
			Index Percentage
		</div>
		<div
			style={{
				background: '#dd5404',
				padding: 20,
				borderRadius: 10,
				textAlign: 'center',
			}}
		>
			<CountDown input={-0.01733648133} delay={delay} /> %
		</div>
	</div>
);

const Chart: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'nowrap',
				justifyContent: 'end',
			}}
		>
			<Sequence
				durationInFrames={180}
				from={440}
				style={{
					position: 'relative',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						color: 'white',
						padding: '0 100px',
						fontSize: '3rem',
						fontWeight: 'bolder',
					}}
				>
					<AmazonLogo />

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginLeft: 20,
						}}
					>
						<BrandName />
						<Ric />
					</div>
				</div>
			</Sequence>

			<Sequence
				durationInFrames={180}
				from={440}
				style={{
					position: 'relative',
				}}
			>
				<div
					style={{
						display: 'flex',
						width: '100%',
						flexDirection: 'row',
						justifyContent: 'space-around',
						color: 'white',
						fontSize: '3rem',
						fontWeight: 'bolder',
						margin: '150px 20px 50px 100px',
					}}
				>
					<TopToDown>
						<ClosePrice />
					</TopToDown>

					<TopToDown delay={15}>
						<DailyChangeNet delay={15} />
					</TopToDown>

					<TopToDown delay={30}>
						<DailyPercentage delay={30} />
					</TopToDown>
				</div>
			</Sequence>

			<Sequence
				durationInFrames={180}
				from={440}
				style={{
					position: 'relative',
					padding: '0 50px',
				}}
			>
				<DrawChart />
			</Sequence>

			<Sequence
				durationInFrames={180}
				from={440}
				style={{
					position: 'relative',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						color: 'white',
						fontSize: '3rem',
						fontWeight: 'bolder',
						margin: '150px 20px 50px 100px',
						width: '100%',
					}}
				>
					<DownToTop delay={50}>
						<NDXPrice delay={60} />
					</DownToTop>
					<DownToTop delay={65}>
						<IndexDailyChangeNet delay={75} />
					</DownToTop>
					<DownToTop delay={80}>
						<IndexDailyPercentage delay={90} />
					</DownToTop>
				</div>
			</Sequence>

			<Sequence
				durationInFrames={180}
				from={440}
				style={{
					position: 'relative',
				}}
			>
				<div
					style={{
						color: 'white',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'end',
					}}
				>
					<div>
						<Date />
						<Time />
					</div>
				</div>
			</Sequence>
		</AbsoluteFill>
	);
};

export default Chart;
