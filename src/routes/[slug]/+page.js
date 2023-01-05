export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`../../articles/${params.slug}.md`);
	const item = await res.text();
	console.log( item )

	return { item };
}
