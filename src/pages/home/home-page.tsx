import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/providers/theme-provider";
import { Globe, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { FeedbackForm } from "./feedback-form";
import { CalendarSection } from "./calendar-section";
import { NewsSection } from "./news-section";
import { WeatherSection } from "./weather-section";
import { GreetingSection } from "./greeting-section";

const locales = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export function HomePage() {
    const [locale, setLocale] = useState("en");
    const { theme, setTheme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300`}>
            <div className="container mx-auto p-4 space-y-6">
                {/* Header */}
                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                <Globe className="h-6 w-6" />
                                My World Dashboard
                            </CardTitle>

                            <div className="flex flex-wrap gap-2">
                                {/* Language Switcher */}
                                <Select value={locale} onValueChange={setLocale}>
                                    <SelectTrigger className="w-40">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {locales.map((locale) => (
                                            <SelectItem key={locale.code} value={locale.code}>
                                                <span className="flex items-center gap-2">
                                                    <span>{locale.flag}</span>
                                                    <span>{locale.name}</span>
                                                </span>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Theme Switcher */}
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                    className="flex items-center gap-2"
                                >
                                    {theme === "light" ? (
                                        <Moon className="h-4 w-4" />
                                    ) : (
                                        <Sun className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                </Card>

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
