import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "./provider";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const runtime = "edge";

export const metadata: Metadata = {
  title: {
    default: "Tên Website - Mô tả ngắn gọn",
    template: "%s | Tên Website",
  },
  description: "Mô tả chi tiết về website, tối ưu cho SEO với từ khóa chính",
  keywords: ["từ khóa 1", "từ khóa 2", "từ khóa 3"],
  authors: [{ name: "Tên tác giả", url: "https://example.com" }],
  creator: "Tên người tạo",
  publisher: "Tên nhà xuất bản",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourwebsite.com"),
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
    url: "https://yourwebsite.com",
    title: "Tiêu đề cho Open Graph",
    description: "Mô tả cho Open Graph",
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider>
          <AppProvider>
            <main>{children}</main>
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
