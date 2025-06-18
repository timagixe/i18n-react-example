import { useMemo, useState, useEffect, type PropsWithChildren } from "react";
import { LocaleContext } from "./locale-context";

function usePersistedLocale(defaultLocale: string = "en") {
    const [locale, setLocale] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("locale") || defaultLocale;
        }
        return defaultLocale;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("locale", locale);
        }
    }, [locale]);

    return [locale, setLocale] as const;
}

export function LocaleProvider({ children }: PropsWithChildren) {
    const [locale, setLocale] = usePersistedLocale();

    const contextValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

    return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
}
