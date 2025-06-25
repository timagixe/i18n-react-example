import { Card, CardHeader } from "@/components/ui/card";

export function Footer() {
    return (
        <Card className="m-4 mt-auto">
            <CardHeader>
                <div className="text-center text-muted-foreground">
                    © {new Date().getFullYear()} Your Company Name. All rights reserved.
                </div>
            </CardHeader>
        </Card>
    );
}
