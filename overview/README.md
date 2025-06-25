### Why to Introduce the Internationalization

- Improves user experience and accessibility for different languages and regions
- Makes apps ready for global use
- Automatically formats numbers, dates, and currencies by locale
- Handles plural forms and grammar rules per language
- Easy to localize later, even if starting with just English

---

### When to Introduce the Internationalization

- As early as possible in the project lifecycle to avoid refactoring.
- Even for English-only apps to benefit from ICU formatting and better structure.
- Especially crucial for products with potential global reach or multiple user bases.

---

### Core Concepts

- **i18n (Internationalization):** Prepares software for localization.
- **l10n (Localization):** Adapts the content (text, images, layouts) to specific locales.
- **t9n (Translation):** Converts text from one language to another.
- **g11n (Globalization):** Combines all of the above to serve global audiences.
- **a11y (Accessibility):** Helps to make apps accessible to broader audiences, keyboard users and helps to simplify automation testing of your app in general.

---

### Recommended Libraries (React)

| Library      | Notes                                                                      |
| ------------ | -------------------------------------------------------------------------- |
| `react-intl` | Great ICU support, good docs, popular, but requires more boilerplate.      |
| `i18next`    | Most powerful ecosystem, plugin-rich, works with Next.js easily.           |
| `lingui`     | Lightweight, modern DX, built-in extraction, may be the most dev-friendly. |

> Pick based on: ecosystem, syntax preference, built-in tools (e.g., lazy loading, fallback handling).

---

### Formatting Support (via ICU)

ICU (International Components for Unicode) helps format content based on locale and grammar rules.

- **Pluralization:** Locale-aware handling of singular, plural, few, many, etc.
  → `=0 {No items}`, `one {1 item}`, `other {# items}`
- **Dates & Times:** Formats based on region
  → `January 1, 2025` vs `1 січня 2025` vs `01/01/25`
- **Numbers & Currencies:**
  → `1,000.00` vs `1.000,00`, `$12.99` vs `12,99 €`
- **Relative Time:**
  → `"2 hours ago"`, `"in 3 days"`
- **Units:**
  → `°F` ↔ `°C`, `miles` ↔ `km`
- **Gender Support:**
  → Switch between `he`, `she`, or `they` based on user data

> Intro to ICU: https://format-message.github.io/icu-message-format-for-translators/index.html
>
> ICU playground: https://format-message.github.io/icu-message-format-for-translators/editor.html

---

### Bidirectional Layouts (LTR ↔ RTL)

- Support Arabic, Hebrew, etc. by flipping layouts with `dir="rtl"`.
- CSS handles much of this automatically with logical properties (`margin-inline-*`, `padding-inline-*`, etc.).
- Use libraries like `rtl-detect` + `<DirectionProvider>` (e.g. from Radix) for dynamic switching.

> Examples:
>
> LTR: https://en.wikipedia.org/wiki/Main_Page
>
> RTL: https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D8%A9

---

### Design & Layout Considerations

- Text in some languages (e.g. German, French) may be 2–3× longer than English.
    - English word less than 10 characters - expect 2-3x longer text
    - English word more than 10 characters - expect 1.5x longer text
- UI must be really responsive: support flexible layouts, avoid hardcoded widths, enable line wrapping, text breaking and so on.

---

### Implementation Patterns

- Use wrappers like `<FormattedMessage>` (in JSX) or hooks like `useIntl` in `react-intl` (when operating with `string` values e.g. in input placeholders).
- Store translations as key-value JSON.
- Extract messages at build time via CLI into source locale files.
- Fallback to default locale if translation is missing.
- Rich-text formatting via JSX-friendly syntax in ICU (`<b>{chunk}</b>` style placeholders).
- Use local storage, cookies, query params, headers, or pathname for locale detection.

---

### Automated Translation Workflow

- GitHub Action runs on PR, extracts messages, sends to translation service (e.g. Languin).
- Translations are committed back automatically to the same PR.
- Tools like Tolgee provide in-context editing in the browser.

> DYOR when integrating 3rd party SaaS or libraries for translations based on your needs and who will be involved into supporting translations.

---

### Syncing with Backend

- If backend returns error codes, map them to translation keys on frontend.
- Optional: send current locale to backend (e.g. via headers or cookies or query params), when it needs to return back locale aware info

---

### Performance Tips

- `Intl` objects are expensive to instantiate – **cache them** if not relying on external libraries.
- Lazy-load translations to keep bundle small.
- Avoid flickering on language switch by waiting for translation files before rendering or switching locale only after messages loaded.

---

### Accessibility & UX Notes

- Show locale names in native language (e.g., `Français`, not `French`).
- Avoid flag icons: not all languages map cleanly to one country (e.g. en-US, en-GB, en-CA, en-AU).
- Sort locales by region or most popular first.

---

### Tooling & Libraries Mentioned

- `react-intl`, `formatjs/cli`, `lingui`, `i18next`, `rtl-detect`
- `Languin` – free SaaS for automated translation (integrated with GitHub Actions)
- `Tolgee` – UI translation in the browser (like Figma for i18n)
- `Intl.DisplayNames`, `Intl.NumberFormat`, `Intl.RelativeTimeFormat` (native JS Intl namespace)

---

### References

- https://languine.ai/
- https://formatjs.github.io/docs/react-intl/
- https://lingui.dev/
- https://www.i18next.com/
- https://react.i18next.com/
- https://github.com/i18next/next-i18next
- https://tolgee.io/
- https://format-message.github.io/icu-message-format-for-translators/
