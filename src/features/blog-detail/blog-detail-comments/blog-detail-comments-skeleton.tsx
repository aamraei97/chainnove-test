export function BlogDetailCommentsSkeleton() {
  return (
    <div className="grid gap-2 container max-w-[900px] w-full">
      {Array.from({ length: 3 }).map((_, index) => (
        <BlogDetailCommentsSkeletonItem key={index} />
      ))}
    </div>
  );
}
function BlogDetailCommentsSkeletonItem() {
  return (
    <div className="w-full h-24 bg-gray-200 rounded-lg animate-pulse"></div>
  );
}
