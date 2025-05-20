import { BlogListHero } from "@/features/blog-list/blog-list-hero";
import { Suspense } from "react";
import { BlogList } from "@/features/blog-list/blog-list";

type Props = {
  searchParams: { page: string };
};

export default async function Blog({ searchParams }: Props) {
  const { page } = searchParams;

  return (
    <div className="flex items-center justify-center py-12">
      <div className="container max-w-[900px] flex flex-col gap-12 px-6">

        {/* Ive added the hero section to demonstrate the streaming feature of nextjs */}
        <BlogListHero />

        <Suspense fallback={<div>Loading...</div>}>
          <BlogList page={page} />
        </Suspense>
      </div>
    </div>
  );
}
