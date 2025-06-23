import { Card, CardHeader } from "@/components/ui/card";
import { useIntl } from "react-intl";
import { messages } from "./footer.messages";

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
