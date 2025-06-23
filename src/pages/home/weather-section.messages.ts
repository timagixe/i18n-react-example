import { defineMessages } from "react-intl";

export const messages = defineMessages({
    title: {
        id: "weather.title",
        defaultMessage: "Weather",
    },
    temperature: {
        id: "weather.temperature",
        defaultMessage: "Current temperature: {temp} in {city}",
    },
    feelsLike: {
        id: "weather.feels_like",
        defaultMessage: "Feels like {temp}",
    },
    humidity: {
        id: "weather.humidity",
        defaultMessage: "Humidity: {humidity}",
    },
    wind: {
        id: "weather.wind",
        defaultMessage: "Wind: {speed}",
    },
    alerts: {
        id: "weather.alerts",
        defaultMessage:
            "{count, plural, =0 {No weather alerts} =1 {1 weather alert} other {# weather alerts}}",
    },
    upgrade: {
        id: "currency.upgrade",
        defaultMessage: "Upgrade to Premium for {price}",
    },
});
