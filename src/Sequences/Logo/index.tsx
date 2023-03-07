import React from 'react';

import {Animation} from 'remotion-animation';
import 'animate.css';

const Logo: React.FC<{scale?: number}> = ({scale = 1}) => {
	return (
		<div
			style={{
				color: 'white',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				transform: `scale(${scale})`,
			}}
		>
			<div style={{overflow: 'hidden', width: 100, height: 100}}>
				<Animation duration={0.5} animateName="fadeInBottomRight">
					<div
						style={{
							borderTop: '10px solid blue',
							borderLeft: '10px solid blue',
							width: 100,
							height: 100,
						}}
					/>
				</Animation>

				<Animation duration={1} animateName="fadeInBottomRight">
					<div
						style={{
							marginLeft: 50,
							marginTop: -55,
							width: 60,
							height: 10,
							background: 'blue',
							transform: 'skew(45deg)',
						}}
					/>
					<div
						style={{
							marginLeft: 37,
							marginTop: 40,
							width: 140,
							height: 10,
							background: 'blue',
							transform: 'rotate(45deg)',
						}}
					/>
				</Animation>
			</div>
		</div>
	);
};

export default Logo;
