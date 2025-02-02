import { DetailsObj } from "@/lib/utils";
interface IDetailsProps {
  data: DetailsObj;
}

export default function Details({ data }: IDetailsProps) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Details</h1>
      {data.description + " " + data.interactions + " " + data.sideEffects}
    </div>
  );
}
