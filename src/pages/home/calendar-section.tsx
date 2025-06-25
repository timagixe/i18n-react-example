import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export function CalendarSection() {
    const events = [
        {
            id: 1,
            title: "Team Meeting",
            date: new Date(Date.now() + 1 * 60 * 1000), // 1 minute from now
            type: "work",
        },
        {
            id: 2,
            title: "Doctor Appointment",
            date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
            type: "personal",
        },
        {
            id: 3,
            title: "Project Deadline",
            date: new Date(Date.now() + 5 * 7 * 24 * 60 * 60 * 1000), // 5 weeks from now
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
                        {events.length} event
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
                                        {event.date.toLocaleString()}
                                    </div>
                                </div>
                                <Badge
                                    variant={event.type === "work" ? "default" : "secondary"}
                                    className="text-xs"
                                >
                                    {event.type === "work" ? "Work" : "Personal"}
                                </Badge>
                            </div>
                        ))
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
