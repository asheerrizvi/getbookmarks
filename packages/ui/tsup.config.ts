import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/button.tsx", "src/link.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
