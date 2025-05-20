import Image from "next/image";

type Props = {
  imagePath: string;
  postTitle: string;
};
export function BlogCardImage({ imagePath, postTitle }: Props) {
  return (
    <div className="flex h-[200px] relative">
      <Image
        src={imagePath}
        alt={postTitle}
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}
