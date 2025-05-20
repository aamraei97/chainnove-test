"use client";

import { useGetBlogPostComments } from "@/services/blog/get-blog-post-comments";
import { BlogDetailCommentsItem } from "./blog-detail-comments-item";
type Props = {
  postId: number;
};

export function BlogDetailComments({ postId }: Props) {
  const { data: comments } = useGetBlogPostComments({
    postId,
  });

  return (
    <div className="container max-w-[900px] w-full grid gap-2">
      {comments.map((comment) => (
        <BlogDetailCommentsItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
