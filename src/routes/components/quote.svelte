<script lang="ts">
	import { getAnime, getCharacter } from "../api/get-anime-images";

	export let anime: string;
	export let quote: string;
	export let character: string;

	const animeResult = getAnime(anime);
	const characterResult = getCharacter(character);
</script>

<div class="w-full lg:max-w-full lg:flex py-2">
	{#await animeResult then img}
		<div
			class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
			style="background-image: url({img})"
			title="Mountain"
		/>
	{/await}

	<div
		class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
	>
		<div class="mb-8">
			<div class="text-gray-900 font-bold text-xl mb-2">
				{anime}
			</div>
			<p class="text-gray-700 text-base">
				{quote}
			</p>
		</div>
		<div class="flex items-center">
			{#await characterResult then c}
				<img
					class="w-10 h-10 rounded-full mr-4"
					src={c}
					alt={character}
				/>
			{/await}

			<div class="text-sm">
				<p class="text-gray-900 leading-none">{character}</p>
			</div>
		</div>
	</div>
</div>
