import { defineMessages } from "react-intl";

export const messages = defineMessages({
    title: {
        description: "The title of the calendar section showing upcoming events",
        defaultMessage: "Upcoming Events",
    },
    noEvents: {
        description: "Message shown when there are no upcoming events",
        defaultMessage: "No upcoming events",
    },
    eventTime: {
        description:
            "Format for displaying event date and time, where {date} is the formatted date and {time} is the formatted time",
        defaultMessage: "{date} at {time}",
    },
    eventsCount: {
        description:
            "Text showing the number of events this week, with plural forms for different counts",
        defaultMessage: "{count, plural, =0 {No events} =1 {1 event} other {# events}} this week",
    },
    eventType: {
        description: "Label for the event type badge",
        defaultMessage: "{type, select, work {Work} personal {Personal} other {Other}}",
    },
});
