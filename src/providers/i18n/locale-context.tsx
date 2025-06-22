import { createContext } from "react";

type LocaleContextType = {
    setLocale: (locale: string) => void;
};

export const LocaleContext = createContext<LocaleContextType | null>(null);
