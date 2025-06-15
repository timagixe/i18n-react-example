import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
    title: {
        description: "The about page title",
        defaultMessage: "About Us",
    },
    description: {
        description: "The about page description",
        defaultMessage: "This is the about page of our application.",
    },
});

export function AboutPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                <FormattedMessage {...messages.title} />
            </h1>
            <p>
                <FormattedMessage {...messages.description} />
            </p>
        </div>
    );
}
