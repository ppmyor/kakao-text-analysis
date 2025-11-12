import { AxiosResponse } from "axios";
import { URL_API_CHAT } from "@/requests/constants";
import request from "@/requests/request";
import type { TResponseData } from "@/requests/types";
import type {
  TPostChatRequestData,
  TPostChatResponseData,
} from "@/requests/upload/types";

type TPostChatResponse = TResponseData<TPostChatResponseData>;

export default function postChat(
  uploadfile: TPostChatRequestData,
): Promise<AxiosResponse<TPostChatResponse>> {
  const url = URL_API_CHAT;
  return request.post<TPostChatResponse>(url, uploadfile, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
