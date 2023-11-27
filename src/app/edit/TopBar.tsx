"use client";

import { IconButton } from "@/shared/ui";
import styles from "./TopBar.module.css";
import { ArrowBack, Attachment, DeleteForever, PushPin } from "@/shared/assets/icons";
import { useRouter } from "next/navigation";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { useEditContext } from "./edit.provider";
import { Note } from "@/shared/api";
import { useLocalNotes } from "@/entities/note";

export const TopBar = () => {
    const router = useRouter();
    const { title, content } = useEditContext();
    const { notes, setLocalNotes } = useLocalNotes();

    const backButtonOnClickHandler = () => {
        const id = notes.length > 0 ? notes.reduce((prev, cur) => (cur.id > prev.id ? cur : prev)).id + 1 : 0;
        const note: Note = { id, title, content };
        setLocalNotes([...notes, note]);
        router.back();
    };

    return (
        <header className={styles.TopBar}>
            <IconButton className={styles.back} onClick={backButtonOnClickHandler}>
                <ArrowBack />
            </IconButton>
            <h2 className={`${typographyStyles["title-large"]} ${styles.title}`}>
                {title.length > 0 ? title : "Заголовок..."}
            </h2>
            <div className={styles.actions}>
                <IconButton className={styles.action}>
                    <PushPin className={styles.actionIcon} />
                </IconButton>
                <IconButton className={styles.action}>
                    <Attachment className={styles.actionIcon} />
                </IconButton>
                <IconButton className={styles.action}>
                    <DeleteForever className={styles.actionIcon} />
                </IconButton>
            </div>
        </header>
    );
};
