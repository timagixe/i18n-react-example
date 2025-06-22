import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useLocaleContext } from "../locale";
import { useEffect, useState } from "react";
import enMessages from "./locales/en.json";

function useLocaleMessages(locale: string) {
    const [messages, setMessages] = useState<Record<string, string> | null>(null);

    useEffect(() => {
        const loadMessages = async () => {
            try {
                let loadedMessages;
                switch (locale) {
                    case "es":
                        loadedMessages = (await import("./locales/es.json")).default;
                        break;
                    case "ar":
                        loadedMessages = (await import("./locales/ar.json")).default;
                        break;
                    case "en":
                    default:
                        loadedMessages = enMessages;
                        break;
                }
                setMessages(loadedMessages);
            } catch (error) {
                console.error("Error loading messages", error);
            }
        };
        loadMessages();
    }, [locale]);

    return { messages };
}

export function I18NProvider({ children }: PropsWithChildren) {
    const localeContext = useLocaleContext();
    const { messages } = useLocaleMessages(localeContext.locale);

    if (!messages) {
        return null;
    }

    return (
        <IntlProvider locale={localeContext.locale} messages={messages}>
            {children}
        </IntlProvider>
    );
}
