import { Card, CardHeader } from "@/components/ui/card";
import { FormattedMessage } from "react-intl";
import { messages } from "./footer.messages";

export function Footer() {
    return (
        <Card className="m-4 mt-auto">
            <CardHeader>
                <div className="text-center text-muted-foreground">
                    <FormattedMessage
                        {...messages.copyright}
                        values={{
                            year: new Date(),
                        }}
                    />
                </div>
            </CardHeader>
        </Card>
    );
}
