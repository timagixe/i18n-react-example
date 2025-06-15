"use client";

import { defineMessages, useIntl } from "react-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Wind, AlertTriangle } from "lucide-react";

const messages = defineMessages({
    title: {
        id: "weather.title",
        defaultMessage: "Weather",
    },
    temperature: {
        id: "weather.temperature",
        defaultMessage: "Current temperature: {temp}°C in {city}",
    },
    feelsLike: {
        id: "weather.feels_like",
        defaultMessage: "Feels like {temp}°C",
    },
    humidity: {
        id: "weather.humidity",
        defaultMessage: "Humidity: {humidity}%",
    },
    wind: {
        id: "weather.wind",
        defaultMessage: "Wind: {speed} km/h",
    },
    alerts: {
        id: "weather.alerts",
        defaultMessage: "{count, plural, =0 {No weather alerts} =1 {1 weather alert} other {# weather alerts}}",
    },
    upgrade: {
        id: "currency.upgrade",
        defaultMessage: "Upgrade to Premium for {price}",
    },
});

export function WeatherSection() {
    const intl = useIntl();

    // Mock weather data
    const weatherData = {
        temperature: 22,
        feelsLike: 25,
        humidity: 65,
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
                    {intl.formatMessage(messages.title)}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <p className="text-lg font-medium">
                            {intl.formatMessage(messages.temperature, {
                                temp: intl.formatNumber(weatherData.temperature),
                                city: weatherData.city,
                            })}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {intl.formatMessage(messages.feelsLike, {
                                temp: intl.formatNumber(weatherData.feelsLike),
                            })}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4" />
                            {intl.formatMessage(messages.humidity, {
                                humidity: intl.formatNumber(weatherData.humidity),
                            })}
                        </div>
                        <div className="flex items-center gap-2">
                            <Wind className="h-4 w-4" />
                            {intl.formatMessage(messages.wind, {
                                speed: intl.formatNumber(weatherData.windSpeed),
                            })}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">
                                {intl.formatMessage(messages.alerts, { count: weatherData.alerts })}
                            </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                            {intl.formatMessage(messages.upgrade, { price: upgradePrice })}
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
