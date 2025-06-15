import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, NotFoundPage } from "@/pages";
import { RootLayout } from "@/components/root-layout";
import { ThemeProvider } from "./theme-provider";
import { DirectionProvider } from "./direction-provider";

const router = createBrowserRouter([
    {
        element: (
            <ThemeProvider>
                <DirectionProvider>
                    <RootLayout />
                </DirectionProvider>
            </ThemeProvider>
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
