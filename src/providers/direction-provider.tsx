import type { ComponentProps, PropsWithChildren } from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { useState } from "react";

type Direction = ComponentProps<typeof RadixDirectionProvider>["dir"];

export function DirectionProvider({ children }: PropsWithChildren) {
    const [direction] = useState<Direction>("ltr");

    return <RadixDirectionProvider dir={direction}>{children}</RadixDirectionProvider>;
}
