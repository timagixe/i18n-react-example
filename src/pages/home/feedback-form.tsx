"use client";

import type React from "react";
import { defineMessages, useIntl } from "react-intl";
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
import {
    MessageSquare,
    CheckCircle,
    AlertCircle,
    User,
    Mail,
    MessageSquareMore,
    UserRound,
} from "lucide-react";

const messages = defineMessages({
    title: {
        description: "The title of the feedback form section",
        defaultMessage: "Feedback",
    },
    namePlaceholder: {
        description: "Placeholder text for the name input field",
        defaultMessage: "Your name",
    },
    emailPlaceholder: {
        description: "Placeholder text for the email input field",
        defaultMessage: "Your email",
    },
    genderPlaceholder: {
        description: "Placeholder text for the gender selection dropdown",
        defaultMessage: "Select your gender",
    },
    messagePlaceholder: {
        description: "Placeholder text for the message textarea",
        defaultMessage: "Your message",
    },
    submit: {
        description: "Text for the submit button",
        defaultMessage: "Submit Feedback",
    },
    submitAnother: {
        description: "Text for the button to submit another feedback after successful submission",
        defaultMessage: "Submit Another",
    },
    success: {
        description: "Success message shown after feedback is submitted",
        defaultMessage: "Thank you for your feedback!",
    },
    errorName: {
        description: "Error message shown when name field is empty",
        defaultMessage: "Name is required",
    },
    errorEmail: {
        description: "Error message shown when email is invalid or empty",
        defaultMessage: "Valid email is required",
    },
    errorMessage: {
        description: "Error message shown when message field is empty",
        defaultMessage: "Message is required",
    },
    submittedTitle: {
        description: "Title shown after feedback is submitted",
        defaultMessage: "Feedback Submitted",
    },
    submittedName: {
        description: "Label for the submitted name in the success view",
        defaultMessage: "Name:",
    },
    submittedEmail: {
        description: "Label for the submitted email in the success view",
        defaultMessage: "Email:",
    },
    submittedGender: {
        description: "Label for the submitted gender in the success view",
        defaultMessage: "Gender:",
    },
    submittedMessage: {
        description: "Label for the submitted message in the success view",
        defaultMessage: "Message:",
    },
    male: {
        description: "Option for male gender in the gender selection dropdown",
        defaultMessage: "Male",
    },
    female: {
        description: "Option for female gender in the gender selection dropdown",
        defaultMessage: "Female",
    },
    other: {
        description: "Option for other gender in the gender selection dropdown",
        defaultMessage: "Other",
    },
    preferNotToSay: {
        description: "Option for preferring not to specify gender in the gender selection dropdown",
        defaultMessage: "Prefer not to say",
    },
});

export function FeedbackForm() {
    const intl = useIntl();
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
        { code: "male", message: messages.male },
        { code: "female", message: messages.female },
        { code: "other", message: messages.other },
        { code: "prefer_not_to_say", message: messages.preferNotToSay },
    ];

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = intl.formatMessage(messages.errorName);
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = intl.formatMessage(messages.errorEmail);
        }

        if (!formData.message.trim()) {
            newErrors.message = intl.formatMessage(messages.errorMessage);
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
                        {intl.formatMessage(messages.submittedTitle)}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>{intl.formatMessage(messages.success)}</AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">
                                {intl.formatMessage(messages.submittedName)}
                            </span>
                            <span>{submittedData.name}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">
                                {intl.formatMessage(messages.submittedEmail)}
                            </span>
                            <span>{submittedData.email}</span>
                        </div>

                        {submittedData.gender && (
                            <div className="flex items-center gap-2 text-sm">
                                <UserRound className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">
                                    {intl.formatMessage(messages.submittedGender)}
                                </span>
                                <span>
                                    {intl.formatMessage(
                                        genders.find((g) => g.code === submittedData.gender)
                                            ?.message || messages.other,
                                    )}
                                </span>
                            </div>
                        )}

                        <div className="flex items-start gap-2 text-sm">
                            <MessageSquareMore className="h-4 w-4 text-muted-foreground mt-1" />
                            <div>
                                <span className="font-medium">
                                    {intl.formatMessage(messages.submittedMessage)}
                                </span>
                                <p className="mt-1 text-muted-foreground">
                                    {submittedData.message}
                                </p>
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
                        {intl.formatMessage(messages.submitAnother)}
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
                    {intl.formatMessage(messages.title)}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Input
                                placeholder={intl.formatMessage(messages.namePlaceholder)}
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
                                placeholder={intl.formatMessage(messages.emailPlaceholder)}
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
                            <SelectValue
                                placeholder={intl.formatMessage(messages.genderPlaceholder)}
                            />
                        </SelectTrigger>
                        <SelectContent>
                            {genders.map((gender) => (
                                <SelectItem key={gender.code} value={gender.code}>
                                    {intl.formatMessage(gender.message)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div>
                        <Textarea
                            placeholder={intl.formatMessage(messages.messagePlaceholder)}
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
                        {intl.formatMessage(messages.submit)}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
