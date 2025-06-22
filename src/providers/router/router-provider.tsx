import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, NotFoundPage } from "@/pages";
import { RootLayout } from "@/components/root-layout";
import { ThemeProvider } from "../theme";
import { DirectionProvider } from "../direction";
import { I18NProvider } from "../i18n";

const router = createBrowserRouter([
    {
        element: (
            <I18NProvider>
                <ThemeProvider>
                    <DirectionProvider>
                        <RootLayout />
                    </DirectionProvider>
                </ThemeProvider>
            </I18NProvider>
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
