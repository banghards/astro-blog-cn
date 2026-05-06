export type TaxonomyKey = 'category' | 'tags';

type TaxonomySource = {
	data: {
		category: string;
		tags: string[];
	};
};

type TaxonomyGroup<T> = {
	name: string;
	slug: string;
	count: number;
	posts: T[];
};

export function toTaxonomySlug(value: string) {
	return value
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-');
}

export function groupPostsBy<T extends TaxonomySource>(
	items: T[],
	key: TaxonomyKey,
): TaxonomyGroup<T>[] {
	const map = new Map<string, TaxonomyGroup<T>>();

	for (const post of items) {
		const values = key === 'category' ? [post.data.category] : post.data.tags;
		for (const value of values) {
			const slug = toTaxonomySlug(value);
			const current = map.get(slug);

			if (current) {
				current.posts.push(post);
				current.count += 1;
				continue;
			}

			map.set(slug, {
				name: value,
				slug,
				count: 1,
				posts: [post],
			});
		}
	}

	return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh-CN'));
}
