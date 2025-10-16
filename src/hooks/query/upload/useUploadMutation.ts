import postChat from "@/requests/upload/postChat";
import type {
  TPostChatRequestData,
  TPostChatResponseData,
} from "@/requests/upload/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useUploadMutation = ({
  options,
}: {
  options: UseMutationOptions<
    TPostChatResponseData,
    Error,
    TPostChatRequestData
  >;
}) =>
  useMutation({
    mutationFn: async (data: TPostChatRequestData) => {
      const response = await postChat(data);
      return response.data.data;
    },
    ...options,
  });
