"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageSquare, CheckCircle, AlertCircle, User, Mail, MessageSquareMore, UserRound } from "lucide-react";

export function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

    const genders = [
        { code: "male", name: "Male" },
        { code: "female", name: "Female" },
        { code: "other", name: "Other" },
        { code: "prefer_not_to_say", name: "Prefer not to say" },
    ];

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate form submission
            setTimeout(() => {
                setSubmittedData(formData);
                setIsSubmitted(true);
                setFormData({ name: "", email: "", gender: "", message: "" });
            }, 500);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };

    if (isSubmitted && submittedData) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Feedback Submitted
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>Thank you for your feedback!</AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Name:</span>
                            <span>{submittedData.name}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Email:</span>
                            <span>{submittedData.email}</span>
                        </div>

                        {submittedData.gender && (
                            <div className="flex items-center gap-2 text-sm">
                                <UserRound className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">Gender:</span>
                                <span>
                                    {genders.find((g) => g.code === submittedData.gender)?.name}
                                </span>
                            </div>
                        )}

                        <div className="flex items-start gap-2 text-sm">
                            <MessageSquareMore className="h-4 w-4 text-muted-foreground mt-1" />
                            <div>
                                <span className="font-medium">Message:</span>
                                <p className="mt-1 text-muted-foreground">{submittedData.message}</p>
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={() => {
                            setIsSubmitted(false);
                            setSubmittedData(null);
                        }}
                        className="w-full"
                        variant="outline"
                    >
                        Submit Another
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Feedback
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Input
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className={errors.name ? "border-red-500" : ""}
                            />
                            {errors.name && (
                                <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                                    <AlertCircle className="h-3 w-3" />
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div>
                            <Input
                                type="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && (
                                <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                                    <AlertCircle className="h-3 w-3" />
                                    {errors.email}
                                </div>
                            )}
                        </div>
                    </div>

                    <Select
                        value={formData.gender}
                        onValueChange={(value) => handleInputChange("gender", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                            {genders.map((gender) => (
                                <SelectItem key={gender.code} value={gender.code}>
                                    {gender.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div>
                        <Textarea
                            placeholder="Your message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            className={`min-h-[100px] ${errors.message ? "border-red-500" : ""}`}
                        />
                        {errors.message && (
                            <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                                <AlertCircle className="h-3 w-3" />
                                {errors.message}
                            </div>
                        )}
                    </div>

                    <Button type="submit" className="w-full">
                        Submit Feedback
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
