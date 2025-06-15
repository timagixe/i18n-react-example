"use client";

import { defineMessages, useIntl } from "react-intl";
import { useEffect, useState } from "react";
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
import { MessageSquare, CheckCircle, User, Mail, MessageSquareMore, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

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

const genders = [
    { code: "male", message: messages.male },
    { code: "female", message: messages.female },
    { code: "other", message: messages.other },
    { code: "prefer_not_to_say", message: messages.preferNotToSay },
] as const;

export function FeedbackForm() {
    const intl = useIntl();

    const formSchema = z.object({
        name: z.string().min(1, intl.formatMessage(messages.errorName)),
        email: z.string().email(intl.formatMessage(messages.errorEmail)),
        gender: z.enum(["male", "female", "other", "prefer_not_to_say"] as const).optional(),
        message: z.string().min(1, intl.formatMessage(messages.errorMessage)),
    });

    type FormData = z.infer<typeof formSchema>;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            gender: undefined,
            message: "",
        },
    });

    const onSubmit = (data: FormData) => {
        // Simulate form submission
        setTimeout(() => {
            setSubmittedData(data);
            setIsSubmitted(true);
            form.reset();
        }, 500);
    };

    const {
        trigger,
        formState: { errors },
    } = form;

    useEffect(() => {
        // Get fields that have errors
        const fieldsWithErrors = Object.keys(errors);

        // If there are any fields with errors, trigger their validation
        if (fieldsWithErrors.length > 0) {
            trigger(fieldsWithErrors as Array<keyof FormData>);
        }
    }, [intl.locale, errors, trigger]);

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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder={intl.formatMessage(
                                                    messages.namePlaceholder,
                                                )}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder={intl.formatMessage(
                                                    messages.emailPlaceholder,
                                                )}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue
                                                    placeholder={intl.formatMessage(
                                                        messages.genderPlaceholder,
                                                    )}
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {genders.map((gender) => (
                                                <SelectItem key={gender.code} value={gender.code}>
                                                    {intl.formatMessage(gender.message)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder={intl.formatMessage(
                                                messages.messagePlaceholder,
                                            )}
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            {intl.formatMessage(messages.submit)}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
