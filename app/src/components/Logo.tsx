import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 mt-[-15] mr-[-15] transform rotate-45">
        <Image src="/mock-logo.png" alt="Logo" height={100} width={100} />
      </div>
    </div>
  );
}
