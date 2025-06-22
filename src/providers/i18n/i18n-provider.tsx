import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useEffect, useMemo, useState } from "react";
import { usePersistedLocale } from "./use-persisted-locale";
import { LocaleSetterContext } from "./locale-setter-context";
import { useLoadMessages } from "./use-load-messages";

export function I18NProvider({ children }: PropsWithChildren) {
    const [locale, setLocale] = usePersistedLocale();
    const [messages, setMessages] = useState<Record<string, string> | null>(null);
    const loadMessages = useLoadMessages();

    const contextValue = useMemo(
        () => ({
            setLocale: (locale: string) => {
                loadMessages({
                    locale,
                    onError: console.error,
                    onSuccess: (messages) => {
                        setLocale(locale);
                        setMessages(messages);
                    },
                });
            },
        }),
        [loadMessages, setLocale],
    );

    useEffect(() => {
        loadMessages({ locale, onSuccess: setMessages, onError: console.error });
    }, [locale, loadMessages]);

    if (!messages) {
        return null;
    }

    return (
        <LocaleSetterContext.Provider value={contextValue}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LocaleSetterContext.Provider>
    );
}
