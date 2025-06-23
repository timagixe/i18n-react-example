import { defineMessages } from "react-intl";

export const messages = defineMessages({
    welcome: {
        description: "The welcome message shown at the top of the dashboard",
        defaultMessage: "Welcome to your personal dashboard",
    },
    greeting: {
        description:
            "Time-based greeting message, where {name} is the user's name and {timeOfDay} is the time period (morning/afternoon/evening)",
        defaultMessage:
            "{timeOfDay, select, morning {Good morning, {name}!} afternoon {Good afternoon, {name}!} evening {Good evening, {name}!} other {Hello, {name}!}}",
    },
});
