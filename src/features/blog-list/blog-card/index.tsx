import Link from "next/link";

import { BlogPost } from "@/types/globals";

import { BlogCardImage } from "./blog-card-image";
import { BlogCardContent } from "./blog-card-content";

type Props = {
  post: BlogPost;
};

export function BlogCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col gap-4 transition-all duration-300 hover:shadow-md"
    >
      <BlogCardImage
        imagePath={`https://picsum.photos/400/250?random=${post.id}`}
        postTitle={post.title}
      />
      <BlogCardContent
        title={post.title}
        body={post.body}
      />
    </Link>
  );
}
