import { POSTS_PER_PAGE } from "@/config/site-config";
import { REVALIDATE_TAGS, REVALIDATE_TIMES } from "@/config/native-fetch-config";
import { BlogPost } from "@/types/globals";

type FetchBlogPostsResponse = {
	status: "success",
	data: BlogPost[],
} | {
	status: "error",
	error: string,
}

export async function getBlogPosts({ page }: { page: string }): Promise<FetchBlogPostsResponse> {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`,
			{
				next: {
					revalidate: REVALIDATE_TIMES.blogPosts,
					tags: [REVALIDATE_TAGS.blogPosts],
				},
			}
		);

		// slow down the api response to test the streaming feature of nextjs only for page 1
		if (page === "1") {
			await new Promise(resolve => setTimeout(resolve, 1000));
		}

		
		const data = await res.json();
		if (res.ok) {
			return {
				status: "success",
				data: data as BlogPost[],
			}
		} else {
			return {
				status: "error",
				error: "Failed to fetch blog posts",
			}
		}
	} catch (error) {
		if(error instanceof Error) {
			return {
				status: "error",
				error: error.message,
			}
		}
		return {
			status: "error",
			error: "Failed to fetch blog posts",
		}
	}
}