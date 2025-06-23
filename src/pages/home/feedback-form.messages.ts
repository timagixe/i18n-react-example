import { defineMessages } from "react-intl";

export const messages = defineMessages({
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
