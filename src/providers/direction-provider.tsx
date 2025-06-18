import type { ComponentProps, PropsWithChildren } from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { useEffect } from "react";
import rtlDetect from "rtl-detect";
import { useIntl } from "react-intl";
type Direction = ComponentProps<typeof RadixDirectionProvider>["dir"];

function SyncDocumentDirection({ direction }: { direction: Direction }) {
    useEffect(() => {
        document.dir = direction;
    }, [direction]);

    return null;
}

export function DirectionProvider({ children }: PropsWithChildren) {
    const intl = useIntl();
    const direction = rtlDetect.getLangDir(intl.locale);

    return (
        <RadixDirectionProvider dir={direction}>
            {children}
            <SyncDocumentDirection direction={direction} />
        </RadixDirectionProvider>
    );
}
