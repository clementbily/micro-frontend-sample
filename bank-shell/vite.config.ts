// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default {
    plugins: [
        federation({
            
            name: 'host-app',
            remotes: {
                "bank-account": "http://localhost:5175/assets/remoteEntry.js",
                "bank-accounts": "http://localhost:5174/assets/remoteEntry.js",
            }
        })
    ],
    build: {
      emptyOutDir: false,
      outDir: "dist",
    },
}