<script>
    import Hero from "./_components/hero/index.svelte"
	import Navbar from './_components/navbar/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<Navbar />

	<Hero />
</div>