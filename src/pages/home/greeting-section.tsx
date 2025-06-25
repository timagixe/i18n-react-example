import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const getTimeOfDay = (hour: number): "morning" | "afternoon" | "evening" => {
    if (hour >= 17) return "evening";
    if (hour >= 12) return "afternoon";
    return "morning";
};

export function GreetingSection() {
    const userName = "Alex";

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Welcome to your personal dashboard
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Good {getTimeOfDay(new Date().getHours())}, {userName}!</h2>
                    <p className="text-muted-foreground">Wednesday, June 25, 2025</p>
                </div>
            </CardContent>
        </Card>
    );
}
