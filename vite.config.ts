import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Meet_Masazumi/', // GitHub Pages 用にベースパスを設定
  build: {
    target: "node16", // Node.js 16 以降で動作するようにする
    outDir: "dist", // 出力フォルダを dist に指定
    rollupOptions: {
      input: {
        client: "index.html", // フロントエンドのエントリーポイント
        server: "server/index.js", // サーバーのエントリーポイント
      },
      output: {
        format: "esm", // ESM 形式で出力
      },
      external: ["express"], // Express をバンドルしない
    },
  },
})
