import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useLocaleContext } from "../locale";
import enMessages from "./locales/en.json";
import esMessages from "./locales/es.json";
import arMessages from "./locales/ar.json";

const _messages: Record<string, Record<string, string>> = {
    en: enMessages,
    es: esMessages,
    ar: arMessages,
};

export function I18NProvider({ children }: PropsWithChildren) {
    const localeContext = useLocaleContext();

    const locale = localeContext.locale in _messages ? localeContext.locale : "en";
    const messages = _messages[locale];

    return (
        <IntlProvider locale={locale} messages={messages}>
            {children}
        </IntlProvider>
    );
}
