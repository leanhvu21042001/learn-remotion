import {Composition} from 'remotion';
import {MyComposition} from './Composition';

import {
	Chart as ChartJS,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js/auto';

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="RaymondBuildVideoFromReact"
				component={MyComposition}
				durationInFrames={735}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
