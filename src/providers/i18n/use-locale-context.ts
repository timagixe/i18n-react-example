import { useContext } from "react";
import { LocaleSetterContext } from "./locale-setter-context";

export function useLocaleSetterContext() {
    const context = useContext(LocaleSetterContext);

    if (!context) {
        throw new Error(
            "useLocaleSetterContext must be used within a LocaleSetterContext.Provider",
        );
    }

    return context;
}
