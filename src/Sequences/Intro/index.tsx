import React from 'react';
import {AbsoluteFill} from 'remotion';
import Logo from '../Logo';

import Date from './Date';
import Time from './Time';
import Title from './Title';

const Intro: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'end',
				position: 'relative',
			}}
		>
			<div>
				<Title />
				<Date />
				<Time />
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'end',
					position: 'absolute',
					right: 0,
				}}
			>
				<div
					style={{
						fontSize: '3rem',
						marginBottom: 90,
					}}
				>
					REFINITIV
				</div>
				<Logo />
			</div>
		</AbsoluteFill>
	);
};

export default Intro;
