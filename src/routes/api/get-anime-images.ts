export const getAnime = async (anime: string) => {
	const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`);
	const data = await response.json();

	const animes = data.data;
	let animeResult = animes.filter((a: any) => a.title == anime)
	console.info(animeResult)

	return animeResult[0].images.jpg.image_url
}

export const getCharacter = async (character: string) => {
	const response = await fetch(`https://api.jikan.moe/v4/characters?q=${character}`);
	const data = await response.json();

	const characters = data.data;
	const mc = characters.filter((c: any) => c.name == character);
	console.info(mc);

	return mc[0].images.jpg.image_url;
}
