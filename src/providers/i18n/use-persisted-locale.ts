import { useEffect, useState } from "react";

export function usePersistedLocale(defaultLocale: string = "en") {
    const [locale, setLocale] = useState(() => {
        return localStorage.getItem("locale") || defaultLocale;
    });

    useEffect(() => {
        localStorage.setItem("locale", locale);
    }, [locale]);

    return [locale, setLocale] as const;
}
