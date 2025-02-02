"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { uploadPhoto } from "@/app/api/utils";
import { DetailsObj } from "@/lib/utils";
import Compressor from "compressorjs";

interface IPhotoUploadProps {
  onPhotoUploaded: (res: DetailsObj) => void;
}

export default function PhotoUpload({ onPhotoUploaded }: IPhotoUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      new Compressor(file, {
        quality: 0.5,
        success(result) {
          setSelectedFile(result as File);
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result as string);
          };
          reader.readAsDataURL(result);
        },
      });
    }
  };

  useEffect(() => {
    if (selectedFile) {
      uploadPhoto(selectedFile).then((res) => {
        onPhotoUploaded(res);
      });
    }
  }, [onPhotoUploaded, selectedFile]);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg h-[75vh]">
      {preview && (
        <Image src={preview} alt="Preview" width={350} height={350} />
      )}
      <>
        <label htmlFor="upload-photo" className="custom-file-label">
          <Image
            src="/camera-icon.png"
            alt="Camera Icon"
            width={128}
            height={128}
          ></Image>
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="upload-photo"
        />
      </>
    </div>
  );
}
