"use client";

import { useParams } from "next/navigation";
import { Editor } from "./Editor";
import { TopBar } from "./TopBar";
import { EditProvider } from "./edit.provider";
import styles from "./page.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { useNotesContext } from "@/app/providers";

export default function Edit() {
    const { editid } = useParams<{ editid: string }>();
    const { getNote } = useNotesContext();

    const isNew = editid === "new";
    const editableId = isNew ? undefined : +editid;

    if (typeof editableId !== "undefined" && isNaN(editableId)) {
        return <h1 className={`${typographyStyles["display-medium"]} ${styles.error}`}>{`Неверный URL`}</h1>;
    }
    if (typeof editableId !== "undefined" && getNote(editableId)?.createdAt === undefined) {
        return (
            <h1
                className={`${typographyStyles["display-medium"]} ${styles.error}`}
            >{`Заметка не существует, или была удалена`}</h1>
        );
    }

    return (
        <EditProvider id={editableId} isNew={isNew}>
            <main className={styles.edit}>
                <TopBar />
                <Editor />
            </main>
        </EditProvider>
    );
}
