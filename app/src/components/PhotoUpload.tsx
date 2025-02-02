"use client";
import Image from "next/image";
import React, { useState } from "react";

const PhotoUpload: React.FC = () => {
  const [, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg h-[75vh]">
      {preview && (
        <Image src={preview} alt="Preview" width={300} height={300} />
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
};

export default PhotoUpload;
