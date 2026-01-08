"use client";

import "./globals.css";
import Link from "next/link";

// Render a styled 404 page for the root
export default function NotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background text-foreground">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
