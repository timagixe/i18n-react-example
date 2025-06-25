import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Wind, AlertTriangle } from "lucide-react";

export function WeatherSection() {
    const weatherData = {
        temperature: 22,
        feelsLike: 25,
        humidity: 0.65,
        windSpeed: 12,
        city: "Berlin",
        alerts: 1,
    };

    const upgradePrice = "$9.99";

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
                            Current temperature: {weatherData.temperature}°F in Berlin
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Feels like {weatherData.feelsLike}°F
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Droplets className="h-4 w-4" />
                            Humidity: {weatherData.humidity * 100}%
                        </div>
                        <div className="flex items-center gap-2">
                            <Wind className="h-4 w-4" />
                            Wind: {weatherData.windSpeed} mph
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">{weatherData.alerts} weather alert</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                            Upgrade to Premium for {upgradePrice}
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
