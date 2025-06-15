import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="mb-4">Page not found</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go back home
            </Link>
        </div>
    );
}
