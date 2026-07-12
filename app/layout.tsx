import type {Metadata} from "next";
import {Ubuntu_Mono, Work_Sans} from "next/font/google";
import "./globals.css";

const fontNormal = Work_Sans({
    variable: "--font-normal",
    subsets: ["latin"],
});

const fontMono = Ubuntu_Mono({
    variable: "--font-mono",
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Delano van den Ham",
    description: "Personal project portfolio and blog",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <html
            lang="en"
            className={`${fontNormal.className} ${fontMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
