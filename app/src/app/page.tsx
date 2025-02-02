"use client";

import Header from "@/components/TopHeader";
import PhotoUpload from "@/components/PhotoUpload";
import Details from "@/components/Details";
import { useState } from "react";
import { DetailsObj } from "@/lib/utils";

const defaultDetails: DetailsObj = {
  description: "Loading...",
  interactions: "Loading...",
  sideEffects: "Loading...",
};

export default function Home() {
  const [page, setPage] = useState("home");
  const [details, setDetails] = useState(defaultDetails);

  const handlePhotoUploaded = (data: DetailsObj) => {
    setDetails(data);
    setPage("details");
  };
  if (page === "home") {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <Header />
        <PhotoUpload onPhotoUploaded={handlePhotoUploaded} />
      </div>
    );
  } else if (page === "details") {
    return <Details data={details} />;
  }
}
