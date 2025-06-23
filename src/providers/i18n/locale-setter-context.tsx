import { createContext } from "react";

type LocaleSetterContextType = {
    setLocale: (locale: string) => void;
};

export const LocaleSetterContext = createContext<LocaleSetterContextType | null>(null);
