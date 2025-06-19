"use client";

import { defineMessages, useIntl } from "react-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const messages = defineMessages({
    title: {
        description: "The title of the calendar section showing upcoming events",
        defaultMessage: "Upcoming Events",
    },
    noEvents: {
        description: "Message shown when there are no upcoming events",
        defaultMessage: "No upcoming events",
    },
    eventTime: {
        description: "Format for displaying event relative time and time, where {relativeTime} is the relative time and {time} is the formatted time",
        defaultMessage: "{relativeTime} at {time}",
    },
    eventsCount: {
        description: "Text showing the number of events this week, with plural forms for different counts",
        defaultMessage: "{count, plural, =0 {No events} =1 {1 event} other {# events}} this week",
    },
    eventType: {
        description: "Label for the event type badge",
        defaultMessage: "{type, select, work {Work} personal {Personal} other {Other}}",
    },
});

export function CalendarSection() {
    const intl = useIntl();

    // Mock calendar events with realistic dates
    const events = [
        {
            id: 1,
            title: "Team Meeting",
            date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
            type: "work",
        },
        {
            id: 2,
            title: "Doctor Appointment",
            date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
            type: "personal",
        },
        {
            id: 3,
            title: "Project Deadline",
            date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            type: "work",
        },
    ];

    // Helper function to get relative time
    const getRelativeTime = (date: Date) => {
        const now = new Date();
        const diffTime = date.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return intl.formatRelativeTime(0, "day");
        } else if (diffDays === 1) {
            return intl.formatRelativeTime(1, "day");
        } else {
            return intl.formatRelativeTime(diffDays, "day");
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        {intl.formatMessage(messages.title)}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                        {intl.formatMessage(messages.eventsCount, { count: events.length })}
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {events.length === 0 ? (
                        <p className="text-muted-foreground text-sm">
                            {intl.formatMessage(messages.noEvents)}
                        </p>
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
                                        {intl.formatMessage(messages.eventTime, {
                                            relativeTime: getRelativeTime(event.date),
                                            time: intl.formatTime(event.date, {
                                                hour: "numeric",
                                                minute: "2-digit",
                                            }),
                                        })}
                                    </div>
                                </div>
                                <Badge
                                    variant={event.type === "work" ? "default" : "secondary"}
                                    className="text-xs"
                                >
                                    {intl.formatMessage(messages.eventType, { type: event.type })}
                                </Badge>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
