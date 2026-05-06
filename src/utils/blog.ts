import { getCollection, type CollectionEntry } from 'astro:content';
import { groupPostsBy, toTaxonomySlug } from './taxonomy';
export type BlogPost = CollectionEntry<'blog'>;
export { groupPostsBy, toTaxonomySlug } from './taxonomy';

export async function getPublishedPosts() {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostBySlug(slug: string) {
	return (await getCollection('blog')).find((post) => post.id === slug);
}

export async function getPublishedPostSlugs() {
	return (await getPublishedPosts()).map((post) => post.id);
}

export function getCategoryHref(category: string) {
	return `/categories/${toTaxonomySlug(category)}/`;
}

export function getTagHref(tag: string) {
	return `/tags/${toTaxonomySlug(tag)}/`;
}

export function getPostHref(post: Pick<BlogPost, 'id'>) {
	return `/blog/${post.id}/`;
}

export function groupPostsByYear(items: BlogPost[]) {
	const map = new Map<number, BlogPost[]>();

	for (const post of items) {
		const year = post.data.pubDate.getFullYear();
		const current = map.get(year) ?? [];
		current.push(post);
		map.set(year, current);
	}

	return [...map.entries()]
		.map(([year, posts]) => ({
			year,
			count: posts.length,
			posts: posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()),
		}))
		.sort((a, b) => b.year - a.year);
}
