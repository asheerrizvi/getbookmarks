import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/card.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
