import { createContext } from "react";

type LocaleContextType = {
    locale: string;
    setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType | null>(null);
