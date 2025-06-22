import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useEffect, useMemo, useState } from "react";
import enMessages from "./locales/en.json";
import { usePersistedLocale } from "./use-persisted-locale";
import { LocaleContext } from "./locale-context";

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
    const [locale, setLocale] = usePersistedLocale();
    const { messages } = useLoadMessages(locale);

    const contextValue = useMemo(() => ({ setLocale }), [setLocale]);

    if (!messages) {
        return null;
    }

    return (
        <LocaleContext.Provider value={contextValue}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
}
