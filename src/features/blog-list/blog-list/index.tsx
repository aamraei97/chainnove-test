import { TOTAL_PAGES } from "@/config/site-config";
import { BlogPost } from "@/types/globals";
import { getBlogPosts } from "./get-posts";

import { PaginationBuilder } from "@/components/shared/pagination-builder";
import { BlogCard } from "@/features/blog-list/blog-card";
import { FetchErrorAlert } from "@/components/shared/fetch-error-alert";


type Props = {
	page: string;
};

export async function BlogList({ page }: Props) {
	const posts = await getBlogPosts({ page: page || "1" });

	// early returns are recommended because it help with readability
	if (posts.status === "error") {
		return (
			<FetchErrorAlert error={posts.error} />
		)
	}

	return (
		<>
			{posts.status === "success" && posts.data.length > 0 && (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{posts.data.map((post: BlogPost) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>

					<PaginationBuilder
						currentPage={parseInt(page || "1")}
						totalPages={TOTAL_PAGES}
					/>
				</>
			)}

		</>
	);
}
