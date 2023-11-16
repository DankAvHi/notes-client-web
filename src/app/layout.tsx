import type { Metadata } from "next";
import "@/shared/styles/index.css";
import { SWRProvider } from "./providers";

export const metadata: Metadata = {
    title: "Заметки",
    description: "Приложение для создания заметок",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SWRProvider>
            <html lang="ru">
                <body>{children}</body>
            </html>
        </SWRProvider>
    );
}
