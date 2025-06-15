import type { PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "./locales/en.json";

const messages = {
    en: enMessages,
};

export function I18NProvider({ children }: PropsWithChildren) {
    return (
        <IntlProvider locale="en" messages={messages.en}>
            {children}
        </IntlProvider>
    );
}
