import { DirectionProvider } from "./direction-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider>
            <DirectionProvider>{children}</DirectionProvider>
        </ThemeProvider>
    );
}
