import { useIntl, FormattedMessage } from "react-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Wind, AlertTriangle } from "lucide-react";
import { messages } from "./weather-section.messages";

export function WeatherSection() {
    const intl = useIntl();

    const weatherData = {
        temperature: 22,
        feelsLike: 25,
        humidity: 0.65,
        windSpeed: 12,
        city: "Berlin",
        alerts: 1,
    };

    const upgradePrice = intl.formatNumber(9.99, {
        style: "currency",
        currency: intl.locale === "es" ? "EUR" : intl.locale === "ar" ? "USD" : "USD",
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5" />
                    <FormattedMessage {...messages.title} />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <p className="text-lg font-medium">
                            <FormattedMessage
                                {...messages.temperature}
                                values={{
                                    temp: intl.formatNumber(weatherData.temperature, {
                                        style: "unit",
                                        unit: intl.locale === "en" ? "fahrenheit" : "celsius",
                                    }),
                                    city: weatherData.city,
                                }}
                            />
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <FormattedMessage
                                {...messages.feelsLike}
                                values={{
                                    temp: intl.formatNumber(weatherData.feelsLike, {
                                        style: "unit",
                                        unit: intl.locale === "en" ? "fahrenheit" : "celsius",
                                    }),
                                }}
                            />
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4" />
                            <FormattedMessage
                                {...messages.humidity}
                                values={{
                                    humidity: intl.formatNumber(weatherData.humidity, {
                                        style: "percent",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    }),
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Wind className="h-4 w-4" />
                            <FormattedMessage
                                {...messages.wind}
                                values={{
                                    speed: intl.formatNumber(weatherData.windSpeed, {
                                        style: "unit",
                                        unit: intl.locale === "en" ? "mile-per-hour" : "kilometer-per-hour",
                                    }),
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">
                                <FormattedMessage
                                    {...messages.alerts}
                                    values={{ count: weatherData.alerts }}
                                />
                            </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                            <FormattedMessage
                                {...messages.upgrade}
                                values={{ price: upgradePrice }}
                            />
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
