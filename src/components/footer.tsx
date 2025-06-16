import { Card, CardHeader } from "@/components/ui/card";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
    copyright: {
        description: "The copyright message in the footer",
        defaultMessage: "© {year, date, ::yyyy} Your Company Name. All rights reserved.",
    },
});

export function Footer() {
    const intl = useIntl();

    return (
        <Card className="m-4 mt-auto">
            <CardHeader>
                <div className="text-center text-muted-foreground">
                    {intl.formatMessage(messages.copyright, {
                        year: new Date(),
                    })}
                </div>
            </CardHeader>
        </Card>
    );
}
