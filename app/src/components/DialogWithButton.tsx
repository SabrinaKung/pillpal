import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface IDialogWithButtonProps {
  buttonText: string;
  title: string;
  description: object;
}

export default function DialogWithButton({
  buttonText,
  title,
  description,
}: IDialogWithButtonProps) {
  Object.entries(description).map(([key, values]) => console.log(key, values));

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>{buttonText}</Button>
        </DialogTrigger>
        <DialogContent className="w-[90vw] min-h-[50vh] rounded-xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="text-left">
              {Object.entries(description).map(([key, values]) =>
                !Array.isArray(values) ? null : (
                  <div key={key}>
                    <strong>{key}:</strong>
                    <ul>
                      {values.map((value: string, index: number) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
