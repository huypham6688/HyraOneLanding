import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "vi"],
    defaultLocale: "en",
    localePrefix: "always", // THÊM DÒNG NÀY
    localeDetection: true,
});