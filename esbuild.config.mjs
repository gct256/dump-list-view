// eslint-disable-next-line import/no-extraneous-dependencies
import esbuildServe from "esbuild-serve";

const dist = process.env.NODE_ENV === "production";

if (!dist) {
  esbuildServe(
    {
      entryPoints: ["./example/example.tsx"],
      bundle: true,
      outfile: "./example/example.js",
      platform: "browser",
      target: "esnext",
      define: {
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV ?? "development",
        ),
      },
      minify: false,
      sourcemap: true,
    },
    {
      port: 3030,
      root: "./example",
    },
  );
}
