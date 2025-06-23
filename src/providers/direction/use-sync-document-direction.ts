import { useEffect } from "react";
import rtlDetect from "rtl-detect";

export function useSyncDocumentDirection(locale: string) {
    const direction = rtlDetect.getLangDir(locale);

    useEffect(() => {
        document.dir = direction;
    }, [direction]);
}
