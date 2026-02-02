import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  base: '/hermatch_svelte/',
  plugins: [svelte()],
});
