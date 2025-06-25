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

enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    PREFER_NOT_TO_SAY = "prefer_not_to_say",
}

const genderToMessageMap = {
    [Gender.MALE]: "Male",
    [Gender.FEMALE]: "Female",
    [Gender.OTHER]: "Other",
    [Gender.PREFER_NOT_TO_SAY]: "Prefer not to say",
} as const;

const genderOptions = Object.entries(genderToMessageMap).map(([code, message]) => ({
    code,
    message,
}));

export function FeedbackForm() {
    const formSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        gender: z
            .enum([Gender.MALE, Gender.FEMALE, Gender.OTHER, Gender.PREFER_NOT_TO_SAY] as const)
            .optional(),
        message: z.string().min(1, "Message is required"),
    });

    type FormData = z.infer<typeof formSchema>;

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
        console.log(data);
    };

    if (form.formState.isSubmitSuccessful && form.formState.isSubmitSuccessful) {
        const gender = form.getValues().gender;

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
                            <span>{form.getValues().name}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Email:</span>
                            <span>{form.getValues().email}</span>
                        </div>

                        {gender && (
                            <div className="flex items-center gap-2 text-sm">
                                <UserRound className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">Gender:</span>
                                <span>{genderToMessageMap[gender]}</span>
                            </div>
                        )}

                        <div className="flex items-start gap-2 text-sm">
                            <MessageSquareMore className="h-4 w-4 text-muted-foreground mt-1" />
                            <div>
                                <span className="font-medium">Message:</span>
                                <p className="mt-1 text-muted-foreground">
                                    {form.getValues().message}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Button
                        onClick={() => {
                            form.reset();
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder={"Your name"} {...field} />
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
                                                placeholder={"Your email"}
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
                                                <SelectValue placeholder={"Select your gender"} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {genderOptions.map((option) => (
                                                <SelectItem key={option.code} value={option.code}>
                                                    {option.message}
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
                                            placeholder={"Your message"}
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit Feedback
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
