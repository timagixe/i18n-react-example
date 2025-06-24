import { RouterProvider as ReactRouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, NotFoundPage } from "@/pages";
import { RootLayout } from "@/components/root-layout";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
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
