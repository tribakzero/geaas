/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from "path";

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/vitest.setup.ts",
    deps: {
      inline: ["vitest-canvas-mock"],
      optimizer: {
        web: {
          include: ["vitest-canvas-mock"],
        }
      }
    },poolOptions: {
      threads: {
        singleThread: true,
      }
    },
    coverage: {
      provider: "v8",
    }
  }
});
