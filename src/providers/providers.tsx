import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: React.PropsWithChildren) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
