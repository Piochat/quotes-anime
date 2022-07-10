export const getQuotes = async () => {
	return await fetch('/api/get-anime-quotes')
		.then(res => res.json());
}
