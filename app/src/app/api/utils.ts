export const BACKEND_ENDPOINT = "https://reqbin.com/echo";

export function test() {
  return fetch("/api");
}

export function uploadPhoto(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  return fetch("/api", {
    method: "POST",
    body: formData,
  });
}
