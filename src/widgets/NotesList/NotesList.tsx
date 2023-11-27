"use client";

import { Card } from "@/shared/ui";
import styles from "./NotesList.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { List } from "./List";

export const NotesList = () => {
    const { data, error, isLoading } = useGetNotes();

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
