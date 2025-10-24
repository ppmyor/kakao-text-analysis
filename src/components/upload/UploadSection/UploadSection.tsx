"use client";

import ClipLoader from "react-spinners/ClipLoader";
import {
  ChatBubbleLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import useTalkFileUpload from "@/hooks/upload/useTalkFileUpload";
import Button from "@/components/common/Button";

export default function UploadSection() {
  const {
    currentFile,
    isPending,
    handleFileInput,
    handleFileUpload,
    handleFileDelete,
  } = useTalkFileUpload();

  if (isPending) {
    return (
      <div className="flex h-full items-center justify-center">
        <ClipLoader size={50} color="var(--color-amber-500)" />
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-100">
      <div className="relative">
        <ChatBubbleLeftEllipsisIcon className="absolute right-[-15px] bottom-5 size-6 lg:right-[-20px] lg:bottom-6 lg:size-7" />
        <p className="text-body-16 lg:text-body-20 text-gray-700">
          카카오톡 대화내역 파일을 업로드해주세요.
        </p>
      </div>
      <form>
        {currentFile === null ? (
          <div>
            <input
              type="file"
              id="upload-file"
              accept=".txt, .csv"
              className="hidden"
              onChange={handleFileInput}
            />
            <label htmlFor="upload-file" aria-label="Upload file">
              <Button
                type="button"
                size="medium"
                rounded="2xl"
                className="pointer-events-none w-fit"
              >
                파일 업로드
              </Button>
            </label>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-1">
              <p className="text-caption-14">{currentFile.name}</p>
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleFileDelete}
              >
                <XMarkIcon className="size-4" />
              </button>
            </div>
            <Button
              type="button"
              size="medium"
              rounded="2xl"
              className="w-fit cursor-pointer"
              onClick={handleFileUpload}
            >
              대화 분석하기
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
