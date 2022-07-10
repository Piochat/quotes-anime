const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b71dbb3987msh942f756b41229c6p1c5884jsn0695ba0db245',
		'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
	}
};


export const getAnimeQuotes = async () => {
	const response = await fetch('https://anime-quotes1.p.rapidapi.com/api/random', options); 
	const data = await response.json()

	console.log(data);

	return data
}
