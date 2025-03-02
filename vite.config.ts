import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 環境変数を使って base を切り替え
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],

  // 開発時は "/", 本番環境では "/Meet_Masazumi/" に設定
  base: isProduction ? "/Meet_Masazumi/" : "/",

  build: {
    target: "node16", // Node.js 16 以上で動作するように指定
    outDir: "dist", // ビルドしたファイルの出力ディレクトリ

    rollupOptions: {
      input: {
        client: "index.html", // フロントエンドのエントリーポイント
      },
      output: {
        format: "esm", // ESM（ES Modules）形式で出力
      },
      external: ["express"], // Express をバンドルしない
    },
  },
});
