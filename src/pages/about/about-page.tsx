import { FormattedMessage } from "react-intl";
import { messages } from "./messages";

export function AboutPage() {
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold mb-4">
                <FormattedMessage {...messages.title} />
            </h1>

            <div className="space-y-4">
                <p>
                    <FormattedMessage {...messages.description} />
                </p>

                <div className="bg-muted p-4 rounded-lg">
                    <div className="space-y-3">
                        <p>
                            <FormattedMessage
                                {...messages.welcomeMessage}
                                values={{
                                    company: "Sunny Beach Weather Club",
                                    link: (chunks) => (
                                        <a
                                            href="https://example.com"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {chunks}
                                        </a>
                                    ),
                                    bold: (chunks) => (
                                        <strong className="font-bold">{chunks}</strong>
                                    ),
                                    italic: (chunks) => <em className="italic">{chunks}</em>,
                                    highlight: (chunks) => (
                                        <span className="bg-yellow-800   px-1 rounded">
                                            {chunks}
                                        </span>
                                    ),
                                }}
                            />
                        </p>

                        <p>
                            <FormattedMessage
                                {...messages.featureList}
                                values={{
                                    feature1: (chunks) => (
                                        <strong className="font-semibold">{chunks}</strong>
                                    ),
                                    feature2: (chunks) => (
                                        <strong className="font-semibold">{chunks}</strong>
                                    ),
                                    feature3: (chunks) => (
                                        <strong className="font-semibold">{chunks}</strong>
                                    ),
                                }}
                            />
                        </p>

                        <div className="p-3 rounded border">
                            <FormattedMessage
                                {...messages.contactInfo}
                                values={{
                                    email: (chunks) => (
                                        <a
                                            href="mailto:contact@sunnybeachweather.com"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            {chunks}
                                        </a>
                                    ),
                                    phone: (chunks) => (
                                        <a
                                            href="tel:+15551234567"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            {chunks}
                                        </a>
                                    ),
                                    website: (chunks) => (
                                        <a
                                            href="https://example.com"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {chunks}
                                        </a>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
