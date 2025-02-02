import { DetailsObj } from "@/lib/utils";
export function test() {
  return fetch("/api");
}

export async function uploadPhoto(file: File): Promise<DetailsObj> {
  // transform file to base64
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const base64data = await new Promise<string>((resolve) => {
    reader.onloadend = () => {
      const base64 = reader.result as string;
      resolve(base64);
    };
  });

  // send request to server
  const response = await fetch("/api", {
    method: "POST",
    body: JSON.stringify({ file: base64data }),
  });
  if (!response.ok) {
    throw new Error("Failed to upload photo");
  }

  const result: DetailsObj = await response.json();
  return result;
}

// export async function uploadPhotoTest(file: File): Promise<DetailsObj> {
//   // transform file to base64
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   const base64data = await new Promise<string>((resolve) => {
//     reader.onloadend = () => {
//       const base64 = reader.result as string;
//       resolve(base64);
//     };
//   });

//   // send request to server
//   const response = await fetch("/api", {
//     method: "GET",
//   });
//   if (!response.ok) {
//     throw new Error("Failed to upload photo");
//   }

//   const result: DetailsObj = await response.json();
//   return result;
// }
