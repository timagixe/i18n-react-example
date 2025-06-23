"use client";

import { useIntl } from "react-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { messages } from "./greeting-section.messages";

const getTimeOfDay = (hour: number): "morning" | "afternoon" | "evening" => {
    if (hour >= 17) return "evening";
    if (hour >= 12) return "afternoon";
    return "morning";
};

export function GreetingSection() {
    const intl = useIntl();
    const userName = "Alex"; // In a real app, this would come from user context

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {intl.formatMessage(messages.welcome)}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">
                        {intl.formatMessage(messages.greeting, {
                            timeOfDay: getTimeOfDay(new Date().getHours()),
                            name: userName,
                        })}
                    </h2>
                    <p className="text-muted-foreground">
                        {intl.formatDate(new Date(), {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
