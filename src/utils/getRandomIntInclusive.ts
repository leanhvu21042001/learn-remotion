function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	// eslint-disable-next-line @remotion/deterministic-randomness
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default getRandomIntInclusive;
