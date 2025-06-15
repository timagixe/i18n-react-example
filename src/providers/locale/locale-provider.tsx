import { useMemo, useState, type PropsWithChildren } from "react";
import { LocaleContext } from "./locale-context";

export function LocaleProvider({ children }: PropsWithChildren) {
    const [locale, setLocale] = useState("en");

    const contextValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

    return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
}
