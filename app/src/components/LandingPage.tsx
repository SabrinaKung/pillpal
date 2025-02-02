"use client";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

interface ILandingPageProps {
  onNextPage: () => void;
}

export default function LandingPage({ onNextPage }: ILandingPageProps) {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg shadow-lg bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-blue-200 px-4 py-2">
          <div className="bg-indigo-500 text-white p-5 rounded-full text-[0.8rem] font-semibold">
            H@B 2025
          </div>
          <p className="text-gray-700 text-sm">
            Sabrina Kung, Charles Hsu, Jun-Kai Man, Christine Yao
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center p-6">
          <div className="w-20 h-20">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold text-indigo-500 mt-4">
            Pillpall
          </h1>
          <p className="text-center text-gray-700 mt-2 px-4">
            Understand and easily identify your own medication
          </p>
          <Button
            className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md"
            onClick={onNextPage}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
