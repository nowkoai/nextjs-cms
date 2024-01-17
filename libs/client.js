import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-nextnow",
  apiKey: process.env.API_KEY,
});