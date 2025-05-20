import { BlogPostComment } from "@/types/globals";

export interface GetBlogPostCommentsRequest {
  postId: number;
}
export type GetBlogPostCommentsResponse = BlogPostComment[];
