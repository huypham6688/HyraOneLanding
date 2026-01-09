import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "@/app/provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";

import "@/app/globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/app/[locale]/(home)/components/Hero";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });



export const metadata: Metadata = {
    title: {
        default: "HyraOne - An All-in-One bank",
        template: "%s | Tên Website",
    },
    description: "An All-in-One bank with unifying accounts, payments, savings, lending, DAO, rewards and compliance.",
    keywords: ["hyraone", "Hyra", "Hyra One"],
    authors: [{ name: "Tên tác giả", url: "https://example.com" }],
    creator: "admin",
    publisher: "HyraTek",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("http://localhost:3000/vi"),
    alternates: {
        canonical: "/",
        languages: {
            "vi-VN": "/vi",
            "en-US": "/en",
        },
    },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        url: "http://localhost:3000/vi",
        title: "HyraOne - An All-in-One bank",
        description: "An All-in-One bank with unifying accounts, payments, savings, lending, DAO, rewards and compliance.",
        siteName: "Tên Website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mô tả hình ảnh",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tiêu đề cho Twitter",
        description: "Mô tả cho Twitter",
        creator: "@twitter_handle",
        images: ["/twitter-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "mã_xác_minh_google",
        yandex: "mã_xác_minh_yandex",
        yahoo: "mã_xác_minh_yahoo",
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <AppProvider>
                        <Navbar />
                        <Hero />
                        <main>{children}</main>
                        <Footer />
                    </AppProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
