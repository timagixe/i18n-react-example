import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useLocaleContext } from "../locale";
import { useEffect, useState } from "react";
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

function useLoadMessages(locale: string) {
    const [messages, setMessages] = useState<Record<string, string> | null>(null);

    useEffect(() => {
        loadMessages(locale).then(setMessages).catch(console.error);
    }, [locale]);

    return { messages };
}

export function I18NProvider({ children }: PropsWithChildren) {
    const localeContext = useLocaleContext();
    const { messages } = useLoadMessages(localeContext.locale);

    if (!messages) {
        return null;
    }

    return (
        <IntlProvider locale={localeContext.locale} messages={messages}>
            {children}
        </IntlProvider>
    );
}
