import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";

export function RootLayout() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}
