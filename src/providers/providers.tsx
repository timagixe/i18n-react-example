import { DirectionProvider } from "./direction";
import { I18NProvider } from "./i18n";
import { RouterProvider } from "./router/router-provider";
import { ThemeProvider } from "./theme";

export function Providers() {
    return (
        <I18NProvider>
            <DirectionProvider>
                <ThemeProvider>
                    <RouterProvider />
                </ThemeProvider>
            </DirectionProvider>
        </I18NProvider>
    );
}
