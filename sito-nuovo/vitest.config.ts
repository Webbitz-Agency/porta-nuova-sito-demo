import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    env: {
      // Next's build pipeline normally injects this via webpack DefinePlugin
      // from next.config.ts's trailingSlash setting; Vitest doesn't run that
      // pipeline, so next/link falls back to stripping trailing slashes from
      // resolved hrefs unless this is set explicitly. Keep in sync with
      // next.config.ts's trailingSlash: true.
      __NEXT_TRAILING_SLASH: "true",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
