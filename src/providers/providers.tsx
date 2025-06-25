import { RouterProvider } from "./router/router-provider";
import { ThemeProvider } from "./theme";

export function Providers() {
    return (
        <ThemeProvider>
            <RouterProvider />
        </ThemeProvider>
    );
}
