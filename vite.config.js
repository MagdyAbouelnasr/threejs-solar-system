import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/threejs-solar-system/",
  publicDir: "../static", 
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
