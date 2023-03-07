import React, {memo, useMemo} from 'react';

import {VictoryAxis, VictoryLabel, VictoryLine} from 'victory';

import data from './data';

const DrawChart: React.FC = memo(() => {
	const styles = useMemo(() => {
		const BLUE_COLOR = '#00a3de';
		const WHITE_COLOR = '#ffffff';

		return {
			parent: {
				boxSizing: 'border-box',
				display: 'inline',
				padding: 0,
			},
			title: {
				textAnchor: 'start',
				verticalAnchor: 'end',
				fill: '#000000',
				fontFamily: 'inherit',
				fontSize: '18px',
				fontWeight: 'bold',
			},

			// DATA SET ONE
			axisOne: {
				grid: {
					stroke: ({tick}: {tick: number}) =>
						tick === -10 ? 'transparent' : '#ffffff',
					strokeWidth: 2,
				},
				axis: {stroke: BLUE_COLOR, strokeWidth: 0},
				ticks: {strokeWidth: 0},
				tickLabels: {
					fill: BLUE_COLOR,
					fontSize: 13,
				},
			},
			labelOne: {
				fill: WHITE_COLOR,
				fontSize: '3rem',
				color: 'white',
				background: 'blue',
				padding: 10,
				borderRadius: 5,
			},
			lineOne: {
				data: {stroke: BLUE_COLOR, strokeWidth: 2},
			},
			axisOneCustomLabel: {
				fill: BLUE_COLOR,
				fontFamily: 'inherit',
				fontWeight: 300,
				fontSize: 21,
			},

			// DATA SET TWO
			axisTwo: {
				axis: {stroke: WHITE_COLOR, strokeWidth: 0},
				tickLabels: {
					fill: WHITE_COLOR,
					fontSize: 13,
				},
			},
			labelTwo: {
				textAnchor: 'end',
				fill: WHITE_COLOR,
				fontSize: '3rem',
				background: 'blue',
				padding: 10,
				borderRadius: 5,
			},
			lineTwo: {
				data: {stroke: WHITE_COLOR, strokeWidth: 2},
			},

			// HORIZONTAL LINE
			lineThree: {
				data: {stroke: '#e95f46', strokeWidth: 2},
			},
		};
	}, []);

	return (
		<svg style={styles.parent as object} viewBox="0 0 450 350">
			{/* Create stylistic elements */}

			{/* Define labels */}
			<VictoryLabel x={25} y={55} style={styles.labelOne} text="AMZN.O" />
			<VictoryLabel x={425} y={55} style={styles.labelTwo} text=".NDX" />

			<g transform="translate(0, 40)">
				{/*
			Add the dependent axis for the first data set.
			Note that all components plotted against this axis will have the same y domain
		*/}
				<VictoryAxis
					dependentAxis
					// Domain={[data.stockPrice.min, data.stockPrice.max]}
					orientation="left"
					standalone={false}
					style={styles.axisOne}
					tickFormat={(value) => {
						return Number(value).toFixed(2);
					}}
					tickValues={[113.12, 113.64, 114.16, 114.67, 115.19, 115.71]}
				/>

				{/* dataset one */}

				<VictoryLine
					animate={{
						duration: 3000,
					}}
					data={data.stockPrice.data}
					domain={{
						y: [data.stockPrice.min, data.stockPrice.max],
					}}
					scale={{x: 'time', y: 'linear'}}
					standalone={false}
					style={styles.lineOne}
				/>

				{/*
					Add the dependent axis for the second data set.
					Note that all components plotted against this axis will have the same y domain
				*/}
				<VictoryAxis
					dependentAxis
					// Domain={[data.indexPrice.min, data.indexPrice.max]}
					orientation="right"
					standalone={false}
					style={styles.axisTwo}
					tickFormat={(value) => {
						return Number(value).toFixed(2);
					}}
					tickValues={[
						11040.59, 11088.04, 11135.5, 11182.95, 11230.41, 11277.86,
					]}
				/>
				{/* dataset two */}
				<VictoryLine
					animate={{
						duration: 3000,
					}}
					data={data.indexPrice.data}
					domain={{
						y: [data.indexPrice.min, data.indexPrice.max],
					}}
					scale={{x: 'time', y: 'linear'}}
					standalone={false}
					style={styles.lineTwo}
				/>
			</g>
		</svg>
	);
});

export default DrawChart;
