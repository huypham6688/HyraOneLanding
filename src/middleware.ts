import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["vi", "en", "ja"],

  // Used when no locale matches
  defaultLocale: "vi",
  localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next/static|images|_next/image|health-check|img/|favicon.ico).*)],
};
