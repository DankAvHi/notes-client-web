import type { Metadata, Viewport } from "next";
import { SWRProvider } from "./providers";
// eslint-disable-next-line import/no-internal-modules
import "@/shared/styles/index.css";
import { NotesProvider } from "./providers/Notes.provider";

const APP_NAME = "Заметки";
const APP_DEFAULT_TITLE = "Заметки";
const APP_TITLE_TEMPLATE = "%s - Заметки";
const APP_DESCRIPTION = "Приложение для создания заметок";

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};

export const viewport: Viewport = {
    themeColor: "#005ac1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SWRProvider>
            <NotesProvider>
                <html lang="ru">
                    <body>
                        <div id="root">{children}</div>
                    </body>
                </html>
            </NotesProvider>
        </SWRProvider>
    );
}
