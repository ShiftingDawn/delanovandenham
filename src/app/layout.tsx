import type {Metadata} from "next";
import {Montserrat, Ubuntu_Mono} from "next/font/google";
import "./globals.css";
import {NavBar} from "@/app/NavBar";
import {ThemeProvider} from "@teispace/next-themes";
import {Focus} from "@hugeicons/core-free-icons";
import {Footer} from "@/app/Footer";

const fontNormal = Montserrat({
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
            suppressHydrationWarning
        >
        <body className="min-h-full flex flex-col">
        <ThemeProvider attribute={"class"} value={{light: "latte", dark: "mocha"}}>
            <NavBar/>
            <main className={"container max-w-2xl mx-auto mb-16 px-4 pt-16 flex-1"}>
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
