import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ["en", "vi"],

    // Used when no locale matches
    defaultLocale: "en",

    // THÊM DÒNG NÀY
    localePrefix: "as-needed", // '/' sẽ dùng defaultLocale (en)

    localeDetection: true,
});