"use client";
import Image from "next/image";
import { DetailsObj } from "@/lib/utils";
// import TopHeader from "./TopHeader";
import DialogWithButton from "./DialogWithButton";

interface IDetailsProps {
  data: DetailsObj;
}

export default function Details({ data }: IDetailsProps) {
  console.log("Details", data);
  return (
    <div className="flexflex-col min-h-screen">
      {/* <TopHeader /> */}
      <div className="p-5 mt-3">
        <h1 className="mb-3 text-3xl font-bold">Summary</h1>
        <Image
          src={data.imgUrl}
          alt="Image"
          width={300}
          height={300}
          className="rounded-lg"
        ></Image>
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.description}
        </p>
        <div className="my-5 flex flex-row space-x-3">
          <DialogWithButton
            buttonText="Interactions"
            title="Interactions"
            description={data.interactions}
          />
          <DialogWithButton
            buttonText="Side Effects"
            title="Side Effects"
            description={data.sideEffects}
          />
        </div>
      </div>
    </div>
  );
}
