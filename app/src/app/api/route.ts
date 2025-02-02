import { BACKEND_ENDPOINT } from "./utils";

export async function GET() {
  const res = await fetch(`${BACKEND_ENDPOINT}/get/json`);
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request: Request) {
  const res = await fetch(`${BACKEND_ENDPOINT}/post/json`, {
    method: "POST",
    body: JSON.stringify({ data: await request.json() }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
