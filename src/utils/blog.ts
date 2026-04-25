import { getCollection, type CollectionEntry } from 'astro:content';
export type BlogPost = CollectionEntry<'blog'>;

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

export function toTaxonomySlug(value: string) {
	return value
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-');
}

export function groupPostsBy(items: BlogPost[], key: 'category' | 'tags') {
	const map = new Map<string, BlogPost[]>();

	for (const post of items) {
		const values = key === 'category' ? [post.data.category] : post.data.tags;
		for (const value of values) {
			const current = map.get(value) ?? [];
			current.push(post);
			map.set(value, current);
		}
	}

	return [...map.entries()]
		.map(([name, posts]) => ({
			name,
			slug: toTaxonomySlug(name),
			count: posts.length,
			posts,
		}))
		.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh-CN'));
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
