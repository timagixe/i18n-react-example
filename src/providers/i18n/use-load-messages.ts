import { useCallback } from "react";
import enMessages from "./locales/en.json";

const loadMessages = async (locale: string) => {
    switch (locale) {
        case "es":
            return (await import("./locales/es.json")).default;
        case "ar":
            return (await import("./locales/ar.json")).default;
        case "en":
        default:
            return enMessages;
    }
};

export function useLoadMessages() {
    return useCallback(
        ({
            locale,
            onSuccess,
            onError,
        }: {
            locale: string;
            onSuccess: (messages: Record<string, string>) => void;
            onError: (error: unknown) => void;
        }) => {
            return loadMessages(locale).then(onSuccess).catch(onError);
        },
        [],
    );
}
