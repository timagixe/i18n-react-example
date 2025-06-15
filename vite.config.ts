import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                babelrc: true,
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
