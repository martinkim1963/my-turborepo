import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'
import dfs from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dfs({
    entryRoot: resolve(__dirname, "index.ts"),
    insertTypesEntry:true
  })],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "grid",
      fileName: 'index',
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

