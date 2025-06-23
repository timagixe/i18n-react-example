import { defineMessages } from "react-intl";

export const messages = defineMessages({
    title: {
        description: "The about page title",
        defaultMessage: "About Us",
    },
    description: {
        description: "The about page description",
        defaultMessage: "This is the about page of our application.",
    },
    welcomeMessage: {
        description: "Welcome message about the company with rich text formatting",
        defaultMessage: "Welcome to <highlight>{company}</highlight>! We're a <bold>leading weather service</bold> dedicated to providing <italic>accurate and reliable</italic> weather information. You can visit our <link>main website</link> for more details about our services.",
    },
    featureList: {
        description: "List of company features and services",
        defaultMessage: "Our key services include <feature1>real-time weather updates</feature1>, <feature2>detailed forecasts</feature2>, and <feature3>weather alerts</feature3> to keep you informed and safe.",
    },
    contactInfo: {
        description: "Contact information with clickable links",
        defaultMessage: "Get in touch with us: <email>contact@sunnybeachweather.com</email> | <phone>+1 (555) 123-4567</phone> | Visit our <website>website</website>",
    },
});
