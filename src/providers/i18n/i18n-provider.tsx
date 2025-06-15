import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useLocaleContext } from "../locale";
import enMessages from "./locales/en.json";
import esMessages from "./locales/es.json";
import arMessages from "./locales/ar.json";

const messages = {
    en: enMessages,
    es: esMessages,
    ar: arMessages,
};

export function I18NProvider({ children }: PropsWithChildren) {
    const localeContext = useLocaleContext();

    const nextLocale: keyof typeof messages =
        localeContext.locale in messages ? (localeContext.locale as keyof typeof messages) : "en";
    const nextMessages = messages[nextLocale];

    return (
        <IntlProvider locale={nextLocale} messages={nextMessages}>
            {children}
        </IntlProvider>
    );
}
