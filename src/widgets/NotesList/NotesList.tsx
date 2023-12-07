"use client";

import styles from "./NotesList.module.css";
import { List } from "./List";
import { useNotesContext } from "@/app/providers";

export const NotesList = () => {
    const { getNotes } = useNotesContext();
    const notes = getNotes();
    return (
        <div className={styles.NotesList}>
            <List notes={notes || []} />
        </div>
    );
};
