import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/providers/theme-provider";
import { Globe, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const locales = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export function Navigation() {
    const [locale, setLocale] = useState("en");
    const { theme, setTheme } = useTheme();

    return (
        <Card className="m-4">
            <CardHeader>
                <div className="flex flex-col lg:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-6">
                        <CardTitle className="text-2xl font-bold flex items-center gap-2">
                            <Globe className="h-6 w-6" />
                            My World Dashboard
                        </CardTitle>
                    </div>

                    <nav className="flex items-center gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `transition-colors ${
                                    isActive
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `transition-colors ${
                                    isActive
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </nav>

                    <div className="flex flex-wrap gap-2">
                        {/* Language Switcher */}
                        <Select value={locale} onValueChange={setLocale}>
                            <SelectTrigger className="w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {locales.map((locale) => (
                                    <SelectItem key={locale.code} value={locale.code}>
                                        <span className="flex items-center gap-2">
                                            <span>{locale.flag}</span>
                                            <span>{locale.name}</span>
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Theme Switcher */}
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="flex items-center gap-2"
                        >
                            {theme === "light" ? (
                                <Moon className="h-4 w-4" />
                            ) : (
                                <Sun className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
}
