import { useSuspenseQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils/axios-instance";
import {
  GetBlogPostCommentsRequest,
  GetBlogPostCommentsResponse,
} from "./types";

async function getBlogPostComments(
  args: GetBlogPostCommentsRequest
): Promise<GetBlogPostCommentsResponse> {
  // fake delay to demonstrate fallback
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await axiosInstance.get(`/comments`, {
    params: { ...args },
  });

  return res.data;
}

export function useGetBlogPostComments(args: GetBlogPostCommentsRequest) {
  return useSuspenseQuery<GetBlogPostCommentsResponse, undefined>({
    queryKey: ["get-blog-post-comments", args],
    queryFn: () => getBlogPostComments(args),
    retry: false,
  });
}
