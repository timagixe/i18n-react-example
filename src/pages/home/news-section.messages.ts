import { defineMessages } from "react-intl";

export const messages = defineMessages({
    title: {
        description: "The title of the news section showing daily news articles",
        defaultMessage: "Daily News",
    },
    published: {
        description:
            "The published date text for news articles, where {date} is the formatted date and time",
        defaultMessage: "Published {date}",
    },
    readMore: {
        description: "The text for the button that allows users to read the full article",
        defaultMessage: "Read more",
    },
    articlesCount: {
        description:
            "The text showing the number of available articles, with plural forms for different counts",
        defaultMessage:
            "{count, plural, =0 {No articles} =1 {1 article} other {# articles}} available",
    },
});
