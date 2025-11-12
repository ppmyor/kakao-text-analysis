import { create } from "zustand/react";
import { devtools } from "zustand/middleware";

interface TalkStore {
  talkUUid: string;
  setTalkUid: (talkUUid: string) => void;
}

const useTalkStore = create<TalkStore>()(
  devtools(
    (set) => ({
      talkUUid: "",
      setTalkUid: (talkUUid: string) => {
        set(() => ({
          talkUUid: talkUUid,
        }));
      },
    }),
    {
      name: "talkStore",
    },
  ),
);

export default useTalkStore;
