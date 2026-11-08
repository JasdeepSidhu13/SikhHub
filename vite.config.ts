import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const isPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isPages ? "/SikhHub/" : "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  plugins: [
    {
      name: "spa-github-pages",
      closeBundle() {
        const index = resolve("dist/index.html");
        if (existsSync(index)) copyFileSync(index, resolve("dist/404.html"));
      },
    },
  ],
});
