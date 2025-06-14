"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export function CalendarSection() {
    // Mock calendar events
    const events = [
        {
            id: 1,
            title: "Team Meeting",
            date: new Date(2024, 0, 16, 10, 0),
            type: "work",
        },
        {
            id: 2,
            title: "Doctor Appointment",
            date: new Date(2024, 0, 17, 14, 30),
            type: "personal",
        },
        {
            id: 3,
            title: "Project Deadline",
            date: new Date(2024, 0, 18, 17, 0),
            type: "work",
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Upcoming Events
                    </div>
                    <Badge variant="secondary" className="text-xs">
                        {events.length === 0
                            ? "No events"
                            : events.length === 1
                              ? "1 event"
                              : `${events.length} events`}{" "}
                        this week
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {events.length === 0 ? (
                        <p className="text-muted-foreground text-sm">No upcoming events</p>
                    ) : (
                        events.map((event) => (
                            <div
                                key={event.id}
                                className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                            >
                                <div>
                                    <h4 className="font-medium text-sm">{event.title}</h4>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        {new Intl.DateTimeFormat("en", {
                                            month: "short",
                                            day: "numeric",
                                        }).format(event.date)}{" "}
                                        at{" "}
                                        {new Intl.DateTimeFormat("en", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }).format(event.date)}
                                    </div>
                                </div>
                                <Badge
                                    variant={event.type === "work" ? "default" : "secondary"}
                                    className="text-xs"
                                >
                                    {event.type}
                                </Badge>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
