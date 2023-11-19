import type { Metadata } from "next";
import { SWRProvider } from "./providers";
// eslint-disable-next-line import/no-internal-modules
import "@/shared/styles/index.css";

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
