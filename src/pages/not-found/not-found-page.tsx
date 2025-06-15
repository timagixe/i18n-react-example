import { Link } from "react-router-dom";
import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
    title: {
        description: "The 404 error title",
        defaultMessage: "404",
    },
    message: {
        description: "The 404 error message",
        defaultMessage: "Page not found",
    },
    homeLink: {
        description: "The link text to return to home page",
        defaultMessage: "Go back home",
    },
});

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
