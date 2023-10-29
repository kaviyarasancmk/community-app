<script>
    import Hero from "./components/hero.svelte"
	import Navbar from './components/navbar.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<Navbar />

	<Hero />
</div>
