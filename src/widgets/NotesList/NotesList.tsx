"use client";

import { Card } from "@/shared/ui";
import styles from "./NotesList.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { useGetNotes } from "@/entities/note";

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
                    <>
                        <p>{`Облачные заметки, ${data.length} штук:`}</p>
                        {data.map((note) => (
                            <Card className={styles.Note} key={note.id}>
                                {note.title && <h3 className={typographyStyles["title-medium"]}>{note.title}</h3>}
                                <p className={typographyStyles["body-medium"]}>{note.content}</p>
                            </Card>
                        ))}
                    </>
                )}
            </div>
            <div className={styles.wrapper}>
                <p>{`Локальные заметки:`}</p>
            </div>
        </div>
    );
};
