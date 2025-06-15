import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, NotFoundPage } from "@/pages";
import { RootLayout } from "@/components/root-layout";
import { ThemeProvider } from "./theme-provider";
import { DirectionProvider } from "./direction-provider";
import { I18NProvider } from "./i18n/i18n-provider";
import { LocaleProvider } from "./locale";

const router = createBrowserRouter([
    {
        element: (
            <LocaleProvider>
                <I18NProvider>
                    <ThemeProvider>
                        <DirectionProvider>
                            <RootLayout />
                        </DirectionProvider>
                    </ThemeProvider>
                </I18NProvider>
            </LocaleProvider>
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export function RouterProvider() {
    return <ReactRouterProvider router={router} />;
}
