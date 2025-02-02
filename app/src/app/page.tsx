import Header from "@/components/TopHeader";
import PhotoUpload from "@/components/PhotoUpload";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <PhotoUpload />
    </div>
  );
}
