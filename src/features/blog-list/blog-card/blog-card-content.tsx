
type Props = {
  title: string;
  body: string;
};
export function BlogCardContent({ title, body }: Props) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <h2 className="text-2xl font-bold line-clamp-2">{title}</h2>
      <p className="text-gray-600 line-clamp-4">{body}</p>
    </div>
  );
}
