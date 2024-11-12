import * as elements from "typed-html";

export const Document = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <title>HTMX</title>
  <link id="favicon" rel="icon" href="https://web.dev/images/favicon.ico" type="image/x-icon">

  <!-- htmlx -->
  <script src="https://unpkg.com/htmx.org@1.9.8"></script>
  <script src="https://unpkg.com/htmx.org/dist/ext/sse.js"></script>
  <script src="https://unpkg.com/htmx.org/dist/ext/ws.js"></script>

  <!-- mustache for client-side templates and support for JSON responses --> 
  <script src="https://unpkg.com/htmx.org/dist/ext/client-side-templates.js"></script>
  <script src="https://unpkg.com/mustache@latest"></script>

  <!-- daisyUI and Tailwind -->
  <link href="https://cdn.jsdelivr.net/npm/daisyui@3.9.4/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
${children}
</html>
`;
