"use client";

import { IconButton } from "@/shared/ui";
import styles from "./TopBar.module.css";
import { ArrowBack, Attachment, DeleteForever, PushPin } from "@/shared/assets/icons";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { useEditContext } from "./edit.provider";

export const TopBar = () => {
    const { note, setNote, exitEditor } = useEditContext();

    const togglePinNote = () => setNote((prev) => ({ ...prev, pinned: !prev }));
    const deleteNote = () => setNote((prev) => ({ ...prev, deleted: true }));

    return (
        <header className={styles.TopBar}>
            <IconButton className={styles.back} onClick={exitEditor}>
                <ArrowBack />
            </IconButton>
            <h2 className={`${typographyStyles["title-large"]} ${styles.title}`}>
                {note.title && note.title.length > 0 ? note.title : "Заголовок..."}
            </h2>
            <div className={styles.actions}>
                <IconButton onClick={togglePinNote} className={styles.action}>
                    <PushPin className={styles.actionIcon} />
                </IconButton>
                <IconButton className={styles.action}>
                    <Attachment className={styles.actionIcon} />
                </IconButton>
                <IconButton onClick={deleteNote} className={styles.action}>
                    <DeleteForever className={styles.actionIcon} />
                </IconButton>
            </div>
        </header>
    );
};
