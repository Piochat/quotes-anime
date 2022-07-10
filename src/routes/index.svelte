<script>
	import { getAnimeQuotes } from "./api/get-anime-quotes";

	import Quote from "./components/quote.svelte";

	const quotePromise = getAnimeQuotes();
</script>

<svelte:head>
	<title>Quotes</title>
</svelte:head>

<div class="container mx-auto mt-3">
	<h1 class="text-3xl text-center font-bold py-3">Anime Quotes</h1>
	{#await quotePromise then quote}
		<Quote
			anime={quote.anime}
			character={quote.character}
			quote={quote.quote}
		/>
	{/await}
</div>
