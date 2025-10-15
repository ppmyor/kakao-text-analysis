import Button from "@/components/common/Button";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function UploadSection() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-100">
      <div className="relative">
        <ChatBubbleLeftEllipsisIcon className="absolute right-[-15px] bottom-5 size-6 lg:right-[-20px] lg:bottom-6 lg:size-7" />
        <p className="text-body-16 lg:text-body-20 text-gray-700">
          카카오톡 대화내역 파일을 업로드해주세요.
        </p>
      </div>
      <input type="file" id="upload-file" accept=".txt" className="hidden" />
      <label htmlFor="upload-file">
        <Button
          type="button"
          size="medium"
          rounded="2xl"
          className="pointer-events-none w-fit"
        >
          Upload
        </Button>
      </label>
    </div>
  );
}
