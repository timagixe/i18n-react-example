import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";

export function NotFoundPage() {
    return (
        <div className="p-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
                <FormattedMessage {...messages.title} />
            </h1>
            <p className="mb-4">
                <FormattedMessage {...messages.message} />
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
                <FormattedMessage {...messages.homeLink} />
            </Link>
        </div>
    );
}
