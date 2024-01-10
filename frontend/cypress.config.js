import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 1000000,
  e2e: {
    baseUrl: 'https://ppl2-sip.vercel.app/',
  },
})
