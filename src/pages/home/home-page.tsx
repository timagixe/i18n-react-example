import { FeedbackForm } from "./feedback-form";
import { CalendarSection } from "./calendar-section";
import { NewsSection } from "./news-section";
import { WeatherSection } from "./weather-section";
import { GreetingSection } from "./greeting-section";

export function HomePage() {
    return (
        <div className={`min-h-screen transition-colors duration-300`}>
            <div className="container mx-auto p-4 space-y-6">
                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Greeting Section */}
                    <GreetingSection />

                    {/* Weather Section */}
                    <WeatherSection />

                    {/* News Section */}
                    <NewsSection />

                    {/* Calendar Section */}
                    <CalendarSection />
                </div>

                {/* Feedback Form - Full Width */}
                <FeedbackForm />
            </div>
        </div>
    );
}
