export function AboutPage() {
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>

            <div className="space-y-4">
                <p>This is the about page of our application.</p>

                <div className="bg-muted p-4 rounded-lg">
                    <div className="space-y-3">
                        <p>
                            Welcome to{" "}
                            <span className="bg-yellow-800 px-1 rounded">
                                Sunny Beach Weather Club
                            </span>
                            ! We're a <strong className="font-bold">leading weather service</strong>{" "}
                            dedicated to providing <em className="italic">accurate and reliable</em>{" "}
                            weather information. You can visit our{" "}
                            <a
                                href="https://example.com"
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                main website
                            </a>{" "}
                            for more details about our services.
                        </p>

                        <p>
                            Our key services include{" "}
                            <strong className="font-semibold">real-time weather updates</strong>,{" "}
                            <strong className="font-semibold">detailed forecasts</strong>, and{" "}
                            <strong className="font-semibold">weather alerts</strong> to keep you
                            informed and safe.
                        </p>

                        <div className="p-3 rounded border">
                            Get in touch with us:{" "}
                            <a
                                href="mailto:contact@sunnybeachweather.com"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                contact@sunnybeachweather.com
                            </a>{" "}
                            |{" "}
                            <a
                                href="tel:+15551234567"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                +1 (555) 123-4567
                            </a>{" "}
                            | Visit our{" "}
                            <a
                                href="https://example.com"
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
