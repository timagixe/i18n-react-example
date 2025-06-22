import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { type PropsWithChildren } from "react";
import rtlDetect from "rtl-detect";
import { useIntl } from "react-intl";
import { useSyncDocumentDirection } from "./use-sync-document-direction";

export function DirectionProvider({ children }: PropsWithChildren) {
    const intl = useIntl();
    const direction = rtlDetect.getLangDir(intl.locale);

    useSyncDocumentDirection(intl.locale);

    return <RadixDirectionProvider dir={direction}>{children}</RadixDirectionProvider>;
}
