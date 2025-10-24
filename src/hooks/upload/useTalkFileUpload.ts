import { useState } from "react";
import { useUploadMutation } from "@/hooks/query/upload/useUploadMutation";

interface UseFileUploadHook {
  currentFile: File | null;
  isPending: boolean;
  handleFileInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUpload: () => void;
  handleFileDelete: () => void;
}

export default function useTalkFileUpload(): UseFileUploadHook {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const { mutate: postChat, isPending } = useUploadMutation({
    options: {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setCurrentFile(file);
    }
  };

  const handleFileUpload = () => {
    if (currentFile) {
      const formData = new FormData();
      formData.append("uploadfile", currentFile);

      postChat(formData);
      setCurrentFile(null);
    }
  };

  const handleFileDelete = () => {
    setCurrentFile(null);
  };

  return {
    currentFile,
    isPending,
    handleFileInput,
    handleFileUpload,
    handleFileDelete,
  };
}
