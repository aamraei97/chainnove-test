import { BlogPostComment } from "@/types/globals";

type Props = {
  comment: BlogPostComment;
};

export function BlogDetailCommentsItem({ comment }: Props) {
  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="text-sm font-bold">{comment.name}</div>
        <div className="text-sm text-gray-500">{comment.email}</div>
      </div>
      <div className="text-sm text-gray-500">{comment.body}</div>
    </div>
  );
}
