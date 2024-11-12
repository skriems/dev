import * as elements from "typed-html";
import { Document } from "../../../Document";
import { Header } from "~/components";

const templateString = "<span>{{value}}</span>";

export const ServerSideEventsPage = () => (
  <Document>
    <body class="flex flex-col justify-center items-center space-y-6">
      <Header />
      <h1 class="text-2xl">Server Side Events</h1>
      <div
        class="toast toast-bottom toast-end"
        hx-ext="sse"
        sse-connect="/api/events"
      >
        <div class="alert alert-info flex flex-col">
          <strong class="text-start">News</strong>
          <div
            class="flex gap-4 p-2 items-center justify-center"
            sse-swap="news"
          >
            <span class="loading loading-spinner loading-md"></span>
            waiting for news
          </div>
        </div>
      </div>
      <div
        class="mockup-code"
        hx-ext="client-side-templates,sse"
        sse-connect="/api/jokes"
      >
        <div
          class="flex gap-4 p-4"
          hx-get="https://api.chucknorris.io/jokes/random"
          hx-trigger="sse:new-joke"
          hx-swap="innerHTML"
          mustache-template="joke-template"
        >
          <span class="loading loading-spinner loading-md"></span>
          <span>waiting for a new joke</span>
        </div>
        <template id="joke-template">{templateString}</template>
      </div>
    </body>
  </Document>
);
