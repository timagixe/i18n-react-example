"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Wind, AlertTriangle } from "lucide-react";

export function WeatherSection() {
    // Mock weather data
    const weatherData = {
        temperature: 22,
        feelsLike: 25,
        humidity: 65,
        windSpeed: 12,
        city: "Berlin",
        alerts: 1,
    };

    const numberFormatter = new Intl.NumberFormat("en");
    const currencyFormatter = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5" />
                    Weather
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <p className="text-lg font-medium">
                            Current temperature: {numberFormatter.format(weatherData.temperature)}°C in {weatherData.city}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Feels like {numberFormatter.format(weatherData.feelsLike)}°C
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4" />
                            Humidity: {numberFormatter.format(weatherData.humidity)}%
                        </div>
                        <div className="flex items-center gap-2">
                            <Wind className="h-4 w-4" />
                            Wind: {numberFormatter.format(weatherData.windSpeed)} km/h
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">
                                {weatherData.alerts === 0
                                    ? "No weather alerts"
                                    : weatherData.alerts === 1
                                      ? "1 weather alert"
                                      : `${weatherData.alerts} weather alerts`}
                            </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                            Upgrade to Premium for {currencyFormatter.format(9.99)}
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
