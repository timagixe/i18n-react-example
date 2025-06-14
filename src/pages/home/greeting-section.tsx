"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export function GreetingSection() {
    // Get current time to determine greeting
    const currentHour = new Date().getHours();
    let greeting = "Good morning, Alex!";

    if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon, Alex!";
    } else if (currentHour >= 17) {
        greeting = "Good evening, Alex!";
    }

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
                    <h2 className="text-xl font-semibold">{greeting}</h2>
                    <p className="text-muted-foreground">
                        {new Intl.DateTimeFormat("en", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }).format(new Date())}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
