"use client";

import Header from "@/components/TopHeader";
import PhotoUpload from "@/components/PhotoUpload";
import Details from "@/components/Details";
import { useState } from "react";
import { DetailsObj } from "@/lib/utils";
import LandingPage from "@/components/LandingPage";

const defaultDetails: DetailsObj = {
  description:
    "Hydrocodone and acetaminophen is a combination medicine used to relieve moderate to severe pain. ",
  interactions: { "moderate interactions": {} },
  sideEffects: { Test: ["Loading..."] },
  imgUrl: "https://www.drugs.com/images/pills/nlm/675440670.jpg",
};

export default function Home() {
  const [page, setPage] = useState("landing");
  const [details, setDetails] = useState(defaultDetails);

  const handlePhotoUploaded = (data: DetailsObj) => {
    setDetails(data);
    setPage("details");
  };
  if (page === "landing") {
    return <LandingPage onNextPage={() => setPage("home")} />;
  } else if (page === "home") {
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
