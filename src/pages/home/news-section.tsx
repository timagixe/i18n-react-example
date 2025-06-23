"use client";

import { useIntl } from "react-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink } from "lucide-react";
import { messages } from "./news-section.messages";

export function NewsSection() {
    const intl = useIntl();

    // Mock news data
    const newsArticles = [
        {
            id: 1,
            title: "Global Climate Summit Reaches Historic Agreement",
            publishedAt: new Date(2024, 0, 15, 10, 30),
            category: "Environment",
        },
        {
            id: 2,
            title: "Tech Innovation Drives Economic Growth",
            publishedAt: new Date(2024, 0, 14, 14, 15),
            category: "Technology",
        },
        {
            id: 3,
            title: "International Space Station Mission Success",
            publishedAt: new Date(2024, 0, 13, 9, 45),
            category: "Science",
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Newspaper className="h-5 w-5" />
                        {intl.formatMessage(messages.title)}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                        {intl.formatMessage(messages.articlesCount, { count: newsArticles.length })}
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {newsArticles.map((article) => (
                        <div
                            key={article.id}
                            className="border-b border-border pb-3 last:border-b-0"
                        >
                            <h3 className="font-medium text-sm mb-1">{article.title}</h3>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>
                                    {intl.formatMessage(messages.published, {
                                        date: intl.formatDate(article.publishedAt, {
                                            month: "short",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    })}
                                </span>
                                <Button variant="ghost" size="sm" className="h-auto p-1">
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    {intl.formatMessage(messages.readMore)}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
