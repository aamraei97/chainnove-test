import Link from "next/link";
import { Suspense } from "react";

import { BlogDetailComments } from "@/features/blog-detail/blog-detail-comments";
import { BlogDetailCommentsSkeleton } from "@/features/blog-detail/blog-detail-comments/blog-detail-comments-skeleton";
import { BlogDetailHero } from "@/features/blog-detail/blog-detail-hero";
import { Button } from "@/components/ui/button";
 
type Props = {
  params: {
    postId: string;
  };
};
export default function BlogPostCommentsPage({ params }: Props) {
  return (
    <div className="flex flex-col gap-12 items-center justify-center pt-20">
      <Button variant="outline" size="lg" asChild>
        <Link href="/blog">Back to blog</Link>
      </Button>
      
      <BlogDetailHero />

      {/* i ve slowed down the api to demonstrate the usage of react query useSuspense query hook and the fallback prop */}
      <Suspense fallback={<BlogDetailCommentsSkeleton />}>
        <BlogDetailComments postId={Number(params.postId)} />
      </Suspense>
    </div>
  );
}
