import React, {ReactNode} from 'react';

import {AbsoluteFill, useVideoConfig} from 'remotion';

import BoxDrop from './BoxDrop';
import {COLORS} from '../../constants';
import getRandomIntInclusive from '../../utils/getRandomIntInclusive';

const NUMBER_OF_COLUMN = 8;

const Column: React.FC<{boxesInColumn: ReactNode[]}> = ({boxesInColumn}) => {
	return (
		<div className="column">
			{boxesInColumn.map((box: ReactNode) => (
				<div
					className="cell"
					style={{
						marginBottom: getRandomIntInclusive(10, 100),
						marginInline: 10,
					}}
				>
					{box}
				</div>
			))}
		</div>
	);
};

const Box: React.FC = () => {
	const {width, height} = useVideoConfig();
	const widthOfColumn = Math.floor(width / NUMBER_OF_COLUMN);

	const boxes: Array<Array<ReactNode>> = [];
	for (let index = 0; index < NUMBER_OF_COLUMN; index++) {
		const numberOfBoxes = getRandomIntInclusive(1, 10);
		const randomBoxes = new Array(numberOfBoxes).fill(true).map(() => {
			const fill = COLORS.at(getRandomIntInclusive(0, 3)) as string;
			const rectHeight = getRandomIntInclusive(10, 50);
			const startOpacity = getRandomIntInclusive(0, 1);
			const endOpacity = getRandomIntInclusive(0, 1);

			const posStart = getRandomIntInclusive(0, height / 3);
			const posMid = getRandomIntInclusive(0, height / 3);
			const posEnd = getRandomIntInclusive(0, height / 3);

			return (
				<BoxDrop
					width={widthOfColumn}
					height={rectHeight}
					fill={fill}
					startOpacity={startOpacity}
					endOpacity={endOpacity}
					posStart={posStart}
					posMid={posMid}
					posEnd={posEnd}
				/>
			);
		});

		boxes.push(randomBoxes);
	}

	return (
		<AbsoluteFill
			style={{
				height: 'fit-content',
				width: 'fit-content',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'nowrap',
			}}
		>
			{boxes.map((boxesInColumn) => (
				<Column boxesInColumn={boxesInColumn} />
			))}
		</AbsoluteFill>
	);
};

export default Box;
