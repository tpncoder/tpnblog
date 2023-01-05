<script>
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
		
	let slug = $page.params.slug;
</script>

<h1 class='text-center text-6xl text-black dark:text-white mt-5'>{$page.params.slug}</h1>
<p class='relative left-[25%] text-xl mt-7 w-2/4 text-justif text-black dark:text-white leading-10 mb-6'>{@html $page.data.item}</p>
