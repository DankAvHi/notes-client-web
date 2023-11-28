"use client";

import styles from "./NotesList.module.css";
import { useGetNotes, useNotesLocal } from "@/entities/note";
import { List } from "./List";

export const NotesList = () => {
    const { data: cloudNotes, error, isLoading } = useGetNotes();
    const { notes: localNotes } = useNotesLocal();

    return (
        <div className={styles.NotesList}>
            <div className={styles.wrapper}>
                {isLoading ? (
                    `Загрузка`
                ) : error ? (
                    <p>{`Ошибка при загрузке облачных заметок`}</p>
                ) : (
                    <List notes={cloudNotes} title={`Облачные заметки`} />
                )}
            </div>
            <div className={styles.wrapper}>
                <List notes={localNotes} title={"Локальные заметки"} />
            </div>
        </div>
    );
};
