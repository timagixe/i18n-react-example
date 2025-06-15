import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "./locales/en.json";
import { useLocaleContext } from "../locale";

const messages = {
    en: enMessages,
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
