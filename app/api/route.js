export function GET(request) {
  console.log(request);
  // Checn on localhost:3000/api
  return new Response("Hello");
}
