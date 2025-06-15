import { Outlet } from "react-router-dom";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
