export type TPostChatRequestData = FormData;

export type TPostChatResponseData = {
  id: number;
  uuid: string;
  chat_name: string;
  is_active: boolean;
  created_dtm: string;
  updated_dtm: string;
};
