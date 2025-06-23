import { FormattedMessage } from "react-intl";
import { messages } from "./messages";

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
