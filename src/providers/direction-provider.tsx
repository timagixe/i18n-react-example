import type { ComponentProps, PropsWithChildren } from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { useEffect } from "react";
import { useLocaleContext } from "./locale";
import rtlDetect from "rtl-detect";
type Direction = ComponentProps<typeof RadixDirectionProvider>["dir"];

function SyncDocumentDirection({ direction }: { direction: Direction }) {
    useEffect(() => {
        document.dir = direction;
    }, [direction]);

    return null;
}

export function DirectionProvider({ children }: PropsWithChildren) {
    const { locale } = useLocaleContext();
    const direction = rtlDetect.getLangDir(locale);

    return (
        <RadixDirectionProvider dir={direction}>
            {children}
            <SyncDocumentDirection direction={direction} />
        </RadixDirectionProvider>
    );
}
