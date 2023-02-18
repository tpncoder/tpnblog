<script>
	import { Card } from "flowbite-svelte";

	const imageModules = import.meta.glob("../../../static/articles/*.md");
</script>

{#each Object.entries(imageModules) as [title, paragraph]}
	<Card class='flex m-auto mb-5 mt-5'>	
		<a href={title.slice(25).replace('.md', '').replace(' ', '-')}>{title.slice(25).replace('.md', '')}</a>
	</Card>	
{/each}
