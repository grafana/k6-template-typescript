import esbuild from "rollup-plugin-esbuild";
import path from "path";
import { glob } from "glob";

const configs = [];

const files = await glob("src/*test*.ts");

for (const file of files) {
  configs.push({
    input: file,
    output: {
      dir: "dist",
      format: "commonjs",
      exports: "named",
    },
    plugins: [esbuild()],
    external: [
      "k6",
      "k6/options",
      "k6/http",
      "https://jslib.k6.io/k6-utils/1.1.0/index.js",
    ],
  });
}

export default configs;
